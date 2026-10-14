"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";

type Project = (typeof portfolio.projects)[number];
type DetailedProject = Extract<Project, { fullTitle: string }>;

function isDetailedProject(project: Project): project is DetailedProject {
  return "fullTitle" in project;
}

export function ProjectShowcase() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const inactiveIndices = portfolio.projects.map((_, index) => index).filter((index) => index !== activeIndex);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <>
      <div
        className="project-deck"
        role="region"
        aria-label="Project showcase"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            setActiveIndex((current) => (current + (event.key === "ArrowRight" ? 1 : portfolio.projects.length - 1)) % portfolio.projects.length);
          }
        }}
      >
        {portfolio.projects.map((project, index) => {
          const position = index === activeIndex ? "center" : index === inactiveIndices[0] ? "left" : "right";
          const detailed = isDetailedProject(project);
          const category = "category" in project ? project.category : "COMING SOON";
          const platform = project.platform;

          return (
            <article className={`project-deck-card is-${position}`} key={project.number}>
              <div className="project-deck-tags">
                <span className={detailed ? "project-deck-tag project-deck-tag-featured" : "project-deck-tag"}>{category}</span>
                <span className="project-deck-tag">{platform}</span>
              </div>
              <div className="project-deck-heading">
                <h3>{project.title}</h3>
              </div>
              <p className="project-deck-description">{project.detail}</p>
              <span className="project-deck-action" aria-hidden="true">
                {position === "center" ? detailed ? "VIEW PROJECT ↗" : "DETAILS TO BE ADDED" : "SELECT PROJECT →"}
              </span>
              {(position !== "center" || detailed) && (
                <button
                  type="button"
                  className="project-card-hit-area"
                  aria-label={position === "center" ? `View ${project.title} project details` : `Show ${project.title}`}
                  aria-haspopup={position === "center" && detailed ? "dialog" : undefined}
                  onClick={() => {
                    if (position === "center" && detailed) {
                      setSelectedProject(project);
                      setIsOpen(true);
                    }
                    else setActiveIndex(index);
                  }}
                />
              )}
            </article>
          );
        })}
      </div>
      <div className="project-deck-controls" aria-label="Project navigation">
        <button type="button" aria-label="Previous project" onClick={() => setActiveIndex((current) => (current + portfolio.projects.length - 1) % portfolio.projects.length)}>←</button>
        <span aria-live="polite">{portfolio.projects[activeIndex].number} / {String(portfolio.projects.length).padStart(2, "0")}</span>
        <button type="button" aria-label="Next project" onClick={() => setActiveIndex((current) => (current + 1) % portfolio.projects.length)}>→</button>
      </div>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onClose={() => {
          setIsOpen(false);
          setSelectedProject(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        {selectedProject && (
          <div className="project-dialog-content">
            <header className="project-dialog-header">
              <p className="eyebrow">{selectedProject.number} / {selectedProject.category}</p>
              <button className="project-dialog-close" type="button" onClick={() => dialogRef.current?.close()}>
                CLOSE <span aria-hidden="true">×</span>
              </button>
            </header>
            <h2 id="project-dialog-title" className="project-dialog-title">{selectedProject.fullTitle}</h2>
            <p className="project-dialog-summary">{selectedProject.detail}</p>

            <div className="project-dialog-details">
              <section aria-labelledby="project-overview-title">
                <h3 id="project-overview-title">Project overview</h3>
                <p className="project-dialog-description">{selectedProject.overview}</p>
              </section>
              <section aria-labelledby="project-contribution-title">
                <h3 id="project-contribution-title">What I worked on</h3>
                <p className="project-dialog-description">{selectedProject.contribution}</p>
              </section>
              <section aria-labelledby="project-tools-title">
                <h3 id="project-tools-title">Tools used</h3>
                {"toolGroups" in selectedProject && selectedProject.toolGroups.length > 0 ? (
                  <div className="project-tool-groups">
                    {selectedProject.toolGroups.map((group) => (
                      <section className="project-tool-group" key={group.title} aria-label={group.title}>
                        <h4 className="project-tool-group-title">{group.title}</h4>
                        <ul className="project-tool-list">
                          {group.items.map((tool) => <li className="project-tool" key={tool}>{tool}</li>)}
                        </ul>
                      </section>
                    ))}
                  </div>
                ) : selectedProject.tools.length > 0 ? (
                  <ul className="project-tool-list">
                    {selectedProject.tools.map((tool) => <li className="project-tool" key={tool}>{tool}</li>)}
                  </ul>
                ) : <p className="project-dialog-placeholder">Project tools to be added.</p>}
              </section>
            </div>

            <div className="project-dialog-gallery">
              {selectedProject.screenGroups.map((group) => (
                <section className="project-platform-group" key={group.type} aria-label={group.label}>
                  <div className="project-platform-heading">
                    <h3>{group.label}</h3>
                    <span className="section-note">{group.screens.length} SCREENS</span>
                  </div>
                  <div className={`project-screen-grid project-screen-grid-${group.type}`}>
                    {group.screens.map((screen) => (
                      <figure className="project-screen" key={screen.title}>
                        <div className={`project-screen-image-wrap project-screen-image-wrap-${group.type}`}>
                          <Image
                            src={screen.image}
                            alt={screen.alt}
                            fill
                            unoptimized
                            sizes={group.type === "mobile" ? "(max-width: 699px) 30vw, 250px" : "(max-width: 699px) 85vw, 400px"}
                            className={`project-screen-image project-screen-image-${group.type}`}
                          />
                        </div>
                        <figcaption>{screen.title}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

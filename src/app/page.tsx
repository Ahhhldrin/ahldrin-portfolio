import Image from "next/image";
import { GitHubGraph } from "@/components/github-graph";
import { ProjectShowcase } from "@/components/project-showcase";
import { Sidebar } from "@/components/sidebar";
import { portfolio } from "@/data/portfolio";

function SectionHeading({ number, title, note }: { number: string; title: string; note: string }) {
  return (
    <div className="section-heading flex items-center justify-between gap-4">
      <h2 className="section-title">{number} — {title}</h2>
      <span className="section-note">{note}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="site-main">
        <div className="content-shell">
          <section id="home" className="hero-section" aria-labelledby="hero-title">
            <div className="hero-grid grid items-center">
              <div className="portrait-cutout">
                <Image
                  src="/images/ahldrin-portrait-cutout.png"
                  alt={`Portrait of ${portfolio.name}`}
                  fill
                  unoptimized
                  priority
                  sizes="(max-width: 480px) 270px, 288px"
                  className="portrait-photo"
                />
              </div>
              <div className="hero-copy">
                <h1 id="hero-title" className="hero-title">{portfolio.name}</h1>
                {portfolio.introduction && <p className="hero-introduction">{portfolio.introduction}</p>}
                <div className="hero-links flex flex-wrap items-center gap-5">
                  <a href="#projects" className="hero-primary-link">EXPLORE PROJECTS <span aria-hidden="true">↓</span></a>
                  <a href={`https://github.com/${portfolio.githubUsername}`} target="_blank" rel="noreferrer" className="subtle-link">GITHUB <span aria-hidden="true">↗</span></a>
                  <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer" className="subtle-link">LINKEDIN <span aria-hidden="true">↗</span></a>
                  <a href={portfolio.facebookUrl} target="_blank" rel="noreferrer" className="subtle-link">FACEBOOK <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </div>
            <div className="hero-credibility" aria-label="Education and portfolio highlights">
              <div className="hero-education-row">
                <div className="hero-education-item">
                  <span className="hero-meta-label">UNIVERSITY / CAMPUS</span>
                  <p>{portfolio.education.university}<span>{portfolio.education.campus}</span></p>
                </div>
                <div className="hero-education-item">
                  <span className="hero-meta-label">PROGRAM / FOCUS</span>
                  <p>{portfolio.education.degree}<span>{portfolio.education.specialization}</span></p>
                </div>
              </div>
              <div className="hero-stat-row">
                <div className="hero-stat">
                  <span className="hero-stat-value">{String(portfolio.projects.length).padStart(2, "0")}</span>
                  <span className="hero-meta-label">PROJECTS SHOWCASED</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-value">{String(portfolio.certifications.length).padStart(2, "0")}</span>
                  <span className="hero-meta-label">CERTIFICATIONS</span>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="page-section about-section" aria-labelledby="about-title">
            <SectionHeading number="01" title="about me" note="PROFILE / OBJECTIVE" />
            <h2 id="about-title" className="sr-only">About me</h2>
            <p className="about-copy">
              I’m a BSIT undergraduate specializing in Mobile and Web Application Development. Through academic and capstone projects, I’ve built full-stack applications, REST APIs, and database-driven systems using Flutter, React, Node.js, and PostgreSQL. I’m seeking an IT internship where I can apply what I’ve learned, gain industry experience, and continue developing my technical and collaboration skills.
            </p>
          </section>

          <section id="projects" className="page-section" aria-labelledby="projects-title">
            <SectionHeading number="02" title="projects" note="ACADEMIC WORK" />
            <div id="projects-title" className="sr-only">Projects</div>
            <ProjectShowcase />
          </section>

          <section id="skills" className="page-section" aria-labelledby="skills-title">
            <SectionHeading number="03" title="technical skills" note="STACK / TOOLS" />
            <div id="skills-title" className="sr-only">Technical skills</div>
            <div className="skill-list">
              {portfolio.skillGroups.map((group) => (
                <div className="skill-row grid" key={group.number}>
                  <span className="skill-number">{group.number}</span>
                  <h3>{group.title}</h3>
                  <ul className="skill-tags flex flex-wrap gap-2" aria-label={group.title}>
                    {group.skills.map((skill) => <li className="skill-tag" key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="page-section" aria-labelledby="certifications-title">
            <SectionHeading number="04" title="certifications" note="CREDENTIALS" />
            <div id="certifications-title" className="sr-only">Certifications</div>
            <div className="cert-grid grid gap-3">
              {portfolio.certifications.map((certification) => (
                <article className="cert-card" key={certification.number}>
                  <Image
                    src={certification.badgeUrl}
                    alt=""
                    width={76}
                    height={76}
                    unoptimized
                    className="cert-badge"
                  />
                  <h3>{certification.title}</h3>
                  <p>{certification.detail}</p>
                  <div className="cert-actions">
                    <a className="cert-link" href={certification.certificateUrl} target="_blank" rel="noreferrer">VIEW CERTIFICATE ↗</a>
                    <a className="cert-link" href={certification.verificationUrl} target="_blank" rel="noreferrer">VERIFY ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="github" className="page-section github-section" aria-labelledby="github-title">
            <div className="section-heading flex items-center justify-between gap-4">
              <h2 id="github-title" className="section-title">05 — github</h2>
              <a className="section-note section-link" href={`https://github.com/${portfolio.githubUsername}`} target="_blank" rel="noreferrer">@{portfolio.githubUsername} ↗</a>
            </div>
            <GitHubGraph username={portfolio.githubUsername} />
          </section>

          <footer className="site-footer flex items-center justify-end gap-4">
            <a href="#home">BACK TO TOP ↑</a>
          </footer>
        </div>
      </main>
    </>
  );
}

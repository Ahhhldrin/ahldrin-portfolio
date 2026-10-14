"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "@/components/theme-provider";

export function GitHubGraph({ username }: { username: string }) {
  const { resolved } = useTheme();

  return (
    <div className="github-graph-scroll" aria-label={`GitHub contribution calendar for ${username}`}>
      <GitHubCalendar
        username={username}
        colorScheme={resolved}
        blockSize={9}
        blockMargin={3}
        blockRadius={5}
        fontSize={11}
        showColorLegend={false}
        theme={{
          dark: ["#1e1e22", "#55555c", "#85858d", "#b9b9c0", "#f4f4f5"],
          light: ["#e9e9e9", "#b6b6b6", "#898989", "#555555", "#0a0a0a"],
        }}
        labels={{ totalCount: "{{count}} contributions in the last year" }}
      />
    </div>
  );
}

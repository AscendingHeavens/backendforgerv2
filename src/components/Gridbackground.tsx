import { cn } from "@/lib/utils";
import React from "react";
import Generator from "./Generator";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-black">
      {/* Grid pattern overlay */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Optional: Remove radial mask to avoid fade-out effect */}
      {/* If you want a subtle center focus, re-add the below div */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}

      {/* Actual content */}
      <div className="relative z-20 w-full px-4 sm:px-8">
        <Generator />
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export default function OSDetector() {
  useEffect(() => {
    // Detect if the user is on Windows
    const isWindows = navigator.userAgent.indexOf("Win") !== -1 ||
                      navigator.platform.indexOf("Win") !== -1;

    if (isWindows) {
      const updateWindowsClass = () => {
        const screenWidth = window.innerWidth;

        // Remove all Windows classes first
        document.documentElement.classList.remove("os-windows-laptop", "os-windows-desktop");

        // Apply different classes based on screen size
        if (screenWidth < 1920) {
          // Smaller screens (laptops, smaller monitors)
          document.documentElement.classList.add("os-windows-laptop");
        } else {
          // Larger screens (desktop monitors 1920px+)
          document.documentElement.classList.add("os-windows-desktop");
        }
      };

      updateWindowsClass();
      window.addEventListener("resize", updateWindowsClass);

      return () => window.removeEventListener("resize", updateWindowsClass);
    }
  }, []);

  return null;
}

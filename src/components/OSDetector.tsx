"use client";

import { useEffect } from "react";

export default function OSDetector() {
  useEffect(() => {
    // Detect if the user is on Windows
    const isWindows = navigator.userAgent.indexOf("Win") !== -1 ||
                      navigator.platform.indexOf("Win") !== -1;

    if (isWindows) {
      document.documentElement.classList.add("os-windows");
    }
  }, []);

  return null;
}

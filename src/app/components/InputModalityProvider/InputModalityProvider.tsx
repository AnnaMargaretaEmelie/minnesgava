"use client";

import { useEffect } from "react";

export function InputModalityProvider() {
  useEffect(() => {
    const root = document.documentElement;

    function handleKeyDown() {
      root.dataset.inputModality = "keyboard";
    }

    function handlePointerDown() {
      root.dataset.inputModality = "pointer";
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("touchstart", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handlePointerDown);
    };
  }, []);

  return null;
}

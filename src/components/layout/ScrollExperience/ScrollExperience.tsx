"use client";

import { useEffect, useState } from "react";

export function ScrollExperience() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame = 0;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? currentScrollY / scrollable : 0;
      const scrollingDown = currentScrollY > lastScrollY && currentScrollY > 90;

      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      document.documentElement.style.setProperty("--hero-scroll", String(Math.min(currentScrollY, 700)));
      document.body.classList.toggle("is-scrolled", currentScrollY > 70);
      document.body.classList.toggle("hero-is-scrolled", currentScrollY > 40);
      document.body.classList.toggle("nav-hidden-mobile", scrollingDown);

      setShowBackTop(currentScrollY > 400);
      lastScrollY = currentScrollY;
      frame = 0;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <button
        className={`back-to-top ${showBackTop ? "is-visible" : ""}`}
        type="button"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}

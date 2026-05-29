"use client";

import { useEffect, useState } from "react";

const ROTATION_MS = 7500;

type Props = {
  images: readonly string[];
};

export function HeroBackgroundFade({ images }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <div className="luxe-hero-slides">
      {images.map((src, i) => (
        <div
          key={src}
          className={`luxe-hero-slide${i === active ? " is-active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}

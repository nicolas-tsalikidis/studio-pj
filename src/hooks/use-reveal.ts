import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Adds `is-visible` class to any element with `.reveal` once it enters the viewport.
 * Re-scans the DOM on every route change so newly mounted route content is observed.
 */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait one frame so the new route's DOM is mounted before we query.
    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      if (!els.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );

      els.forEach((el) => io.observe(el));

      // Store on window so the cleanup below can disconnect it.
      (window as unknown as { __revealIO?: IntersectionObserver }).__revealIO = io;
    });

    return () => {
      cancelAnimationFrame(raf);
      const io = (window as unknown as { __revealIO?: IntersectionObserver }).__revealIO;
      io?.disconnect();
    };
  }, [pathname]);
}

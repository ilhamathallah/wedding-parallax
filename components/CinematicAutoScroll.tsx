
"use client";

import { useEffect } from "react";

export default function CinematicAutoScroll() {
  useEffect(() => {
    let animationFrame = 0;
    let isScrolling = false;
    let lastTime = 0;
    let targetScrollY = 0;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;

    // Kecepatan dalam pixel per detik
    const SCROLL_SPEED = 40;
    const RESUME_DELAY = 1200;

    function clearResumeTimer() {
      if (resumeTimer !== undefined) {
        clearTimeout(resumeTimer);
        resumeTimer = undefined;
      }
    }

    function pauseScroll() {
      isScrolling = false;
      lastTime = 0;

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    }

    function startScroll() {
      if (isScrolling) return;

      clearResumeTimer();

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (window.scrollY >= maxScroll - 1) return;

      isScrolling = true;
      lastTime = 0;

      // Mulai dari posisi halaman saat ini
      targetScrollY = window.scrollY;

      document.documentElement.style.scrollBehavior = "auto";

      console.log("AUTO SCROLL BERJALAN");
      animationFrame = requestAnimationFrame(animateScroll);
    }

    function animateScroll(time: number) {
      if (!isScrolling) return;

      if (lastTime === 0) {
        lastTime = time;
        animationFrame = requestAnimationFrame(animateScroll);
        return;
      }

      // Delta waktu membuat gerakan konsisten di berbagai FPS
      const delta = Math.min((time - lastTime) / 1000, 0.032);
      lastTime = time;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (window.scrollY >= maxScroll - 1) {
        pauseScroll();
        return;
      }

      targetScrollY = Math.min(
        targetScrollY + SCROLL_SPEED * delta,
        maxScroll
      );

      window.scrollTo(0, targetScrollY);

      animationFrame = requestAnimationFrame(animateScroll);
    }

    function pauseAndResume() {
      pauseScroll();
      clearResumeTimer();

      resumeTimer = setTimeout(() => {
        // Sinkronkan dengan posisi setelah pengunjung scroll manual
        targetScrollY = window.scrollY;
        startScroll();
      }, RESUME_DELAY);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          "Home",
          "End",
          " ",
        ].includes(event.key)
      ) {
        pauseAndResume();
      }
    }

    function handleOpened() {
      startScroll();
    }

    window.addEventListener("wedding:opened", handleOpened);

    // Mouse wheel dan touchpad
    window.addEventListener("wheel", pauseAndResume, {
      passive: true,
    });

    // Layar sentuh
    window.addEventListener("touchstart", pauseAndResume, {
      passive: true,
    });

    window.addEventListener("touchend", pauseAndResume, {
      passive: true,
    });

    window.addEventListener("touchcancel", pauseAndResume, {
      passive: true,
    });

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      pauseScroll();
      clearResumeTimer();

      window.removeEventListener("wedding:opened", handleOpened);
      window.removeEventListener("wheel", pauseAndResume);
      window.removeEventListener("touchstart", pauseAndResume);
      window.removeEventListener("touchend", pauseAndResume);
      window.removeEventListener("touchcancel", pauseAndResume);
      window.removeEventListener("keydown", handleKeyDown);

      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}

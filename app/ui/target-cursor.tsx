import gsap from "gsap";
import { useEffect, useRef } from "react";

type TargetCursorProps = {
  targetSelector?: string;
};

export function TargetCursor({
  targetSelector = "a, button, input, textarea, select, [data-cursor-target]",
}: TargetCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const canAnimate = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;

    if (!cursor || !canAnimate) {
      return;
    }

    let activeTarget: Element | null = null;
    const moveX = gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power3.out" });
    const moveY = gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power3.out" });
    const getTarget = (element: EventTarget | null) =>
      element instanceof Element ? element.closest(targetSelector) : null;

    const resetCursor = () => {
      activeTarget = null;
      cursor.classList.remove("is-target");
      gsap.to(cursor, {
        duration: 0.22,
        height: 30,
        width: 30,
        ease: "power3.out",
      });
    };

    const lockToTarget = (target: Element) => {
      const rect = target.getBoundingClientRect();
      activeTarget = target;
      cursor.classList.add("is-target");
      gsap.to(cursor, {
        duration: 0.22,
        height: rect.height + 12,
        width: rect.width + 12,
        ease: "power3.out",
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = getTarget(event.target);

      if (target && target !== activeTarget) {
        lockToTarget(target);
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      const nextTarget = getTarget(event.relatedTarget);

      if (activeTarget && nextTarget !== activeTarget) {
        resetCursor();
      }
    };

    gsap.set(cursor, { x: -100, y: -100, xPercent: -50, yPercent: -50 });
    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, [targetSelector]);

  return (
    <div className="target-cursor" ref={cursorRef} aria-hidden="true">
      <span className="target-cursor-dot" />
      <span className="target-cursor-corner top-left" />
      <span className="target-cursor-corner top-right" />
      <span className="target-cursor-corner bottom-left" />
      <span className="target-cursor-corner bottom-right" />
    </div>
  );
}

import { useEffect, useId, useMemo, useState } from "react";

type TextTypeProps = {
  text: string | string[];
  className?: string;
  cursorCharacter?: string;
  deletingSpeed?: number;
  loop?: boolean;
  pauseDuration?: number;
  showCursor?: boolean;
  typingSpeed?: number;
};

export function TextType({
  text,
  className,
  cursorCharacter = "_",
  deletingSpeed = 45,
  loop = true,
  pauseDuration = 1700,
  showCursor = true,
  typingSpeed = 95,
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState("");
  const instanceId = useId();
  const phrases = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    let isMounted = true;
    let timeline: { kill: () => void } | undefined;

    void import("gsap").then(({ default: gsap }) => {
      if (!isMounted) {
        return;
      }

      const progress = { value: 0 };
      const nextTimeline = gsap.timeline({ repeat: loop ? -1 : 0 });
      timeline = nextTimeline;

      phrases.forEach((phrase, index) => {
        nextTimeline
          .set(progress, {
            value: 0,
            onUpdate: () => {
              if (isMounted) setDisplayedText("");
            },
          })
          .to(progress, {
            duration: Math.max(phrase.length * typingSpeed, typingSpeed) / 1000,
            ease: "none",
            onUpdate: () => {
              if (isMounted) {
                setDisplayedText(phrase.slice(0, Math.ceil(progress.value)));
              }
            },
            value: phrase.length,
          })
          .to({}, { duration: pauseDuration / 1000 });

        if (loop || index < phrases.length - 1) {
          nextTimeline.to(progress, {
            duration: Math.max(phrase.length * deletingSpeed, deletingSpeed) / 1000,
            ease: "none",
            onUpdate: () => {
              if (isMounted) {
                setDisplayedText(phrase.slice(0, Math.ceil(progress.value)));
              }
            },
            value: 0,
          });
        }
      });
    });

    return () => {
      isMounted = false;
      timeline?.kill();
    };
  }, [deletingSpeed, loop, pauseDuration, phrases, typingSpeed]);

  return (
    <span className={className} aria-labelledby={instanceId}>
      <span id={instanceId}>{displayedText}</span>
      {showCursor ? (
        <span className="text-type-cursor" aria-hidden="true">
          {cursorCharacter}
        </span>
      ) : null}
    </span>
  );
}

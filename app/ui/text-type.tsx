import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useId, useMemo, useState } from "react";

gsap.registerPlugin(useGSAP);

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

  useGSAP(
    () => {
      const progress = { value: 0 };
      const timeline = gsap.timeline({ repeat: loop ? -1 : 0 });

      phrases.forEach((phrase, index) => {
        timeline
          .set(progress, {
            value: 0,
            onUpdate: () => setDisplayedText(""),
          })
          .to(progress, {
            duration: Math.max(phrase.length * typingSpeed, typingSpeed) / 1000,
            ease: "none",
            onUpdate: () => {
              setDisplayedText(phrase.slice(0, Math.ceil(progress.value)));
            },
            value: phrase.length,
          })
          .to({}, { duration: pauseDuration / 1000 });

        if (loop || index < phrases.length - 1) {
          timeline.to(progress, {
            duration: Math.max(phrase.length * deletingSpeed, deletingSpeed) / 1000,
            ease: "none",
            onUpdate: () => {
              setDisplayedText(phrase.slice(0, Math.ceil(progress.value)));
            },
            value: 0,
          });
        }
      });

      return () => timeline.kill();
    },
    { dependencies: [deletingSpeed, loop, pauseDuration, phrases, typingSpeed] },
  );

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

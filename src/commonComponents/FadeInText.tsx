import { useState, useEffect } from "react";
import "./Styling/FadeInTextStyles.css";

interface FadeInTextProps {
  children: React.ReactNode;
  delay?: number;
  lineDelay?: number;
  gradual?: boolean;
}

function FadeInText({
  children,
  delay = 0,
  lineDelay = 200,
  gradual = false,
}: FadeInTextProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    if (!gradual) {
      const timer = setTimeout(() => {
        setVisibleLines([0]);
      }, delay);

      return () => clearTimeout(timer);
    }

    const text = typeof children === "string" ? children : "";
    const lines = text.split("\n");
    const timers: NodeJS.Timeout[] = [];

    lines.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, delay + index * lineDelay);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [children, delay, lineDelay, gradual]);

  if (!gradual) {
    return (
      <span className={`fade-in ${visibleLines.length > 0 ? "visible" : ""}`}>
        {children}
      </span>
    );
  }

  const text = typeof children === "string" ? children : "";
  const lines = text.split("\n");

  return (
    <div>
      {lines.map((line, index) => (
        <div
          key={index}
          className={`fade-in-text-line ${
            visibleLines.includes(index) ? "visible" : ""
          }`}
        >
          <span style={{ fontFamily: "Garamond, serif", textAlign: "center" }}>
            {line}
          </span>
        </div>
      ))}
    </div>
  );
}

export default FadeInText;

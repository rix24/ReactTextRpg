import { useState, useEffect, Fragment, createElement, Children } from "react";
import "./Styling/FadeInTextStyles.css";
import React from "react";

interface FadeInTextProps {
  children: React.ReactNode;
  delay?: number;
  paragraphDelay?: number;
  gradual?: boolean;
  onComplete?: () => void;
}

function FadeInText({
  children,
  delay = 0,
  paragraphDelay = 200,
  gradual = false,
  onComplete,
}: FadeInTextProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const finalLineDelay = 3000;

  const parseContentIntoLines = (): React.ReactNode[] => {
    const lines: React.ReactNode[] = [];
    let currentLine: React.ReactNode[] = [];    

    const processNode = (node: React.ReactNode) => {
      if (typeof node === "string") {
        const textLines = node.split('\n');
        textLines.forEach((textLine, index) => {
          if (index > 0) {
            lines.push(currentLine.length === 1 ? currentLine[0] : createElement(Fragment, {}, ...currentLine));
            currentLine = [];
          }
          if (textLine.trim() || currentLine.length > 0) {
            currentLine.push(textLine);
          }
        });
      } else if (React.isValidElement(node)) {
        currentLine.push(node);
      } else if (Array.isArray(node)) {
        node.forEach(processNode);
      }
    };

    Children.forEach(children, processNode);

    if (currentLine.length > 0) {
      lines.push(currentLine.length === 1 ? currentLine[0] : createElement(Fragment, {}, ...currentLine));
    }

    return lines;
  }

  const lines = parseContentIntoLines();

  useEffect(() => {
    if (!gradual) {
      const timer = setTimeout(() => {
        setVisibleLines([0]);
        setTimeout(() => {
                onComplete?.();
            }, finalLineDelay); 
      }, delay);

      return () => clearTimeout(timer);
    }

    const timers: NodeJS.Timeout[] = [];
    lines.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => {
          const newVisible = [...prev, index];
          // Check if this is the last line
          if (newVisible.length === lines.length) {
            setTimeout(() => {
                onComplete?.();
            }, finalLineDelay);
          }
          return newVisible;
        });
      }, delay + index * paragraphDelay);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [children, delay, paragraphDelay, gradual]);

  if (!gradual) {
    return (
      <div className={`fade-in ${visibleLines.length > 0 ? "visible" : ""}`}>
        {children}
      </div>
    );
  }  

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

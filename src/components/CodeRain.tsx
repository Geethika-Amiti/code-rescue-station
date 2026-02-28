import { useEffect, useRef } from "react";

const CodeRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]<>/\\|=+-*&^%$#@!";
    const columns = 40;
    const lines: string[] = [];

    for (let i = 0; i < columns; i++) {
      let line = "";
      for (let j = 0; j < 60; j++) {
        line += chars[Math.floor(Math.random() * chars.length)];
      }
      lines.push(line);
    }

    if (containerRef.current) {
      containerRef.current.innerHTML = lines
        .map(
          (line, i) =>
            `<div class="absolute font-mono text-[10px] leading-[14px] text-primary/[0.07] whitespace-nowrap animate-code-scroll" style="left: ${i * 2.5}%; animation-delay: ${-Math.random() * 20}s; animation-duration: ${15 + Math.random() * 10}s">${line}<br/>${line}</div>`
        )
        .join("");
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default CodeRain;

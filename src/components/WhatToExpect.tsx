import { Brain, Code, FileText, Link } from "lucide-react";

const items = [
  { icon: Brain, text: "Aptitude puzzles designed to test analytical thinking" },
  { icon: Code, text: "Basic Python logic questions for code-breakers" },
  { icon: FileText, text: "Paper-based logical challenges and cryptographic clues" },
  { icon: Link, text: "Multi-layer clue connections requiring teamwork" },
];

const WhatToExpect = () => {
  return (
    <section className="py-20 code-bg relative">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          What To <span className="text-primary text-glow-blue">Expect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm">
          This experience uses physical, paper-based puzzles, teamwork, and logical deduction to challenge your team.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 glass-card hover:bg-primary/5 transition-colors duration-300"
            >
              <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/80 text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;

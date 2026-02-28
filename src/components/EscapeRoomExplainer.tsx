import {
  Puzzle,
  Brain,
  Users,
  Clock,
  Code,
  Search,
  Lock,
  Layers,
  Zap,
  Target,
  FileText,
  Hash,
} from "lucide-react";

const puzzleTypes = [
  { icon: FileText, text: "Word games and substitution ciphers" },
  { icon: Puzzle, text: "Riddles and crosswords" },
  { icon: Hash, text: "Sudoku and number-based challenges" },
  { icon: Brain, text: "Mathematical logic puzzles" },
  { icon: Layers, text: "Pattern arrangement tasks" },
  { icon: Search, text: "Hidden clue discovery" },
  { icon: Lock, text: "Multi-step combination locks" },
];

const skillsTestedItems = [
  "Problem-solving ability",
  "Logical reasoning",
  "Pattern recognition",
  "Lateral thinking",
  "Team coordination",
];

const howWeRecreate = [
  { icon: Brain, text: "Aptitude-based logical challenges" },
  { icon: Code, text: "Basic Python logic problems" },
  { icon: Lock, text: "Cipher decoding" },
  { icon: Layers, text: "Pattern-based reconstruction" },
  { icon: Puzzle, text: "Multi-layered clue connections" },
];

const EscapeRoomExplainer = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Distinct background — warmer purple-tinted gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(270_30%_8%)] to-background" />
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 30%, hsl(270 60% 50% / 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, hsl(210 100% 55% / 0.1) 0%, transparent 60%)",
        }}
      />
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono-tech text-secondary text-xs tracking-[0.3em] mb-4 uppercase">
            // Knowledge Base
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            🧩 What Is an{" "}
            <span className="text-secondary text-glow-purple">Escape Room</span>?
          </h2>
          <div className="w-24 h-[2px] bg-secondary/50 mx-auto" />
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto space-y-5 mb-16">
          <p className="text-foreground leading-relaxed">
            An escape room is a live, immersive game experience where a team of players is placed inside a themed environment and given a limited amount of time — usually 60 to 120 minutes — to solve a series of interconnected puzzles.
          </p>
          <div className="space-y-2 pl-4 border-l-2 border-secondary/30">
            <p className="text-foreground/90">Each puzzle unlocks the next clue.</p>
            <p className="text-foreground/90">Each solution reveals hidden information.</p>
            <p className="text-foreground/90 font-semibold text-secondary">Every detail matters.</p>
          </div>
          <p className="text-foreground leading-relaxed">
            The story is the driving force of the experience. Most escape rooms revolve around a central mission — stopping a disaster, escaping captivity, solving a mystery, or defeating an antagonist before time runs out.
          </p>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <Clock className="w-5 h-5 text-accent shrink-0" />
            <p className="text-foreground/90 text-sm">
              A countdown clock creates urgency. If the timer reaches zero, the mission fails.
            </p>
          </div>
          <p className="text-foreground/80 text-sm">
            In some real-life venues, teams may be given a short extension or a guided walkthrough of the remaining puzzles. Many venues also maintain leaderboards where fast teams set records for others to beat.
          </p>
        </div>

        {/* Skills Tested */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            Escape rooms test <span className="text-secondary text-glow-purple">your mind</span>, not your muscles.
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {skillsTestedItems.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-mono-tech text-secondary border border-secondary/30 bg-secondary/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Common Puzzle Types */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-bold text-foreground mb-8 text-center">
            Common <span className="text-primary text-glow-blue">Puzzle Types</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {puzzleTypes.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 p-4 rounded-lg bg-card/40 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <Icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground text-sm">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 font-display text-foreground text-sm font-semibold">
            The objective is simple:{" "}
            <span className="text-accent text-glow-red">Solve everything before time runs out.</span>
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent mb-16" />

        {/* How TH3 ESCAPE COD3 2.0 Recreates This */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            🧠 How{" "}
            <span className="text-primary text-glow-blue">TH3 ESCAPE COD3 2.0</span>{" "}
            Recreates This
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 mb-12">
          <p className="text-foreground leading-relaxed">
            While traditional escape rooms use physical spaces and mechanical locks,{" "}
            <span className="text-primary font-semibold">TH3 ESCAPE COD3 2.0</span> recreates the same intensity entirely through structured, paper-based gameplay.
          </p>
          <div className="space-y-2 pl-4 border-l-2 border-primary/30">
            <p className="text-foreground/90">Instead of unlocking doors, you unlock <span className="text-primary">information</span>.</p>
            <p className="text-foreground/90">Instead of finding physical keys, you decode <span className="text-primary">digital threats</span>.</p>
            <p className="text-foreground/90">Instead of escaping a room, you stop a <span className="text-accent">cyber crisis</span>.</p>
          </div>
          <div className="space-y-1 text-foreground/90">
            <p>The story drives the urgency.</p>
            <p>The timer drives the pressure.</p>
            <p className="font-semibold text-foreground">The puzzles drive the mission.</p>
          </div>
        </div>

        {/* Through section */}
        <div className="mb-12">
          <p className="text-center text-foreground/80 font-mono-tech text-xs tracking-widest uppercase mb-6">
            // Through
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {howWeRecreate.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 p-4 rounded-lg bg-card/40 border border-secondary/20 hover:border-secondary/40 transition-colors"
              >
                <Icon className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-foreground text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          <p className="text-foreground leading-relaxed">
            You experience the same immersive tension of a real escape room — but in an academic, competition-style environment.
          </p>
          <p className="text-foreground/90">
            The antagonist in your mission is not physically present. It is the unseen hacker behind the ransomware attack. And once the 120-minute timer ends, the consequences unfold.
          </p>
        </div>

        {/* Closing */}
        <div className="text-center glass-card p-8 max-w-2xl mx-auto" style={{ borderColor: "hsl(270 60% 50% / 0.3)" }}>
          <p className="text-foreground/80 text-sm mb-4">There are no shortcuts. There are no hints beyond what your team can deduce.</p>
          <div className="space-y-1 font-display text-lg">
            <p className="text-foreground">Only <span className="text-primary text-glow-blue">logic</span>.</p>
            <p className="text-foreground">Only <span className="text-secondary text-glow-purple">teamwork</span>.</p>
            <p className="text-foreground">Only <span className="text-accent text-glow-red">time</span>.</p>
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
    </section>
  );
};

export default EscapeRoomExplainer;

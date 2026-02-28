import heroBg from "@/assets/hero-bg.jpg";
import { Clock, ChevronDown } from "lucide-react";
import CodeRain from "./CodeRain";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />
      {/* Code rain */}
      <CodeRain />
      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-[2px] bg-primary/20 animate-scan-line" />
      </div>
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="font-mono-tech text-accent text-sm tracking-[0.3em] mb-6 animate-flicker">
          // INCOMING TRANSMISSION
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 animate-glitch">
          <span className="text-foreground">TH3 </span>
          <span className="text-primary text-glow-blue">ESCAPE</span>
          <br />
          <span className="text-foreground">COD3 </span>
          <span className="text-accent text-glow-red">2.0</span>
        </h1>

        <p className="font-display text-sm md:text-base tracking-[0.4em] text-muted-foreground mb-8 uppercase">
          Decrypt. Detect. Defend. Defeat.
        </p>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
          <Clock className="w-5 h-5 text-accent" />
          <span className="font-mono-tech text-lg">120 Minutes</span>
        </div>

        <a
          href="#storyline"
          className="inline-block px-8 py-4 rounded-lg font-display text-sm tracking-widest uppercase
            bg-transparent neon-border text-primary hover:bg-primary/10 transition-all duration-300
            hover:shadow-[0_0_30px_hsl(210_100%_55%/0.3)]"
        >
          Now to Experience It
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;

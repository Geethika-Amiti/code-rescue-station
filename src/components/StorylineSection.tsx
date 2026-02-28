import encryptedImg from "@/assets/storyline-encrypted.jpg";
import hospitalImg from "@/assets/storyline-hospital.jpg";
import hackerImg from "@/assets/storyline-hacker.jpg";
import { Shield, Lock, AlertTriangle, Timer, Target } from "lucide-react";

const StorylineSection = () => {
  return (
    <section id="storyline" className="relative py-24 code-bg">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            The <span className="text-accent text-glow-red">Storyline</span>
          </h2>
          <div className="w-24 h-[2px] bg-primary/50 mx-auto" />
        </div>

        {/* Act 1 - The Attack */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="space-y-4">
            <div className="font-mono-tech text-accent text-xs tracking-widest mb-2">// INCIDENT REPORT — 02:07 AM</div>
            <p className="text-foreground/90 leading-relaxed">
              At <span className="text-accent font-semibold">2:07 a.m.</span>, CityCare Hospital was hit by a coordinated ransomware attack.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-accent shrink-0" />
                Patient records encrypted.
              </li>
              <li className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-accent shrink-0" />
                Monitoring systems locked.
              </li>
              <li className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-accent shrink-0" />
                Administrative access seized.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              It started with a seemingly normal email containing "important information" — but it was a disguise. The attachment contained ransomware that took over the hospital system.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden neon-border-red">
            <img src={encryptedImg} alt="Ransomware encrypted hospital records" className="w-full h-64 object-cover" />
          </div>
        </div>

        {/* Act 2 - The Crisis */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden neon-border">
            <img src={hospitalImg} alt="Hospital emergency corridor under cyber attack" className="w-full h-64 object-cover" />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <div className="font-mono-tech text-primary text-xs tracking-widest mb-2">// EMERGENCY ALERT</div>
            <p className="text-foreground/90 leading-relaxed">
              At the same time, a young accident victim arrives in <span className="text-accent font-semibold">critical condition</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Doctors require digital access before proceeding with surgery. But the system is down.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The attacker copied the hospital database and sent proof — <span className="text-primary">three high-profile patient records</span>.
            </p>
          </div>
        </div>

        {/* Act 3 - The Countdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="space-y-4">
            <div className="font-mono-tech text-accent text-xs tracking-widest mb-2 animate-flicker">// COUNTDOWN INITIATED</div>
            <div className="flex items-center gap-3 mb-4">
              <Timer className="w-6 h-6 text-accent" />
              <span className="font-display text-xl text-accent text-glow-red">A two-hour countdown has begun.</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-2">If time expires:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                Sensitive data will leak
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                Backups will corrupt
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                The attacker disappears
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden neon-border">
            <img src={hackerImg} alt="Hacker command center with countdown timer" className="w-full h-64 object-cover" />
          </div>
        </div>

        {/* Mission Briefing */}
        <div className="glass-card p-8 md:p-12 text-center">
          <div className="font-mono-tech text-primary text-xs tracking-widest mb-4">// MISSION BRIEFING</div>
          <p className="text-foreground text-lg mb-6">You are the <span className="text-primary font-semibold">cyber response team</span>.</p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {[
              "Reconstruct the decryption key",
              "Disable the hidden leak script",
              "Restore the hospital systems",
              "Trace the attacker's live connection",
            ].map((mission, i) => (
              <div key={i} className="flex items-center gap-3 text-left p-3 rounded-md bg-muted/30">
                <Target className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground/80 text-sm">{mission}</span>
              </div>
            ))}
          </div>

          <p className="font-display text-lg text-foreground mb-2">
            One mission. One hospital. <span className="text-accent text-glow-red">One chance.</span>
          </p>
          <p className="font-mono-tech text-accent animate-flicker text-sm">
            Time is running out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorylineSection;

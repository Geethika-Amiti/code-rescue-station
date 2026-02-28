import { Clock, BarChart3, Users, Cpu } from "lucide-react";

const details = [
  { icon: Clock, label: "Duration", value: "120 Minutes" },
  { icon: BarChart3, label: "Difficulty", value: "Medium" },
  { icon: Users, label: "Team Size", value: "2–3 Players" },
  { icon: Cpu, label: "Theme", value: "Cyber Crime / Logical Escape" },
];

const MissionDetails = () => {
  return (
    <section className="py-20 relative">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Mission <span className="text-primary text-glow-blue">Details</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {details.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass-card p-6 text-center hover:bg-primary/5 transition-colors duration-300"
            >
              <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-mono-tech text-xs text-muted-foreground tracking-widest uppercase mb-1">{label}</p>
              <p className="font-display text-sm text-foreground font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionDetails;

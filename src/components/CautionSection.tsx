import { AlertTriangle, Clock, Pencil, Lightbulb, Users } from "lucide-react";

const cautions = [
  { icon: Clock, text: "Arrive on time — operation waits for no one" },
  { icon: Pencil, text: "Carry pens, pencils, and other stationery" },
  { icon: Lightbulb, text: "Think outside the box — logic is your weapon" },
  { icon: Users, text: "Work as a team — every clue matters" },
];

const CautionSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <AlertTriangle className="w-6 h-6 text-accent" />
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Caution & <span className="text-accent text-glow-red">Guidelines</span>
          </h2>
        </div>

        <div className="glass-card neon-border-red p-8">
          <div className="space-y-4">
            {cautions.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-md hover:bg-accent/5 transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground font-mono-tech text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CautionSection;

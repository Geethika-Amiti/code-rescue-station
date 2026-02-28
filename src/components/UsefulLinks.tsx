import { HelpCircle, Settings, BookOpen, Mail } from "lucide-react";

const links = [
  { icon: HelpCircle, label: "What is an Escape Room?", href: "#" },
  { icon: Settings, label: "How It Works", href: "#" },
  { icon: BookOpen, label: "Rules & FAQs", href: "#" },
  { icon: Mail, label: "Contact Us", href: "#" },
];

const UsefulLinks = () => {
  return (
    <section className="py-20 code-bg">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Useful <span className="text-primary text-glow-blue">Links</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="glass-card p-6 text-center hover:bg-primary/10 transition-all duration-300 group"
            >
              <Icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-foreground/80 text-sm font-medium">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h3 className="font-display text-2xl font-bold mb-2">
          <span className="text-foreground">TH3 ESCAPE</span>{" "}
          <span className="text-primary text-glow-blue">COD3 2.0</span>
        </h3>
        <p className="font-display text-xs tracking-[0.3em] text-muted-foreground mb-6 uppercase">
          Decrypt. Detect. Defend. Defeat.
        </p>
        <p className="text-muted-foreground text-xs">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

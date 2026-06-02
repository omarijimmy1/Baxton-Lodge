import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg md:text-xl font-semibold">
          <span className="w-8 h-8 rounded-full bg-warm-gradient grid place-items-center text-primary-foreground font-bold">B</span>
          <span>Buxton Leisure Lodge</span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+254722252440"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-soft"
          >
            <Phone className="w-4 h-4" /> 0722 252440
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-medium"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+254722252440"
            className="block w-full text-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
          >
            Call 0722 252440
          </a>
        </div>
      )}
    </header>
  );
}

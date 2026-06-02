import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl mb-3">Buxton Leisure Lodge Limited</h3>
          <p className="text-primary-foreground/80 max-w-md">
            Affordable, clean and welcoming accommodation in the heart of Mombasa — your home away from home on the Kenyan coast.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Visit</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Buxton Area, Stadium, Sagana St, Mvita, Mombasa</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> <a href="tel:+254722252440">0722 252440</a></li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> info@buxtonlodge.co.ke</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li><Link to="/rooms">Rooms & Rates</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/reviews">Guest Reviews</Link></li>
            <li><Link to="/contact">Contact & Map</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Buxton Leisure Lodge Limited. All rights reserved.
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Map | Buxton Leisure Lodge Mombasa" },
      { name: "description", content: "Find Buxton Leisure Lodge in Mvita, Mombasa. Call 0722 252440 or visit us at Sagana Street, Buxton Area near the Stadium." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Get in touch</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mt-3 text-balance">Visit us in Mombasa</h1>
          <p className="text-muted-foreground mt-4 text-lg">We're easy to find — and even easier to call.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {[
            { icon: MapPin, title: "Address", lines: ["Buxton Area, Stadium", "Sagana Street, Mvita", "Koinage & Sagana Road Junction", "Mombasa, Kenya (XM47+2V)"] },
            { icon: Phone, title: "Call us", lines: ["0722 252440"], href: "tel:+254722252440" },
            { icon: Mail, title: "Email", lines: ["info@buxtonlodge.co.ke"], href: "mailto:info@buxtonlodge.co.ke" },
            { icon: Clock, title: "Reception", lines: ["Open 24 hours, 7 days a week"] },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-2xl p-6 shadow-soft">
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-warm-gradient grid place-items-center text-primary-foreground">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  {c.lines.map((l) => (
                    <div key={l} className="text-muted-foreground text-sm">
                      {c.href ? <a href={c.href} className="hover:text-primary">{l}</a> : l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Buxton+Leisure+Lodge+Mombasa+XM47%2B2V"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium shadow-soft hover:opacity-90 transition"
          >
            <Navigation className="w-4 h-4" /> Get directions
          </a>
        </div>

        <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-soft border border-border min-h-[450px]">
          <iframe
            title="Buxton Leisure Lodge location"
            src="https://www.google.com/maps?q=XM47%2B2V+Mombasa&output=embed"
            className="w-full h-full min-h-[450px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

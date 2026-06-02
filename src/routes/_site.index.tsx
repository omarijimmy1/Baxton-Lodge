import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Wifi, Coffee, MapPin, ShieldCheck, Star, Phone, ArrowRight, Utensils, Users } from "lucide-react";
import heroImg from "@/assets/hero-room.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import { reviews } from "@/data/reviews";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Buxton Leisure Lodge Mombasa | Affordable Rooms in Mvita" },
      { name: "description", content: "Affordable, clean and welcoming lodge in Mombasa CBD. Comfortable rooms with WiFi, AC, restaurant & meeting halls. Book your stay at Buxton Leisure Lodge today." },
      { property: "og:title", content: "Buxton Leisure Lodge — Mombasa" },
      { property: "og:description", content: "Your home away from home in the heart of Mombasa." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Home,
});

const featured = reviews.filter(r => r.rating === 5).slice(0, 3);
const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Comfortable room at Buxton Leisure Lodge Mombasa" className="absolute inset-0 w-full h-full object-cover" width={1600} height={1024} />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 text-primary-foreground">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-sm bg-primary-foreground/15 backdrop-blur px-3 py-1.5 rounded-full border border-primary-foreground/20">
              <MapPin className="w-3.5 h-3.5" /> Mvita, Mombasa · Kenya
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold mt-5 max-w-3xl text-balance">
              Your home away from home on the Kenyan coast.
            </h1>
            <p className="mt-5 text-lg md:text-xl max-w-xl text-primary-foreground/90">
              Clean, affordable rooms with warm hospitality. Bed from KSh 1,500/night — Wi-Fi, AC and breakfast included.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+254722252440" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-medium text-accent-foreground hover:opacity-90 transition shadow-glow">
                <Phone className="w-4 h-4" /> Book by phone
              </a>
              <Link to="/rooms" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 backdrop-blur px-6 py-3 text-base font-medium hover:bg-primary-foreground/10 transition">
                View rooms <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" style={{ color: "var(--gold)", fill: "var(--gold)" }} />
                ))}
              </div>
              <span className="text-primary-foreground/90">{avgRating}/5 from hundreds of guest reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Wifi, title: "Free Fast Wi-Fi", text: "Reliable internet across all rooms — perfect for work or streaming." },
            { icon: Coffee, title: "Bed & Breakfast", text: "Wake up to a filling Kenyan breakfast included with your stay." },
            { icon: ShieldCheck, title: "Safe & Central", text: "Secure compound just minutes from Mombasa CBD and Stadium." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-soft border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-warm-gradient grid place-items-center text-primary-foreground mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="text-muted-foreground mt-2">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <img src={restaurantImg} alt="Restaurant at Buxton Leisure Lodge" loading="lazy" width={1024} height={768} className="rounded-3xl shadow-soft w-full object-cover aspect-[4/3]" />
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About us</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3">A trusted Mombasa stay since day one.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Buxton Leisure Lodge has welcomed business travellers, holidaymakers and backpackers for years. Our clean rooms, friendly staff and on-site restaurant make every stay simple, comfortable and memorable.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4">
              {[
                { icon: Utensils, label: "Restaurant" },
                { icon: Users, label: "Meeting halls" },
                { icon: Wifi, label: "Free Wi-Fi" },
              ].map((i) => (
                <div key={i.label} className="bg-card rounded-xl p-4 text-center border border-border">
                  <i.icon className="w-5 h-5 mx-auto text-primary" />
                  <div className="mt-1 text-sm font-medium">{i.label}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 mt-7 text-primary font-medium hover:gap-3 transition-all">
              Read more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Guest stories</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3">Loved by our guests</h2>
          <p className="text-muted-foreground mt-3">Real reviews from real travellers who stayed with us.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {featured.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 border border-border shadow-soft"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4" style={{ color: "var(--gold)", fill: "var(--gold)" }} />
                ))}
              </div>
              <p className="mt-4 text-foreground">"{r.text}"</p>
              <footer className="mt-5 text-sm">
                <div className="font-semibold">{r.name}</div>
                <div className="text-muted-foreground">{r.date}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/reviews" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:bg-secondary transition">
            See all reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="rounded-3xl bg-warm-gradient p-10 md:p-16 text-center text-primary-foreground shadow-glow">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-balance">Ready for a comfortable stay in Mombasa?</h2>
          <p className="mt-4 text-lg opacity-95 max-w-xl mx-auto">Call us directly to check availability — no booking fees, just honest hospitality.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a href="tel:+254722252440" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-7 py-3 font-semibold hover:opacity-90 transition">
              <Phone className="w-4 h-4" /> 0722 252440
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3 font-semibold hover:bg-primary-foreground/10 transition">
              Visit us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

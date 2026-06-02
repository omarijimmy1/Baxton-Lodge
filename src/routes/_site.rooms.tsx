import { createFileRoute } from "@tanstack/react-router";
import { Wifi, Snowflake, Coffee, BedDouble, Check, Phone } from "lucide-react";
import roomDouble from "@/assets/room-double.jpg";
import roomSingle from "@/assets/room-single.jpg";
import heroRoom from "@/assets/hero-room.jpg";

export const Route = createFileRoute("/_site/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Rates | Buxton Leisure Lodge Mombasa" },
      { name: "description", content: "Clean, affordable rooms in Mombasa from KSh 1,500/night. Single, double and executive options with WiFi, AC and breakfast." },
    ],
  }),
  component: RoomsPage,
});

const rooms = [
  {
    img: roomSingle,
    name: "Single Room",
    price: "KSh 1,500",
    desc: "Cozy single room with a comfortable bed, fresh linen and mosquito net. Ideal for solo travellers.",
    amenities: ["Free Wi-Fi", "Breakfast included", "En-suite bathroom", "Daily housekeeping"],
  },
  {
    img: roomDouble,
    name: "Double Room",
    price: "KSh 2,000",
    desc: "Spacious double with a queen bed, work desk and warm coastal styling. Great for couples or business stays.",
    amenities: ["Free Wi-Fi", "Bed & Breakfast", "AC available", "Hot water shower"],
  },
  {
    img: heroRoom,
    name: "Executive Room",
    price: "On request",
    desc: "Our most spacious option with extra comforts — perfect for longer business trips or special occasions.",
    amenities: ["Free Wi-Fi", "AC & Fan", "Bed & Breakfast", "TV & lounge area"],
  },
];

function RoomsPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our rooms</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mt-3 text-balance">Comfortable rooms at honest prices</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">Every room comes with free Wi-Fi, fresh linens and our warm Mombasa hospitality.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 space-y-10">
        {rooms.map((r, i) => (
          <article key={r.name} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div>
              <img src={r.img} alt={r.name} loading="lazy" className="rounded-3xl shadow-soft w-full object-cover aspect-[4/3]" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold">{r.name}</h2>
              <div className="mt-2 text-2xl font-display text-accent">{r.price} <span className="text-sm text-muted-foreground font-sans">/ night</span></div>
              <p className="mt-4 text-muted-foreground text-lg">{r.desc}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {r.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> {a}</li>
                ))}
              </ul>
              <a href="tel:+254722252440" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium shadow-soft hover:opacity-90 transition">
                <Phone className="w-4 h-4" /> Reserve this room
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-secondary py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center">All stays include</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Wifi, label: "Free Wi-Fi" },
              { icon: Coffee, label: "Breakfast" },
              { icon: Snowflake, label: "AC available" },
              { icon: BedDouble, label: "Clean linens" },
            ].map((i) => (
              <div key={i.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                <i.icon className="w-6 h-6 mx-auto text-primary" />
                <div className="mt-2 font-medium">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

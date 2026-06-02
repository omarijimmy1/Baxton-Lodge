import { createFileRoute } from "@tanstack/react-router";
import { Heart, MapPin, Users, Sparkles } from "lucide-react";
import meeting from "@/assets/meeting.jpg";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About | Buxton Leisure Lodge Mombasa" },
      { name: "description", content: "Learn about Buxton Leisure Lodge — a trusted, affordable lodge in the heart of Mombasa serving business and leisure travellers." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our story</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mt-3 text-balance">Hospitality that feels like home.</h1>
          <p className="text-muted-foreground mt-5 text-lg">
            Buxton Leisure Lodge Limited is a family-style guest house in Mvita, Mombasa — built on simple values: clean rooms, fair prices and genuine warmth.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={meeting} alt="Meeting hall at Buxton Leisure Lodge" loading="lazy" className="rounded-3xl shadow-soft w-full object-cover aspect-[4/3]" />
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Who we serve</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From business travellers attending trainings in Mombasa, to backpackers exploring the coast, to families looking for a quiet base near the CBD — our doors are open to everyone.
          </p>
          <div className="mt-8 space-y-5">
            {[
              { icon: Heart, title: "Warm welcome", text: "Our staff — like Glory and Mwikali — are known for making guests feel at ease from the moment they arrive." },
              { icon: MapPin, title: "Central location", text: "Walking distance from Mombasa CBD, Stadium and Sagana Road junction." },
              { icon: Users, title: "Function space", text: "Clean meeting halls suitable for trainings, family gatherings and official events." },
              { icon: Sparkles, title: "Honest pricing", text: "Affordable rates with no hidden fees — bed-only or bed and breakfast options." },
            ].map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-warm-gradient grid place-items-center text-primary-foreground">
                  <v.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

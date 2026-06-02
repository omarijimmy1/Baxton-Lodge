import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";

export const Route = createFileRoute("/_site/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews | Buxton Leisure Lodge Mombasa" },
      { name: "description", content: "Read genuine guest reviews of Buxton Leisure Lodge in Mombasa. Hundreds of travellers share their experience." },
    ],
  }),
  component: ReviewsPage,
});

const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
const counts = [5, 4, 3, 2, 1].map(n => ({ n, c: reviews.filter(r => r.rating === n).length }));

function ReviewsPage() {
  const [filter, setFilter] = useState<number | "all">("all");
  const list = filter === "all" ? reviews : reviews.filter(r => r.rating === filter);

  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Guest reviews</span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mt-3 text-balance">What our guests say</h1>
            <p className="text-muted-foreground mt-4 text-lg">Honest feedback from travellers across Kenya and beyond.</p>
          </div>
          <div className="bg-card rounded-3xl p-8 border border-border shadow-soft text-center">
            <div className="font-display text-6xl font-semibold text-primary">{avg}</div>
            <div className="flex justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5" style={{ color: "var(--gold)", fill: "var(--gold)" }} />
              ))}
            </div>
            <div className="text-sm text-muted-foreground mt-2">Based on {reviews.length}+ Google reviews</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-full text-sm font-medium border transition ${filter === "all" ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary"}`}>All</button>
          {counts.map(({ n, c }) => (
            <button key={n} onClick={() => setFilter(n)} className={`px-4 py-2 rounded-full text-sm font-medium border transition inline-flex items-center gap-1 ${filter === n ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary"}`}>
              {n} <Star className="w-3 h-3" style={{ color: "var(--gold)", fill: "var(--gold)" }} /> <span className="opacity-70">({c})</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((r, i) => (
            <article key={i} className="bg-card border border-border rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-warm-gradient grid place-items-center text-primary-foreground font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.date}{r.tripType ? ` · ${r.tripType}` : ""}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ color: "var(--gold)", fill: "var(--gold)" }} />
                ))}
              </div>
              <p className="text-sm text-foreground">"{r.text}"</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

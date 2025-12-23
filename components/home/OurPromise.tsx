"use client";

import Container from "../Container";
// import useWhyUs from "@/lib/hooks/useWhyUs";

const cards = [
  {
    _id: "1",
    icon: "🏗️",
    title: "Engineered Strength",
    desc: "Designed to meet or exceed local codes.",
  },
  {
    _id: "2",
    icon: "⚡",
    title: "Fast & Easy Installation",
    desc: "Pre-cut, pre-drilled kits delivered to your site.",
  },
  {
    _id: "3",
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden costs, instant quotes.",
  },
  {
    _id: "4",
    icon: "📞",
    title: "Expert Support",
    desc: "From design consultation to aftercare.",
  },
  {
    _id: "5",
    icon: "🏷️",
    title: "Quality Product",
    desc: "Designed to meet or exceed local codes.",
  },
  {
    _id: "6",
    icon: "📈",
    title: "Foster Employee Growth",
    desc: "Pre-cut, pre-drilled kits delivered to your site.",
  },
  {
    _id: "7",
    icon: "💪",
    title: "All Materials American Made",
    desc: "No hidden costs, instant quotes.",
  },
  {
    _id: "8",
    icon: "🚫",
    title: "No Fluff",
    desc: "From design consultation to aftercare.",
  },
];

export default function OurPromise() {
  // const { data: cards = [], isLoading } = useWhyUs();

  const isLoading = false; // --- MOCK ---

  return (
    <section className="py-14 bg-secondary/95">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="text-primary ">Our Promise</span> to Every Customer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white text-gray-900 dark:bg-card dark:text-card-foreground rounded-md p-4 py-8 flex flex-col items-center gap-3 shadow-md animate-pulse"
                  aria-hidden
                >
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-700" />
                  <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-3/4 mt-3" />
                  <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-5/6 mt-2" />
                </div>
              ))
            : cards.map((c) => (
                <div
                  key={c._id}
                  className="bg-white text-gray-900 dark:bg-card dark:text-card-foreground rounded-md p-4 py-8 flex flex-col items-center gap-3 shadow-md"
                >
                  {/* {c.image ? (
                    // simple image fallback for emoji/png icons
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.image} alt={c.title} className="w-12 h-12" />
                  ) : ( */}
                  <div className="text-5xl">{c.icon}</div>
                  {/* // )} */}
                  <h3 className="font-semibold text-lg text-center">
                    {c.title}
                  </h3>
                  <p className="text-sm text-center text-muted-foreground max-w-48">
                    {c.desc}
                  </p>
                </div>
              ))}
        </div>
      </Container>
    </section>
  );
}

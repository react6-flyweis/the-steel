import Container from "../Container";

const CARDS = [
  {
    icon: "🏗️",
    title: "Engineered Strength",
    desc: "Designed to meet or exceed local codes.",
  },
  {
    icon: "⚡",
    title: "Fast & Easy Installation",
    desc: "Pre-cut, pre-drilled kits delivered to your site.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden costs, instant quotes.",
  },
  {
    icon: "📞",
    title: "Expert Support",
    desc: "From design consultation to aftercare.",
  },
  {
    icon: "🏷️",
    title: "Quality Product",
    desc: "Designed to meet or exceed local codes.",
  },
  {
    icon: "📈",
    title: "Foster Employee Growth",
    desc: "Pre-cut, pre-drilled kits delivered to your site.",
  },
  {
    icon: "💪",
    title: "All Materials American Made",
    desc: "No hidden costs, instant quotes.",
  },
  {
    icon: "🚫",
    title: "No Fluff",
    desc: "From design consultation to aftercare.",
  },
];

export default function OurPromise() {
  return (
    <section className="py-14 bg-secondary/95">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="text-primary ">Our Promise</span> to Every Customer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-white text-gray-900 dark:bg-card dark:text-card-foreground rounded-md p-4 py-8 flex flex-col items-center gap-3 shadow-md"
            >
              <div className="text-5xl">{c.icon}</div>
              <h3 className="font-semibold text-lg text-center">{c.title}</h3>
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

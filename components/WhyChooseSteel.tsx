import Container from "@/components/Container";
import { BicepsFlexed, Box, Zap, HandCoins, Leaf } from "lucide-react";

export default function WhyChooseSteel() {
  const items = [
    { title: "Stronger & more durable", icon: BicepsFlexed },
    { title: "Resistant to fire, pests, and rot", icon: Box },
    { title: "Faster installation", icon: Zap },
    { title: "Cost-effective over time", icon: HandCoins },
    { title: "Eco-friendly & recyclable", icon: Leaf },
  ];

  return (
    <section className="py-20 bg-secondary text-white">
      <Container className="text-center  mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-primary">Why Choose Steel</span> Over
          Traditional Materials?
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Check a building type to explore designs, features, and get instant
          quotes.
        </p>
      </Container>

      <Container className="flex flex-wrap justify-center gap-x-12 gap-y-24">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="relative text-center px-6 pt-5 w-full sm:w-1/2 lg:w-1/4"
            >
              <div className="absolute inset-x-0 mx-auto h-30 w-30 -top-5 rounded-full blur-sm bg-linear-to-br from-blue-600/30 to-transparent"></div>

              <div className="mb-3 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{it.title}</h3>
            </div>
          );
        })}
      </Container>
    </section>
  );
}

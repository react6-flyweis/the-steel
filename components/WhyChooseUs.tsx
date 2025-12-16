import React from "react";
import Container from "./Container";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Engineered Strength",
      desc: "Every building is custom-engineered—not one-size-fits-all.",
    },
    {
      title: "Instant, Transparent Quotes",
      desc: "Get pricing without mandatory login or long delays.",
    },
    {
      title: "Flexible Customization",
      desc: "Sizes, layouts, doors, insulation, colors, and roof styles.",
    },
    {
      title: "Fast Delivery",
      desc: "Pre-cut, pre-drilled kits shipped directly to your site.",
    },
    {
      title: "Expert Support",
      desc: "From first quote to final build—and beyond.",
    },
    {
      title: "Long-Term Warranties",
      desc: "Peace of mind with industry-leading coverage.",
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <Container className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
        <p className="mt-2 text-slate-400 text-lg">What Sets Us Apart</p>
      </Container>

      <Container as="div">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="p-8 bg-slate-700/60 rounded-md shadow-sm"
            >
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-4 text-sm text-slate-200 leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Button } from "../ui/button";

import garageImg from "@/assets/buildings/garage.png";
import workshopImg from "@/assets/buildings/workshop.png";
import bardominiusImg from "@/assets/buildings/bardominius.png";
import agricultureImg from "@/assets/buildings/agriculture.png";
import aviationImg from "@/assets/buildings/aviation.png";
import inventoryImg from "@/assets/buildings/inventory.png";
import commercialImg from "@/assets/buildings/commercial.png";
import storageImg from "@/assets/buildings/storage.png";
import buildingsBg from "@/assets/buildings/buildings-bg.png";
import Container from "../Container";

const items = [
  {
    title: "Garages",
    desc: "Secure & customizable for vehicles, tools, or storage.",
    img: garageImg,
  },
  {
    title: "Workshops",
    desc: "Clear-span interiors for productivity.",
    img: workshopImg,
  },
  {
    title: "Barndominiums",
    desc: "Live + work under one roof.",
    img: bardominiusImg,
  },
  {
    title: "Agricultural",
    desc: "Barns, sheds, feed storage engineered to farm needs.",
    img: agricultureImg,
  },
  {
    title: "Aviation",
    desc: "Hangars with wide clear spans for aircraft.",
    img: aviationImg,
  },
  {
    title: "Clearance Inventory",
    desc: "Expandable & cost-efficient spaces.",
    img: inventoryImg,
  },
  {
    title: "Commercial",
    desc: "Simple, durable protection from sun & rain.",
    img: commercialImg,
  },
  {
    title: "Self Storage",
    desc: "Quick shelter solutions",
    img: storageImg,
  },
];

export default function Buildings() {
  return (
    <section className="relative py-16 bg-secondary text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${buildingsBg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl font-extrabold">
          <span className="text-primary">Steel Buildings for</span> Every
          Purpose
        </h2>
        <p className="mt-3 text-sm text-white/80 max-w-2xl mx-auto">
          Check a building type to explore designs, features, and get instant
          quotes.
        </p>

        <Container className="mt-10 flex flex-wrap justify-center gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="flex items-center gap-4 p-3 rounded-xl bg-card/10 border border-white/5 w-[370px]"
            >
              <div className=" flex items-center justify-center shrink-0">
                <Image
                  src={it.img}
                  alt={it.title}
                  className="object-contain h-full w-full max-w-24 max-h-24"
                />
              </div>

              <div className="text-left">
                <div className="font-semibold text-lg">{it.title}</div>
                <div className="text-sm text-white/70 mt-1">{it.desc}</div>
              </div>
            </article>
          ))}
        </Container>

        <div className="mt-10 flex justify-center">
          <Button size="lg" className="min-w-44 rounded">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

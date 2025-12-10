import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

import garageImg from "@/assets/buildings/garage.png";
import workshopImg from "@/assets/buildings/workshop.png";
import bardominiusImg from "@/assets/buildings/bardominius.png";
import agricultureImg from "@/assets/buildings/agriculture.png";
import aviationImg from "@/assets/buildings/aviation.png";
import inventoryImg from "@/assets/buildings/inventory.png";
import commercialImg from "@/assets/buildings/commercial.png";
import storageImg from "@/assets/buildings/storage.png";

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
    <section className="py-16 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl font-extrabold">
          <span className="text-primary">Steel Buildings for</span> Every
          Purpose
        </h2>
        <p className="mt-3 text-sm text-white/80 max-w-2xl mx-auto">
          Check a building type to explore designs, features, and get instant
          quotes.
        </p>

        {/* Fixed-width centered container using flex + wrap. Cards have fixed widths so the
            last row naturally centers when there's an incomplete line. */}
        <div className="mt-10">
          <div className="mx-auto max-w-[1100px] flex flex-wrap justify-center gap-6">
            {items.map((it) => (
              <article
                key={it.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/20 border border-white/5 w-[340px]"
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
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="lg" className="min-w-44 rounded">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

// import Image from "next/image";
import { Button } from "../ui/button";

// import garageImg from "@/assets/buildings/garage.png";
// import workshopImg from "@/assets/buildings/workshop.png";
// import bardominiusImg from "@/assets/buildings/bardominius.png";
// import agricultureImg from "@/assets/buildings/agriculture.png";
// import aviationImg from "@/assets/buildings/aviation.png";
// import inventoryImg from "@/assets/buildings/inventory.png";
// import commercialImg from "@/assets/buildings/commercial.png";
// import storageImg from "@/assets/buildings/storage.png";
import buildingsBg from "@/assets/buildings/buildings-bg.png";
import Container from "../Container";
import GetAQuoteDialog from "../GetAQuoteDialog";
import useBuildingTypes, { BuildingType } from "@/lib/hooks/useBuildingTypes";

// const items = [
//   {
//     title: "Garages",
//     desc: "Secure & customizable for vehicles, tools, or storage.",
//     img: garageImg,
//   },
//   {
//     title: "Workshops",
//     desc: "Clear-span interiors for productivity.",
//     img: workshopImg,
//   },
//   {
//     title: "Barndominiums",
//     desc: "Live + work under one roof.",
//     img: bardominiusImg,
//   },
//   {
//     title: "Agricultural",
//     desc: "Barns, sheds, feed storage engineered to farm needs.",
//     img: agricultureImg,
//   },
//   {
//     title: "Aviation",
//     desc: "Hangars with wide clear spans for aircraft.",
//     img: aviationImg,
//   },
//   {
//     title: "Clearance Inventory",
//     desc: "Expandable & cost-efficient spaces.",
//     img: inventoryImg,
//   },
//   {
//     title: "Commercial",
//     desc: "Simple, durable protection from sun & rain.",
//     img: commercialImg,
//   },
//   {
//     title: "Self Storage",
//     desc: "Quick shelter solutions",
//     img: storageImg,
//   },
// ];

export default function Buildings() {
  const { data: items = [], isLoading, isError } = useBuildingTypes();

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
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : isError ? (
            <div className="text-sm text-red-300">
              Unable to load building types.
            </div>
          ) : items.length === 0 ? (
            <div className="text-sm text-white/70">
              No building types available.
            </div>
          ) : (
            items.map((it) => <BuildingCard key={it._id} item={it} />)
          )}
        </Container>

        <div className="mt-10 flex justify-center">
          <GetAQuoteDialog>
            <Button size="lg" className="min-w-44 rounded">
              Get a Quote
            </Button>
          </GetAQuoteDialog>
        </div>
      </div>
    </section>
  );
}

function BuildingCard({ item }: { item: BuildingType }) {
  return (
    <article className="flex items-center gap-4 p-3 rounded-xl bg-card/10 border border-white/5 w-[370px]">
      <div className="flex items-center justify-center shrink-0 w-24 h-24 rounded overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain h-full w-full max-w-24 max-h-24"
          width={96}
          height={96}
        />
      </div>

      <div className="text-left">
        <div className="font-semibold text-lg">{item.title}</div>
        <div className="text-sm text-white/70 mt-1">{item.description}</div>
      </div>
    </article>
  );
}

function SkeletonCard() {
  return (
    <article className="flex items-center gap-4 p-3 rounded-xl bg-card/10 border border-white/5 w-[370px] animate-pulse">
      <div className="flex items-center justify-center shrink-0 w-24 h-24 bg-white/5 rounded">
        <div className="w-16 h-16 bg-white/10 rounded" />
      </div>

      <div className="text-left w-full">
        <div className="h-5 bg-white/10 rounded w-3/5 mb-2" />
        <div className="h-4 bg-white/6 rounded w-4/5" />
      </div>
    </article>
  );
}

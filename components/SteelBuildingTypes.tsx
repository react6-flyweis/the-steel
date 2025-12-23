"use client";

// import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import garageImg from "@/assets/building-types/garages.webp";
// import workshopImg from "@/assets/building-types/workshops.webp";
// import bardominiusImg from "@/assets/building-types/bardominiums.webp";
// import agricultureImg from "@/assets/building-types/agriculture.webp";
// import aviationImg from "@/assets/building-types/aviation.webp";
// import inventoryImg from "@/assets/building-types/inventory.webp";
// import commercialImg from "@/assets/building-types/commercials.webp";
// import storageImg from "@/assets/building-types/storage.webp";
import { BoxIcon, HandCoinsIcon } from "lucide-react";
import useBuildingTypes from "@/lib/hooks/useBuildingTypes";

// const BUILDING_TYPES = [
//   { title: "Garages", src: garageImg },
//   { title: "Workshops / Shops", src: workshopImg },
//   { title: "Barndominiums", src: bardominiusImg },
//   { title: "Agricultural Buildings", src: agricultureImg },
//   { title: "Aviation", src: aviationImg },
//   { title: "Clearance Inventory", src: inventoryImg },
//   { title: "Commercials", src: commercialImg },
//   { title: "Self Storage", src: storageImg },
// ];

export default function SteelBuildingTypes() {
  const { data, isLoading, isError } = useBuildingTypes();

  return (
    <Container as="section" className="py-16">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-4xl  font-bold">
          <span className="text-primary">Steel Buildings</span> for Every
          Purpose
        </h2>
        <p className="mt-2 ">
          From residential garages to large commercial warehouses, our buildings
          are engineered for strength, flexibility, and long-lasting value.
          Explore the right building type for your project.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            className="rounded border-primary text-primary min-w-32"
            size="lg"
            variant="outline"
          >
            <BoxIcon />
            Design in 3D
          </Button>
          <Button size="lg" className="rounded">
            <HandCoinsIcon />
            Price Your Building
          </Button>
        </div>
      </div>
      {isLoading ? (
        <div className="text-center py-8">Loading building types…</div>
      ) : isError || !data ? (
        <div className="text-center py-8">Unable to load building types.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((b) => {
            return (
              <Link
                key={b._id}
                href="/designer"
                className="relative rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 ease-out transform hover:scale-105 hover:shadow-2xl cursor-pointer block"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-48 md:h-64 object-cover"
                  // placeholder="blur"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute w-full bottom-4 text-white text-xl md:text-2xl font-semibold drop-shadow-md text-center">
                  {b.title}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </Container>
  );
}

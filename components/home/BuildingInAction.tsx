"use client";

import Image from "next/image";
import Link from "next/link";

import useProjects from "@/lib/hooks/useProjects";

import Container from "../Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";

// import texasImg from "@/assets/buildings/building-texas.png";
// import ontarioImg from "@/assets/buildings/building-ontario.png";
// import melbourneImg from "@/assets/buildings/building-melbourne.png";
// import lasImg from "@/assets/buildings/building-las.png";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

// const items = [
//   {
//     title: "30' × 40' Workshop",
//     location: "Texas",
//     img: texasImg,
//   },
//   {
//     title: "50' × 60' Agricultural Barn",
//     location: "Ontario",
//     img: ontarioImg,
//   },
//   {
//     title: "80' × 100' Commercial Warehouse",
//     location: "Melbourne",
//     img: melbourneImg,
//   },
//   {
//     title: "30' × 40' Workshop",
//     location: "Las Vegas",
//     img: lasImg,
//   },
// ];

export default function BuildingInAction() {
  const { data: projects = [], isLoading } = useProjects();

  const items = (projects || []).map((p) => ({
    title: p.title || "",
    location: p.description || "",
    img: p.image || "",
  }));

  if (isLoading || items.length === 0) return null;

  return (
    <section className="py-20 bg-background">
      <Container className="text-center">
        <h2 className="text-3xl font-extrabold text-slate-900">
          See Our Buildings in Action
        </h2>

        <p className="sr-only">Carousel of building projects</p>

        <div className="mt-10 relative">
          <Carousel opts={{ align: "start", containScroll: "trimSnaps" }}>
            <CarouselContent className="items-start">
              {items.map((it, idx) => (
                <CarouselItem
                  key={idx}
                  className="w-[360px] sm:basis-1/2 md:basis-[30%]"
                >
                  <article className="rounded-2xl bg-gray-50 border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-4">
                      <div className="rounded-xl overflow-hidden bg-white">
                        {typeof it.img === "string" ? (
                          <img
                            src={it.img}
                            alt={it.title}
                            className="object-cover w-full h-[200px]"
                          />
                        ) : (
                          <Image
                            src={it.img}
                            alt={it.title}
                            width={520}
                            height={320}
                            className="object-cover w-full h-[200px]"
                          />
                        )}
                      </div>

                      <div className="text-left mt-4 font-semibold  text-[#6D6D6D]">
                        <div className="">{it.title}</div>
                        <div className=" mt-1">{it.location}</div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>

        <div className="mt-8">
          <Link href="/projects">
            <Button variant="link" className="px-0!">
              View All Projects
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

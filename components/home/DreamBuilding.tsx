"use client";

import Image, { StaticImageData } from "next/image";

import Container from "../Container";
import DreamBuildingForm from "./DreamBuildingForm";

export default function DreamBuilding({
  image,
}: {
  image: StaticImageData | string;
}) {
  return (
    <section className="bg-secondary text-white">
      <div className="w-full h-full">
        <Image
          src={image}
          alt="dream steel building"
          className="object-cover w-full"
          priority
        />
      </div>

      <div className="relative -mt-20 pb-20">
        <div className="absolute w-full top-0 h-40 -translate-y-12 x-auto  bg-linear-to-t from-secondary to-secondary/80 blur-sm z-0" />

        <Container>
          <div className="relative mb-32 mt-5 z-10 text-center">
            <h2 className="text-2xl font-bold">
              Ready to Build Your Dream Steel Building?
            </h2>
            <p className="mt-3 text-xl text-gray-200">
              Get a free engineered drawing & quote in just 24 hours.
            </p>
          </div>

          <div className="">
            <DreamBuildingForm />
          </div>
        </Container>
      </div>
    </section>
  );
}

"use client";

import Image, { StaticImageData } from "next/image";

import Container from "../Container";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

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

      <Container fluid className="relative -mt-20 pb-20 px-0!">
        <div className="absolute w-full top-0 h-40 -translate-y-12 x-auto  bg-linear-to-t from-secondary to-secondary/80 blur-sm z-0" />

        <div className="relative mb-32 mt-5 z-10 text-center">
          <h2 className="text-2xl font-bold">
            Ready to Build Your Dream Steel Building?
          </h2>
          <p className="mt-3 text-xl text-gray-200">
            Get a free engineered drawing & quote in just 24 hours.
          </p>
        </div>

        <div className="">
          <div className="mx-auto max-w-lg bg-white text-gray-900 rounded-xl shadow-lg p-6 -mt-20">
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <label className="text-sm">
                <span className="block text-xs text-gray-500">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white text-sm outline-none focus:ring-2 focus:ring-primary/50"
                />
              </label>

              <label className="text-sm">
                <span className="block text-xs text-gray-500">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white text-sm outline-none focus:ring-2 focus:ring-primary/50"
                />
              </label>

              <label className="text-sm">
                <span className="block text-xs text-gray-500">City/State</span>
                <input
                  type="text"
                  name="city"
                  placeholder="City/State"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white text-sm outline-none focus:ring-2 focus:ring-primary/50"
                />
              </label>

              <label className="text-sm">
                <span className="block text-xs text-gray-500">
                  Intended Use
                </span>
                <input
                  type="text"
                  name="use"
                  placeholder="Intended Use"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white text-sm outline-none focus:ring-2 focus:ring-primary/50"
                />
              </label>

              <label className="text-sm">
                <span className="block text-xs text-gray-500">Notes</span>
                <textarea
                  name="notes"
                  placeholder="Notes"
                  rows={3}
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white text-sm outline-none focus:ring-2 focus:ring-primary/50"
                />
              </label>

              <div className="pt-2 flex justify-center">
                <Button className="rounded bg-secondary min-w-40" type="submit">
                  Get My Quote
                  <ArrowRight />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

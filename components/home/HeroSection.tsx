import Image from "next/image";
import heroHouse from "@/assets/home/hero-house-img.png";
import cloud from "@/assets/home/cloud.png";
import { Button } from "../ui/button";
import { BoxIcon, HandCoinsIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-80px)]">
      {/* Cloud background (put behind everything) */}
      <div className="absolute inset-x-0 -top-8 pointer-events-none -z-10">
        <Image src={cloud} alt="clouds" className="w-full h-auto opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-44 text-center relative z-10">
        <h1 className="text-3xl  font-extrabold leading-tight text-gray-900">
          Engineered Steel Buildings Built for
          <br />
          <span className="text-primary"> Strength, Style & Longevity.</span>
        </h1>

        <p className="mt-2 max-w-2xl mx-auto text-base sm:text-lg text-gray-700">
          From small garages to large warehouses—custom-engineered kits
          delivered to your site, designed to local codes for wind, snow, and
          seismic safety.
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

      {/* House image overlapping lower section */}
      <div className="absolute bottom-22 w-full flex justify-center pointer-events-none z-10">
        <div
          className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[45%] z-10"
          style={{ transform: "scaleX(-1)" }}
        >
          <Image
            src={heroHouse}
            alt="steel building"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Stats band */}
      <div className="z-20 pt-6 pb-4 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="flex flex-col items-center gap-4 justify-center md:justify-start">
            <div className="text-2xl">⭐️⭐️⭐️⭐️⭐️</div>
            <div className="text-sm">“4.9/5 Rated by 1,200+ Customers”</div>
          </div>

          <div className="flex items-center justify-center md:justify-center border-t md:border-t-0 md:border-l md:border-r border-white/10 py-4 md:py-0">
            <div className="text-3xl font-semibold">30</div>
            <div className="ml-4 text-sm">Year Panel Warranty</div>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-6">
            <div className="text-center">
              <div className="text-2xl font-semibold">Engineered</div>
              <div className="text-sm">Drawings Included</div>
            </div>
            <div className="hidden md:block border-l border-white/10 h-8" />
            <div className="text-center">
              <div className="text-2xl font-semibold">Delivery</div>
              <div className="text-sm">Nationwide/Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

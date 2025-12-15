import Image from "next/image";
import heroHouse from "@/assets/home/hero-house-img.png";
import cloud from "@/assets/home/cloud.png";
import { Button } from "../ui/button";
import { BoxIcon, HandCoinsIcon } from "lucide-react";
import Container from "../Container";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden md:min-h-[calc(100vh-80px)] flex flex-col">
      {/* Cloud background (full-height behind everything) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src={cloud}
          alt="clouds"
          fill
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <Container className="pt-10 text-center relative z-10">
        <h1 className="text-3xl  font-bold leading-tight text-secondary">
          Engineered Steel Buildings Built for
          <br />
          <span className="text-primary"> Strength, Style & Longevity.</span>
        </h1>

        <p className="mt-2 max-w-2xl mx-auto">
          From small garages to large warehouses—custom-engineered kits
          delivered to your site, designed to local codes for wind, snow, and
          seismic safety.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4 pb-5">
          <Link href="/templates">
            <Button
              className="rounded border-primary text-primary min-w-32"
              size="lg"
              variant="outline"
            >
              <BoxIcon />
              Design in 3D
            </Button>
          </Link>
          <Button size="lg" className="rounded">
            <HandCoinsIcon />
            Price Your Building
          </Button>
        </div>
      </Container>

      {/* House image overlapping lower section — flow on mobile, absolute on md+ */}
      <div className="relative md:absolute md:bottom-22 w-full flex justify-center pointer-events-none z-10 mt-6 md:mt-0">
        <div
          className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[45%] z-10"
          style={{ transform: "scaleX(-1)" }}
        >
          <Image
            src={heroHouse}
            alt="steel building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats band */}
      <div className=" pt-15 pb-4 bg-secondary text-white mt-auto order-last">
        <Container className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col  gap-4 justify-center md:justify-start">
            <div className="text-2xl">⭐️⭐️⭐️⭐️⭐️</div>
            <div className="text-sm">“4.9/5 Rated by 1,200+ Customers”</div>
          </div>

          <div className="flex flex-col pl-5 justify-center border-t md:border-t-0 md:border-l border-white/50 py-4 md:py-0">
            <div className="text-3xl font-semibold">30</div>
            <div className="text-sm">Year Panel Warranty</div>
          </div>

          <div className="flex flex-col pl-5 justify-center border-t md:border-t-0 md:border-l border-white/50 py-4 md:py-0">
            <div className="">
              <div className="text-2xl font-semibold">Engineered</div>
              <div className="text-sm">Drawings Included</div>
            </div>
          </div>

          <div className="flex flex-col pl-5 justify-center border-t md:border-t-0 md:border-l border-white/50 py-4 md:py-0">
            <div className="">
              <div className="text-2xl font-semibold">Delivery</div>
              <div className="text-sm">Nationwide/Worldwide</div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

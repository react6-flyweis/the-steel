import aboutHeroImg from "@/assets/about-hero.png";
import { Button } from "@/components/ui/button";
import GetAQuoteDialog from "./GetAQuoteDialog";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutHeroImg.src})` }}
        aria-hidden
      />

      <div className="absolute bottom-0 w-full bg-linear-to-b h-full md:h-1/2 from-black/10 to-black/80" />

      <div className="relative z-10 flex items-center md:items-end justify-center h-full px-6 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>

          <p className="mt-4 text-gray-200">
            From small garages to massive warehouses, our projects speak for
            themselves. Explore real builds completed by homeowners, farmers,
            and businesses across the country.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <GetAQuoteDialog>
              <Button className="bg-white border-primary text-primary hover:bg-gray-100 rounded w-44">
                Get a Quote
              </Button>
            </GetAQuoteDialog>

            <Link href="/building-types">
              <Button className="rounded w-44 bg-blue-600 text-white hover:bg-blue-700">
                See Our Building types
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

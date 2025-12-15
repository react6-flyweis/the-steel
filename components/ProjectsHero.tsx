import { Button } from "@/components/ui/button";
import projectsHeroImg from "@/assets/projects-hero.png";
import GetAQuoteDialog from "./GetAQuoteDialog";
import Link from "next/link";

export default function ProjectsHero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectsHeroImg.src})` }}
        aria-hidden
      />

      <div className="absolute bottom-0 w-full bg-linear-to-b h-full from-transparent via-black/50 to-black/90" />

      <div className="relative z-10 flex items-end justify-center h-full px-6 pb-12">
        <div className="text-center">
          <h1 className=" text-3xl  font-bold leading-tight text-white">
            Our Steel Buildings in Action
          </h1>

          <p className="mt-3 text-gray-200  max-w-2xl mx-auto">
            From small garages to massive warehouses, our projects speak for
            themselves. Explore real builds completed by homeowners, farmers,
            and businesses across the country.
          </p>

          <div className="mt-3 flex items-center justify-center gap-4">
            <GetAQuoteDialog>
              <Button className=" bg-white border-primary text-primary hover:bg-gray-100 rounded min-w-40">
                Get a Quote
              </Button>
            </GetAQuoteDialog>

            <Link href="/building-types">
              <Button className="rounded min-w-40">
                See Our Building types
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

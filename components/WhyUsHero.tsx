import whyUsHero from "@/assets/why-us-hero.webp";
import { Button } from "@/components/ui/button";

export default function WhyUsHero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${whyUsHero.src})` }}
        aria-hidden
      />

      <div className="absolute bottom-0 w-full bg-linear-to-b h-1/2 from-transparent via-black/30 to-black/80" />

      <div className="relative z-10 flex items-end justify-center h-full px-6 pb-12">
        <div className="text-center">
          <h1 className=" text-3xl  font-bold leading-tight text-white">
            {" "}
            <span className="text-blue-500">Why Thousands Trust</span>{" "}
            <span className="text-white">The Steel</span>{" "}
          </h1>
          <h1 className=" text-3xl  font-bold leading-tight text-white">
            Company{" "}
            <span className="text-blue-500">
              for Their Steel Building Projects
            </span>
          </h1>

          <p className="mt-3 text-gray-200  max-w-2xl mx-auto">
            We don’t just sell steel buildings—we engineer lasting solutions,
            backed by expertise, service, and unmatched reliability.
          </p>

          <div className="mt-3 flex items-center justify-center gap-4">
            <Button className=" bg-white border-primary text-primary hover:bg-gray-100 rounded w-40">
              Get a Quote
            </Button>

            <Button className="rounded w-40">See Our Projects</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import NotSureImage from "@/assets/not-sure.png";
import Container from "./Container";
import { Button } from "./ui/button";

export default function NotSure() {
  return (
    <section className="bg-muted">
      <Container className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left: text + actions */}
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-semibold text-primary">
              Not Sure Which
            </h3>

            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-secondary">
              Building Type Fits Your Needs?
            </h2>

            <p className="mt-4 text-muted-foreground max-w-xl">
              Talk to one of our building experts and get a free recommendation
              + quote in 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="lg"
                className="rounded border-primary text-primary"
              >
                Get a Free Quote
              </Button>

              <Button size="lg" className="rounded">
                Talk to an Expert
              </Button>
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full flex justify-end">
            <div className="w-full max-w-[700px]">
              <Image
                src={NotSureImage}
                alt="red steel building"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

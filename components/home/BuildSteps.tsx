"use client";
import Image from "next/image";
import houseSteps from "@/assets/home/house-steps.png";
import Container from "../Container";

const steps = [
  {
    id: 1,
    title: "Consultation",
    desc: "Share your project details & goals.",
  },
  {
    id: 2,
    title: "Engineering & Design",
    desc: "Custom plans stamped to meet codes.",
  },
  {
    id: 3,
    title: "Delivery & Logistics",
    desc: "Materials shipped directly to your site.",
  },
  {
    id: 4,
    title: "Build & Support",
    desc: "DIY or installer network + warranty coverage.",
  },
];

export default function BuildSteps() {
  return (
    <Container className="relative overflow-hidden py-16 bg-[#EDF1F4]" fluid>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full relative overflow-visible flex items-center justify-start order-last md:order-first">
          <div className="md:absolute md:-left-80 md:-top-50 mt-6 md:mt-0 mx-auto">
            <Image
              src={houseSteps}
              alt="building steps"
              className="scale-x-[-1] scale-150"
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            From Consultation to Completion
            <br />
            We&apos;re With You.
          </h2>

          <div className="space-y-4">
            {steps.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-5 bg-muted/80 dark:bg-muted/60 p-3 rounded-full shadow-sm"
              >
                <div className="flex items-center justify-center size-10 md:size-12 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold">
                  {s.id}
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}

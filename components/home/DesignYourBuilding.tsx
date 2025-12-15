"use client";
import DesignPreview from "./DesignPreview";
import BuildingForm from "./BuildingForm";
import Container from "../Container";

import formCardBg from "@/assets/home/form-card-bg.png";
import Image from "next/image";

export default function DesignYourBuilding() {
  return (
    <section className="py-16">
      <Container className="text-center mb-8">
        <h2 className="text-3xl font-bold text-secondary">
          <span className="text-primary">Design & Price</span> Your Building in
          Minutes
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Your building will be reviewed by our engineers for local wind, snow &
          seismic codes before finalizing.
        </p>
      </Container>

      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Designer Preview */}
        <DesignPreview />

        {/* Right: Multi-step form placeholder */}
        <div className="bg-card/5 border border-white/5 rounded-xl overflow-hidden relative">
          {/* background image */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
            <Image
              src={formCardBg}
              alt=""
              fill
              className="object-cover object-top opacity-10"
            />
          </div>
          <BuildingForm />
        </div>
      </Container>
    </section>
  );
}

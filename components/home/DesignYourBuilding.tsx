"use client";
import DesignPreview from "./DesignPreview";
import BuildingForm from "./BuildingForm";
import Container from "../Container";

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

      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Designer Preview */}
        <DesignPreview />

        {/* Right: Multi-step form placeholder */}
        <BuildingForm />
      </Container>
    </section>
  );
}

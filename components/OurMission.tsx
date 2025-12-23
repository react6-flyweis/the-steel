import React from "react";
import Container from "./Container";

export default function OurMission() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Container as="div">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
            <div className="p-8 bg-slate-700/60 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="mt-4 text-sm text-slate-200 leading-relaxed">
                To simplify steel construction by delivering engineered,
                affordable, and durable steel buildings—while providing
                transparent pricing and dependable support at every stage.
              </p>
            </div>

            <div className="p-8 bg-slate-700/60 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="mt-4 text-sm text-slate-200 leading-relaxed">
                To become a global leader in steel building solutions, known for
                innovation, reliability, and exceptional customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

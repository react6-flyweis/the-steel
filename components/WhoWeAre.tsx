import React from "react";
import Container from "./Container";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white">
      <Container as="div">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Who We Are
          </h2>

          <div className="mt-10 max-w-3xl mx-auto space-y-10 text-lg  text-gray-700 leading-relaxed">
            <p>
              A Steel Building Partner You Can Rely On Storage Material is a
              trusted provider of custom steel building solutions, offering
              everything from garages and workshops to large-scale commercial
              and agricultural structures.
            </p>

            <p>
              We combine engineering expertise, advanced manufacturing, and
              customer-first service to deliver steel buildings that meet
              real-world needs—no matter the size or complexity of the project.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

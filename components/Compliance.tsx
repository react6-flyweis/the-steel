import Container from "./Container";
import Image from "next/image";
import complianceBg from "@/assets/who-we-are.png";

export default function Compliance() {
  const complianceItems = [
    "Engineer-approved designs",
    "Code-compliant structural calculations",
    "High-grade steel materials",
    "Tested coatings and finishes",
    "Documented quality checks",
  ];

  return (
    <section className="relative bg-[#1e2a4a] py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={complianceBg}
          alt="Compliance background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#1e2a4a]/70" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Commitment to Quality & Compliance
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-6xl px-6 mx-auto">
            We adhere to strict quality standards and engineering practices to
            ensure every building we deliver meets or exceeds industry
            expectations.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-6xl px-6 mx-auto">
          {/* Row 1 - Left aligned */}
          <div className="w-full flex justify-start">
            <div className="bg-gradient-to-r from-white/40 to-transparent backdrop-blur-sm px-8 py-4 md:px-10 md:py-5 rounded hover:from-white/60 transition-colors">
              <p className="text-white text-base md:text-lg font-medium text-center">
                {complianceItems[0]}
              </p>
            </div>
          </div>

          {/* Row 2 - Center */}
          <div className="w-full flex justify-center">
            <div className="bg-gradient-to-r from-white/40 to-transparent backdrop-blur-sm px-8 py-4 md:px-10 md:py-5 rounded hover:from-white/60 transition-colors">
              <p className="text-white text-base md:text-lg font-medium text-center">
                {complianceItems[1]}
              </p>
            </div>
          </div>

          {/* Row 3 - Right aligned */}
          <div className="w-full flex justify-end">
            <div className="bg-gradient-to-r from-white/40 to-transparent backdrop-blur-sm px-8 py-4 md:px-10 md:py-5 rounded hover:from-white/60 transition-colors">
              <p className="text-white text-base md:text-lg font-medium text-center">
                {complianceItems[2]}
              </p>
            </div>
          </div>

          {/* Row 4 - Center */}
          <div className="w-full flex justify-center">
            <div className="bg-gradient-to-r from-white/40 to-transparent backdrop-blur-sm px-8 py-4 md:px-10 md:py-5 rounded hover:from-white/60 transition-colors">
              <p className="text-white text-base md:text-lg font-medium text-center">
                {complianceItems[3]}
              </p>
            </div>
          </div>

          {/* Row 5 - Left aligned */}
          <div className="w-full flex justify-start">
            <div className="bg-gradient-to-r from-white/40 to-transparent backdrop-blur-sm px-8 py-4 md:px-10 md:py-5 rounded hover:from-white/60 transition-colors">
              <p className="text-white text-base md:text-lg font-medium text-center">
                {complianceItems[4]}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import garage from "@/templates/garage.png";
import shop from "@/templates/shop.png";
import securePort from "@/templates/secure-port.png";
import industrial from "@/templates/industrial.png";
import carport from "@/templates/carport.png";
import singleSlope from "@/templates/single-slope.png";
import gable from "@/templates/gable.png";
import barndominium from "@/templates/barndominium.png";
import Container from "@/components/Container";

const templates = [
  { src: garage, title: "Garage/Workshop" },
  { src: shop, title: "Modern Shop" },
  { src: securePort, title: "Secure Port" },
  { src: industrial, title: "Industrial" },
  { src: carport, title: "Carport" },
  { src: singleSlope, title: "Single Slope" },
  { src: gable, title: "Custom Gable" },
  { src: barndominium, title: "Barndominium" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#EDF1F4] py-9 pb-5">
      <Container>
        <h1 className="text-2xl  font-semibold text-center mb-5">
          Welcome to The Steel Company Buildings 3D Designer
        </h1>
        <div className="bg-card/90 max-w-6xl mx-auto rounded-2xl p-4 shadow-md">
          <p className="text-center text-muted-foreground mb-4">
            Choose a template:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {templates.map((t) => (
              <Link
                key={t.title}
                href="/designer"
                className="bg-white rounded-lg overflow-hidden block"
              >
                <div className="w-full h-40 relative bg-slate-100">
                  <Image
                    src={t.src}
                    alt={t.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="bg-[#1f2937] text-white py-4 text-center font-medium">
                  {t.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

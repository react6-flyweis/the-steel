import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import TrustedBy from "@/components/home/TrustedBy";

import firstComeFirstServeImage from "@/assets/home/first-come-banner.png";
import Image from "next/image";
import Buildings from "@/components/home/Buildings";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Testimonials />
      <Image
        src={firstComeFirstServeImage}
        alt="First Come First Serve Banner"
        className="w-full "
      />
      <Buildings />
    </>
  );
}

import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import TrustedBy from "@/components/home/TrustedBy";

import firstComeFirstServeImage from "@/assets/home/first-come-banner.png";
import dreamBuildingImg from "@/assets/dream-building-home.png";

import Image from "next/image";
import Buildings from "@/components/home/Buildings";
import DesignYourBuilding from "@/components/home/DesignYourBuilding";
import OurPromise from "@/components/home/OurPromise";
import BuildSteps from "@/components/home/BuildSteps";
import BuildingInAction from "@/components/home/BuildingInAction";
import DreamBuilding from "@/components/home/DreamBuilding";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetAQuoteDialog from "@/components/GetAQuoteDialog";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustedBy />
      <Testimonials />
      <GetAQuoteDialog>
        <Image
          src={firstComeFirstServeImage}
          alt="First Come First Serve Banner"
          className="w-full "
        />
      </GetAQuoteDialog>
      <Buildings />
      <DesignYourBuilding />
      <OurPromise />
      <BuildSteps />
      <BuildingInAction />
      <DreamBuilding image={dreamBuildingImg} />
      <Footer />
    </>
  );
}

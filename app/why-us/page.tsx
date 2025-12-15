import DreamBuilding from "@/components/home/DreamBuilding";
import OurPromise from "@/components/home/OurPromise";
import Testimonials from "@/components/home/Testimonials";
import WhyUsHero from "@/components/WhyUsHero";
import WhyChooseComparison from "@/components/WhyChooseComparison";

import dreamBuildingImg from "@/assets/dream-building-why-us.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <WhyUsHero />
      <OurPromise />
      <WhyChooseComparison />
      <Testimonials />
      <DreamBuilding image={dreamBuildingImg} />
      <Footer />
    </>
  );
}

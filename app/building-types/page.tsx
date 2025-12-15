import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NotSure from "@/components/NotSure";
import SteelBuildingTypes from "@/components/SteelBuildingTypes";
import WhyChooseSteel from "@/components/WhyChooseSteel";

export default function Page() {
  return (
    <>
      <Header />
      <SteelBuildingTypes />
      <WhyChooseSteel />
      <NotSure />
      <Footer />
    </>
  );
}

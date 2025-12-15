import DreamBuilding from "@/components/home/DreamBuilding";
import ProjectsHero from "@/components/ProjectsHero";
import Gallery from "@/components/Gallery";

import dreamBuildingImg from "@/assets/dream-building-projects.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Header />
      <ProjectsHero />
      <Gallery />
      <DreamBuilding image={dreamBuildingImg} />
      <Footer />
    </>
  );
}

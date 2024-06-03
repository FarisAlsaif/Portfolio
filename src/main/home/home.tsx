import Header from "../header/header";
import InfoCard from "../info-card/info-card";
import Projects from "../projects/projects";
import AboutMe from "../about-me/about-me";
import Footer from "../footer/footer";
import { useRef } from "react";

function Home() {
  const footerRef = useRef(null);

  return (
    <div className="flex flex-col w-full gap-10">
      <Header />
      <InfoCard footerRef={footerRef} />
      <Projects />
      <AboutMe />
      <Footer ref={footerRef} />
    </div>
  );
}

export default Home;

import Header from "../header/header";
import InfoCard from "../info-card/info-card";
import Projects from "../projects/projects";
import AboutMe from "../about-me/about-me";
import Footer from "../footer/footer";

function Home() {
  return (
    <div className="flex flex-col w-full gap-10">
      <Header />
      <InfoCard />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Home;

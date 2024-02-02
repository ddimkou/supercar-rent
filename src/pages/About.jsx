import "../About.css";
import AboutHeading from "../components/AboutHeading";
import Reviews from "../components/Reviews";
import Awards from "../components/Awards";
import Faq from "../components/Faq";
const About = () => {
  return (
    <main className="about">
      <AboutHeading />
      <Awards />
      <Reviews />
      <Faq />
    </main>
  );
};

export default About;

import AboutHeading from "../components/AboutHeading";
import Reviews from "../components/Reviews";
import "../About.css";
import Awards from "../components/Awards";
const About = () => {
  return (
    <main className="about">
      <AboutHeading />
      <Awards />
      <Reviews />
    </main>
  );
};

export default About;

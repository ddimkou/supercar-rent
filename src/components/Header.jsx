import gsap from "gsap";
import { useEffect } from "react";

// test

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  // gsap
  useEffect(() => {
    gsap.to(".header h1", {
      opacity: 1,
      y: 40,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    gsap.to(".header h4", {
      opacity: 1,
      y: 40,
      duration: 1,
      delay: 0.7,
      ease: "power3.out",
    });
  }, []);

  return (
    <header className="header">
      <h1>Welcome to Supercar Rental</h1>
      <h4>Experience luxury and performance like never before.</h4>
    </header>
  );
};

export default Header;

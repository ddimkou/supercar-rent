import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // check scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      const headerHeight = 200;
      if (window.scrollY > headerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //   scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button className="scroll-btn" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
};

export default ScrollTopButton;

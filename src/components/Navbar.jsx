import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/supercar-logo.png";

const Navbar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  useEffect(() => {
    if (isPanelOpen) {
      // prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // normal
      document.body.style.overflow = "auto";
    }

    // ensure scrolling is enabled after component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPanelOpen]);

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <button
        className="hamburger"
        onClick={togglePanel}
        aria-label={isPanelOpen ? "Close menu" : "Open menu"} //accessibility
      >
        <FontAwesomeIcon icon={isPanelOpen ? faTimes : faBars} />
      </button>
      <div className={`nav-links ${isPanelOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/about" onClick={() => setIsPanelOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/store" onClick={() => setIsPanelOpen(false)}>
              Store
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsPanelOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="login"
              onClick={() => setIsPanelOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

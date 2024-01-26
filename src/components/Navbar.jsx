import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/supercar-logo.png";

const Navbar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

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
            <Link to="/" onClick={() => setIsPanelOpen(false)}>
              Home
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

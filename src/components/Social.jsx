import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  return (
    <section className="social-media-icons">
      <h2 className="socials">
        <span>Our Socials</span>
      </h2>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://www.instagram.com/YourPage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </section>
  );
};

export default SocialMediaIcons;

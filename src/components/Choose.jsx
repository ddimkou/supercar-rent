import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faGaugeHigh,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const Choose = () => {
  // gsap animation
  useEffect(() => {
    gsap.to(".choose-card", {
      scrollTrigger: {
        trigger: ".choose-card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: "easeInOut",
      duration: 1.5,
      from: { opacity: 0, y: 50 },
    });
  }, []);

  return (
    <section className="choose-us">
      <h2 className="choose-heading">
        <span>Why Choose us</span>
      </h2>
      <div className="choose-cards">
        <div className="choose-card">
          <FontAwesomeIcon className="card-icon" icon={faMoneyCheckDollar} />{" "}
          <h3>Payment Methods</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            nihil sequi voluptas quo cupiditate tempora assumenda incidunt quae
            error! Odio eum corporis perferendis? Deleniti rem dolorum labore
            excepturi iusto. Et.
          </p>
        </div>
        <div className="choose-card">
          <FontAwesomeIcon className="card-icon" icon={faGaugeHigh} />
          <h3>Fast and Easy </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            nostrum aliquam sapiente facere aperiam laudantium dolorem at
            facilis odit! Molestiae quia iusto
          </p>
        </div>
        <div className="choose-card">
          <FontAwesomeIcon className="card-icon" icon={faFaceSmile} />
          <h3>Happy Clients</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            cumque harum totam deserunt illo aliquid earum eligendi ea incidunt
            necessitatibus enim expedita laudantium numquam eveniet, tempore
            modi sapiente placeat officia!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Choose;

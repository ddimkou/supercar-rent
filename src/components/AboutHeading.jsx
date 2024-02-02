import storeImage from "../images/store.png";
import CountUp from "react-countup";
const AboutHeading = () => {
  return (
    <section className="about-heading">
      <img src={storeImage} alt="Car rental Store" />
      <div className="about-container">
        <div className="about-text">
          <h2>
            <span>Who We Are</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            exercitationem rerum omnis reprehenderit ducimus saepe modi
            molestiae voluptate ea neque aut repellat velit minus porro iure,
            nisi alias laudantium doloribus dolorum ex odio esse ipsam eveniet.
            Fugiat et qui delectus ullam eligendi alias neque praesentium.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            eius, nulla quis nam, ex omnis voluptate placeat similique ut maxime
            voluptas qui! Aspernatur animi facere eaque quae molestias, hic eum
            blanditiis aperiam quisquam corrupti maiores et optio incidunt rerum
            ipsum praesentium tempore. Vitae dolores quaerat placeat eos autem
            molestiae, quasi, vero neque sapiente voluptatum nemo, libero natus
            repudiandae reprehenderit quam!
          </p>
        </div>
        <div className="count-up-lbr">
          <div className="count-countries count">
            <div className="counting-nr">
              <CountUp end={20} duration={2.75} />
            </div>
            countries
          </div>
          <div className="count-supercars count">
            <div className="counting-nr">
              <CountUp end={600} duration={2.75} />+
            </div>
            supercars
          </div>
          <div className="count-customers count">
            <div className="counting-nr">
              <CountUp end={100} duration={2.75} />k
            </div>
            customers
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeading;

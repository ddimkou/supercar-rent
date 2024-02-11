import { useEffect, useState } from "react";
import StoreButtons from "./StoreButtons";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const StoreMain = () => {
  // GSAP
  useEffect(() => {
    gsap.to(".select-manufacturer", {
      opacity: 1,
      y: 10,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);
  useEffect(() => {
    gsap.to(".store-card-container", {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);
  // END of GSAP

  const [activeButton, setActiveButton] = useState("all");
  const navigate = useNavigate();

  // brand selector
  const handleButtonClick = (id) => {
    setActiveButton(id);
  };
  // car selector
  const handleCardClick = (carId) => {
    navigate(`/store/${carId}`);
  };
  const filteredCars =
    activeButton === "all"
      ? data
      : data.filter((car) => car.manufacturer.toLowerCase() === activeButton);
  return (
    <main className="store-container">
      <section className="select-manufacturer">
        <StoreButtons
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
      </section>
      <section className="store-card-container">
        {filteredCars.map((car) => (
          <div
            className="car-card"
            key={car.id}
            onClick={() => handleCardClick(car.id)}
          >
            <div className="brand-img">
              <img src={car.logo} alt={`${car.manufacturer} Logo`} />
            </div>
            <div className="car-img">
              <img src={car.image} alt={`${car.manufacturer} Logo`} />
            </div>
            <div className="car-text">
              <h3>
                {car.manufacturer} {car.model}
              </h3>
              <p>Year: {car.year}</p>
              <p>Engine: {car.engine_type}</p>
              <p>Horsepower: {car.horsepower} HP</p>
              <p>Top Speed: {car.top_speed} mph</p>
              <p>Price per Day: ${car.price_per_day}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default StoreMain;

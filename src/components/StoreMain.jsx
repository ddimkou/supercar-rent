import { useState } from "react";
import StoreButtons from "./StoreButtons";
import data from "../data/data.json";
const StoreMain = () => {
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (id) => {
    setActiveButton(id);
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
          <div className="car-card" key={car.id}>
            <div className="brand-img">
              <img src={car.logo} alt={`${car.manufacturer} Logo`} />
            </div>
            <div className="car-img">
              <img src={car.image} alt={`${car.manufacturer} Logo`} />
            </div>
            <div className="car-text">
              <h3>{car.model}</h3>
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

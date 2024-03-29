/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const StoreCarDetails = ({ car }) => {
  const [showMessage, setShowMessage] = useState(false);
  const loginMsg = () => {
    car.available && setShowMessage(true);
  };
  return (
    <>
      <section className="title">
        <h2>
          <span>
            {car.manufacturer} {car.model}
          </span>
        </h2>
      </section>
      <section className="car-details">
        <aside className="car-image">
          <img src={car.image} alt={`${car.manufacturer} ${car.model}`} />
        </aside>
        <section className="car-details-text">
          <ul className="car-specs">
            <li>
              <strong>Color:</strong> {car.color}
            </li>
            <li>
              <strong>Year:</strong> {car.year}
            </li>
            <li>
              <strong>Engine Type:</strong> {car.engine_type}
            </li>
            <li>
              <strong>Horsepower:</strong> {car.horsepower} HP
            </li>
            <li>
              <strong>Top Speed:</strong> {car.top_speed} mph
            </li>
            <li>
              <strong>Fuel Type:</strong> {car.fuel_type}
            </li>
            <li>
              <strong>Price per Day:</strong> {car.price_per_day} $
            </li>
            <li>
              <strong>Availability:</strong>
              {car.available ? (
                <span className="available-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
              ) : (
                <span className="not-available-icon">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              )}
            </li>
          </ul>
        </section>
      </section>
      <button
        onClick={loginMsg}
        className={car.available ? "rent" : "rent rent-not"}
      >
        RENT
      </button>
      {showMessage && (
        <div className="login-msg">
          Please{" "}
          <Link to="/login" className="login-link">
            log in
          </Link>{" "}
          to continue.
        </div>
      )}
    </>
  );
};

export default StoreCarDetails;

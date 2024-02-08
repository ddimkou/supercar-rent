import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const carData = data.find((car) => car.id.toString() === id);
    setCar(carData);
  }, [id]);

  if (!car) {
    return <div>404 error comp here</div>;
  }

  return (
    <div>
      <h2>
        {car.manufacturer} {car.model}
      </h2>
    </div>
  );
};

export default CarDetails;

import { useState } from "react";
import StoreButtons from "./StoreButtons";
// import data from "..//data/data.json";
const StoreMain = () => {
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };
  return (
    <main className="store-container">
      <section className="select-manufacturer">
        <StoreButtons
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
      </section>
      <section className="store-card-container">
        <div className="car-card">
          <div className="brand-img">dasdasd</div>
          <div className="car-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              neque aperiam amet quidem asperiores in numquam esse Laborum
              adipisci ipsa dolorum laudantium at eos consequuntur, atque in non
              dolor doloremque rerum aut!
            </p>
          </div>
        </div>
        <div className="car-card">
          <div className="brand-img">dasdasd</div>
          <div className="car-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              neque aperiam amet quidem asperiores in numquam esse Laborum
              adipisci ipsa dolorum laudantium at eos consequuntur, atque in non
              dolor doloremque rerum aut!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoreMain;

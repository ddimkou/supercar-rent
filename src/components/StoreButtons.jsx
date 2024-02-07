/* eslint-disable react/prop-types */
import audiLogo from "../images/manufacturer-logo/audi.png";
import bmwLogo from "../images/manufacturer-logo/bmw.png";
import ferrariLogo from "../images/manufacturer-logo/ferrari.png";
import lamborghiniLogo from "../images/manufacturer-logo/lamborghini.png";

const StoreButtons = ({ activeButton, handleButtonClick }) => {
  return (
    <>
      <button
        className={`all-manufacturer ${activeButton === "all" ? "active" : ""}`}
        onClick={() => handleButtonClick("all")}
      >
        ALL
      </button>
      <button
        className={activeButton === "audi" ? "active" : ""}
        onClick={() => handleButtonClick("audi")}
      >
        <img src={audiLogo} alt="audi Logo" />
      </button>
      <button
        className={activeButton === "bmw" ? "active" : ""}
        onClick={() => handleButtonClick("bmw")}
      >
        <img src={bmwLogo} alt="bmw Logo" />
      </button>
      <button
        className={activeButton === "ferrari" ? "active" : ""}
        onClick={() => handleButtonClick("ferrari")}
      >
        <img src={ferrariLogo} alt="ferrari Logo" />
      </button>
      <button
        className={activeButton === "lamborghini" ? "active" : ""}
        onClick={() => handleButtonClick("lamborghini")}
      >
        <img src={lamborghiniLogo} alt="lamborghini Logo" />
      </button>
    </>
  );
};

export default StoreButtons;

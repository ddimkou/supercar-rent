import data from "..//data/data.json";
import audiLogo from "../images/manufacturer-logo/audi.png";
import bmwLogo from "../images/manufacturer-logo/bmw.png";
import ferrariLogo from "../images/manufacturer-logo/ferrari.png";
import lamborghiniLogo from "../images/manufacturer-logo/lamborghini.png";

const StoreMain = () => {
  console.log(data);
  return (
    <main className="store-container">
      <section className="select-manufacturer">
        <button className="all-manufacturer">ALL</button>
        <button>
          <img src={audiLogo} alt="audi Logo" />
        </button>
        <button>
          <img src={bmwLogo} alt="bmw Logo" />
        </button>
        <button>
          <img src={ferrariLogo} alt="ferrari Logo" />
        </button>
        <button>
          <img src={lamborghiniLogo} alt="lamborghini Logo" />
        </button>
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

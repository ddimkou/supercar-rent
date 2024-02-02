import faceshot from "../images/faceshot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <section className="reviews">
      <h2>
        <span>Latest Reviews</span>
      </h2>
      <div className="card-container">
        <div className="card">
          <div className="reviews-img">
            <img src={faceshot} alt="faceshot" />
          </div>
          <div className="reviews-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              neque aperiam amet quidem asperiores in numquam esse Laborum
              adipisci ipsa dolorum laudantium at eos consequuntur, atque in non
              dolor doloremque rerum aut!
            </p>
          </div>
          <div className="stars">
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
          </div>
        </div>
        <div className="card">
          <div className="reviews-img">
            <img src={faceshot} alt="faceshot" />
          </div>
          <div className="reviews-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut
              nostrum, labore quaerat ad, enim aspernatur recusandae modi, porro
              fuga sed repellendus.
            </p>
          </div>
          <div className="stars">
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
          </div>
        </div>
        <div className="card">
          <div className="reviews-img">
            <img src={faceshot} alt="faceshot" />
          </div>
          <div className="reviews-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              delectus soluta atque neque odio, incidunt nemo corrupti ducimus,
              libero accusantium sit iste quia consequatur, enim expedita.
              Laboriosam distinctio animi molestiae incidunt!
            </p>
          </div>
          <div className="stars">
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

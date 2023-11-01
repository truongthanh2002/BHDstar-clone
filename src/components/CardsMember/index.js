import imgTitle from "../../assets/images/bg-title-bhd-member.png";
import imgHand from "../../assets/images/img-hand.png";
import imgFinger from "../../assets/images/img--finger.png";
import star from "../../assets/images/STAR.png";
import gold from "../../assets/images/GOLD.png";
import diamond from "../../assets/images/DIAMOND.png";
import "./style.css";

import { Link } from "react-router-dom";

const CardsMember = () => {
  
  return (
    <div className="container">
      <img className="img-title" src={imgTitle} alt="imgTitle" />
      <div className="card--holder">
        <img alt="hand" className="img--hand" src={imgHand} />
        <img alt="finger" className="img--finger" src={imgFinger} />
      </div>
      <div className="list--card-member">
        <ul className="cards-member">
          <li className="card">
            <a title="STAR" href="/">
              <img className="img--card-member" src={star} alt="star" />
            </a>
          </li>
          <li className="card">
            <a title="GOLD" href="/">
              <img className="img--card-member" src={gold} alt="gold" />
            </a>
          </li>
          <li className="card">
            <a title="DIAMOND" href="/">
              <img className="img--card-member" src={diamond} alt="diamond" />
            </a>
          </li>
        </ul>
      </div>
      <Link className="btn-white" to="/dang-ky">
        ĐĂNG KÝ NGAY
      </Link>
    </div>
  );
};

export default CardsMember;

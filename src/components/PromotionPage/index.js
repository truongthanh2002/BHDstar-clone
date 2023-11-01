import React from "react";
import Promotions from "../../data/Promotions";
import "./style.css";

function PromotionInPage() {
  const promotionToShow = Promotions.filter(
    (promotion) =>
      promotion.amount_likes !== "" &&
      promotion.title !== "" &&
      promotion.url !== "" &&
      promotion.status === "1"
  );
  return (
    <>
      {promotionToShow.map((promo) => (
        <li key={promo.id} className="col-md-3 col-sm-6 col-xs-12">
          <div className="news--item">
            <a href="*">
              <img alt="cinema-img" width="270" height="152" src={promo.url} />
            </a>
            <a className="news-title" href="*">
              {promo.title}
            </a>
            <span>{promo.amount_likes}</span>
            <a href="*" className="btn--share">
              Chia sẻ
            </a>
          </div>
        </li>
      ))}
    </>
  );
}

export default PromotionInPage;

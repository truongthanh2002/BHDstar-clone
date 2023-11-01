import React from "react";
import Promotions from "../../data/Promotions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import settings from "./SettingSlick.js";
import "./style.css";

function Event() {
  const event = Promotions.filter((events) => events.status === "2");
  return (
    <div className="container">
      <div className="promotion-1">
        <Slider {...settings}>
          {event.map((event) => (
            <div
              className="img--promo"
              key={event.id}
              style={{
                width: "430px",
                marginRight: "24px",
                float: "left",
                display: "block",
              }}
            >
              <a href="*">
                <img alt="none" src={event.url} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Event;

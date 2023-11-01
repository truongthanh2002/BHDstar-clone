import React, { useState } from "react";

import Promotion from "../Promotion";
import Event from "../Event";
import "./style.css";

function ListPromotion() {
  const [activeTabPromotion, setActiveTabPromotion] = useState("tabPromo");
  const handleTabPromotion = (tab) => {
    setActiveTabPromotion(tab);
  };
  return (
    <div className="list-promotion">
      <div className="nav--title-promotion">
        <ul className="title-promotion">
          <li>
            <h3
              className={
                activeTabPromotion === "tabPromo" ? "active-promo" : ""
              }
              onClick={() => handleTabPromotion("tabPromo")}
              style={{ cursor: "pointer" }}
            >
              Khuyến Mãi
            </h3>
          </li>
          <li>
            <h3>|</h3>
          </li>
          <li>
            <h3
              className={
                activeTabPromotion === "tabEvent" ? "active-promo" : ""
              }
              onClick={() => handleTabPromotion("tabEvent")}
              style={{ cursor: "pointer" }}
            >
              Sự Kiện
            </h3>
          </li>
        </ul>
        {activeTabPromotion === "tabPromo" ? (
          <div>
            <Promotion />
          </div>
        ) : (
          <div>
            <Event />
          </div>
        )}
      </div>
    </div>
  );
}

export default ListPromotion;

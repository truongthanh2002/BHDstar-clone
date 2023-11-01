import { useState } from "react";

import "./style.css";
import PromotionInPage from "../../components/PromotionPage";
import ListMovie from "../../components/ListMovie/index";
import EventInPage from "../../components/EventInPage";
import Loader from "../../components/Loader";

const PromotionsEvents = ({movies}) => {
  const [tabPromoActived, setTabPromoActived] = useState("tabPromo-1");
  const hanldeTabPromotion = (tabPromo) => {
    setTabPromoActived(tabPromo);
  };

  return (
    <>
      <div className="cinema--background">
        <div className="container-promotion">
          <div className="title--promotion">
            <ul className="title--promotion-text">
              <li>
                <h3
                  href="*"
                  className={
                    tabPromoActived === "tabPromo-1" ? "tabPromoActived" : ""
                  }
                  onClick={() => hanldeTabPromotion("tabPromo-1")}
                  style={{ cursor: "pointer" }}
                >
                  KHUYẾN MÃI
                </h3>
              </li>
              <li>
                <span style={{ fontSize: "31px" }}>|</span>
              </li>
              <li>
                <h3
                  href="*"
                  className={
                    tabPromoActived === "tabPromo-2" ? "tabPromoActived" : ""
                  }
                  onClick={() => hanldeTabPromotion("tabPromo-2")}
                  style={{ cursor: "pointer" }}
                >
                  SỰ KIỆN
                </h3>
              </li>
            </ul>
            {tabPromoActived === "tabPromo-1" ? (
              <>
                <div className="bhd-container-scroll">
                  <ul className="list--promos">
                    <PromotionInPage />
                  </ul>
                </div>
                <Loader />
              </>
            ) : (
              <>
                <div className="warper-content">
                  <div className="page--news cinema--background">
                    <div className="container-cinema">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <ul
                          className="list-events"
                          style={{
                            position: "relative",
                            height: "1329px",
                            width: "1170px",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            gridColumnGap: "30px",
                          }}
                        >
                          <EventInPage />
                        </ul>
                      </div>
                      <Loader />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <ListMovie movies={movies}/>
    </>
  );
};

export default PromotionsEvents;

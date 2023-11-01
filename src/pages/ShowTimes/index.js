import React, { useState } from "react";
import Slider from "react-slick";
import { Link ,useNavigate} from "react-router-dom";

import HoChiMinh from "../../components/Location/hochiminh";
import HaNoi from "../../components/Location/hanoi";
import Hue from "../../components/Location/hue";
import LongKhanh from "../../components/Location/longkhanh";


import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./SettingSlick";
import ListPromotion from "../../components/ListPromotion";

const ShowTimes = ({movies}) => {
  const [activeTab, setActiveTab] = useState("byMovie"); // Ban đầu, tab "LỊCH CHIẾU THEO PHIM" được chọn
  const [activeTheaterTab, setActiveTheaterTab] = useState("tab1");
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
 

  return (
    <>
      <div className="warper-content">
        <div className="showtimes section--product-view">
          <div className="lich-chieu-theo-phim">
            <ul>
              <li className="product--title">
                <h3
                  className={activeTab === "byMovie" ? "active-tab" : ""}
                  onClick={() => handleTabChange("byMovie")}
                >
                  LỊCH CHIẾU THEO PHIM
                </h3>
                <span>|</span>
                <h3
                  className={activeTab === "byTheater" ? "active-tab" : ""}
                  onClick={() => handleTabChange("byTheater")}
                >
                  LỊCH CHIẾU THEO RẠP
                </h3>
              </li>
              {activeTab === "byMovie" ? (
                <div>
                  <Slider {...settings}>
                    {movies.map((movie) => (
                      <div className="card" key={movie.id} onClick={() => {
                        navigate(`/movie/${movie.id}`);
                      }}>
                        <div className="card-top">
                          <img src={movie.thumnail} alt={movie.title} />
                          <p className="title-movie">{movie.title}</p>
                        </div>
                        <div className="card-bottom"></div>
                      </div>
                    ))}
                  </Slider>
                  <div className="border-bottom" id="hastag"></div>
                </div>
              ) : (
                <div>
                  <ul className="list--location">
                    <li>
                      <Link
                        to="#"
                        className={
                          activeTheaterTab === "tab1"
                            ? "active-theater-tab"
                            : ""
                        }
                        onClick={() => setActiveTheaterTab("tab1")}
                      >
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="800px"
                            height="800px"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#000000"
                              d="M12.2426025,1.7573595 C14.5858025,4.1004995 14.5858025,7.8994895 12.2426025,10.2425995 L8.4852825,14 L11,14 C11.5523025,14 12,14.4476995 12,15 C12,15.5522995 11.5523025,16 11,16 L5,16 C4.4477225,16 4,15.5522995 4,15 C4,14.4476995 4.4477225,14 5,14 L7.5147225,14 L3.7573625,10.2425995 C1.4142125,7.8994895 1.4142125,4.1004995 3.7573625,1.7573595 C6.1005025,-0.5857865 9.8994925,-0.5857865 12.2426025,1.7573595 Z M5.1715725,3.1715695 C3.6094825,4.7336695 3.6094825,7.2663295 5.1715725,8.8284295 L8.000005,11.6568995 L10.8284025,8.8284295 C12.3905025,7.2663295 12.3905025,4.7336695 10.8284025,3.1715695 C9.2663325,1.6094795 6.7336725,1.6094795 5.1715725,3.1715695 Z M8.0000025,3.9999995 C9.1045725,3.9999995 10.0000025,4.8954295 10.0000025,5.9999995 C10.0000025,7.1045695 9.1045725,7.9999995 8.0000025,7.9999995 C6.8954325,7.9999995 6.0000025,7.1045695 6.0000025,5.9999995 C6.0000025,4.8954295 6.8954325,3.9999995 8.0000025,3.9999995 Z"
                            />
                          </svg>
                        </i>
                        <img
                          className="img--shadow"
                          alt="shadow"
                          src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/img-shadow.png"
                        />
                        <span>TP HỒ CHÍ MINH</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className={
                          activeTheaterTab === "tab2"
                            ? "active-theater-tab"
                            : ""
                        }
                        onClick={() => setActiveTheaterTab("tab2")}
                      >
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="800px"
                            height="800px"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#000000"
                              d="M12.2426025,1.7573595 C14.5858025,4.1004995 14.5858025,7.8994895 12.2426025,10.2425995 L8.4852825,14 L11,14 C11.5523025,14 12,14.4476995 12,15 C12,15.5522995 11.5523025,16 11,16 L5,16 C4.4477225,16 4,15.5522995 4,15 C4,14.4476995 4.4477225,14 5,14 L7.5147225,14 L3.7573625,10.2425995 C1.4142125,7.8994895 1.4142125,4.1004995 3.7573625,1.7573595 C6.1005025,-0.5857865 9.8994925,-0.5857865 12.2426025,1.7573595 Z M5.1715725,3.1715695 C3.6094825,4.7336695 3.6094825,7.2663295 5.1715725,8.8284295 L8.000005,11.6568995 L10.8284025,8.8284295 C12.3905025,7.2663295 12.3905025,4.7336695 10.8284025,3.1715695 C9.2663325,1.6094795 6.7336725,1.6094795 5.1715725,3.1715695 Z M8.0000025,3.9999995 C9.1045725,3.9999995 10.0000025,4.8954295 10.0000025,5.9999995 C10.0000025,7.1045695 9.1045725,7.9999995 8.0000025,7.9999995 C6.8954325,7.9999995 6.0000025,7.1045695 6.0000025,5.9999995 C6.0000025,4.8954295 6.8954325,3.9999995 8.0000025,3.9999995 Z"
                            />
                          </svg>
                        </i>
                        <img
                          className="img--shadow"
                          alt="shadow"
                          src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/img-shadow.png"
                        />
                        <span>TP HÀ NỘI</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className={
                          activeTheaterTab === "tab3"
                            ? "active-theater-tab"
                            : ""
                        }
                        onClick={() => setActiveTheaterTab("tab3")}
                      >
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="800px"
                            height="800px"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#000000"
                              d="M12.2426025,1.7573595 C14.5858025,4.1004995 14.5858025,7.8994895 12.2426025,10.2425995 L8.4852825,14 L11,14 C11.5523025,14 12,14.4476995 12,15 C12,15.5522995 11.5523025,16 11,16 L5,16 C4.4477225,16 4,15.5522995 4,15 C4,14.4476995 4.4477225,14 5,14 L7.5147225,14 L3.7573625,10.2425995 C1.4142125,7.8994895 1.4142125,4.1004995 3.7573625,1.7573595 C6.1005025,-0.5857865 9.8994925,-0.5857865 12.2426025,1.7573595 Z M5.1715725,3.1715695 C3.6094825,4.7336695 3.6094825,7.2663295 5.1715725,8.8284295 L8.000005,11.6568995 L10.8284025,8.8284295 C12.3905025,7.2663295 12.3905025,4.7336695 10.8284025,3.1715695 C9.2663325,1.6094795 6.7336725,1.6094795 5.1715725,3.1715695 Z M8.0000025,3.9999995 C9.1045725,3.9999995 10.0000025,4.8954295 10.0000025,5.9999995 C10.0000025,7.1045695 9.1045725,7.9999995 8.0000025,7.9999995 C6.8954325,7.9999995 6.0000025,7.1045695 6.0000025,5.9999995 C6.0000025,4.8954295 6.8954325,3.9999995 8.0000025,3.9999995 Z"
                            />
                          </svg>
                        </i>
                        <img
                          className="img--shadow"
                          alt="shadow"
                          src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/img-shadow.png"
                        />
                        <span>TP HUẾ</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className={
                          activeTheaterTab === "tab4"
                            ? "active-theater-tab"
                            : ""
                        }
                        onClick={() => setActiveTheaterTab("tab4")}
                      >
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="800px"
                            height="800px"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#000000"
                              d="M12.2426025,1.7573595 C14.5858025,4.1004995 14.5858025,7.8994895 12.2426025,10.2425995 L8.4852825,14 L11,14 C11.5523025,14 12,14.4476995 12,15 C12,15.5522995 11.5523025,16 11,16 L5,16 C4.4477225,16 4,15.5522995 4,15 C4,14.4476995 4.4477225,14 5,14 L7.5147225,14 L3.7573625,10.2425995 C1.4142125,7.8994895 1.4142125,4.1004995 3.7573625,1.7573595 C6.1005025,-0.5857865 9.8994925,-0.5857865 12.2426025,1.7573595 Z M5.1715725,3.1715695 C3.6094825,4.7336695 3.6094825,7.2663295 5.1715725,8.8284295 L8.000005,11.6568995 L10.8284025,8.8284295 C12.3905025,7.2663295 12.3905025,4.7336695 10.8284025,3.1715695 C9.2663325,1.6094795 6.7336725,1.6094795 5.1715725,3.1715695 Z M8.0000025,3.9999995 C9.1045725,3.9999995 10.0000025,4.8954295 10.0000025,5.9999995 C10.0000025,7.1045695 9.1045725,7.9999995 8.0000025,7.9999995 C6.8954325,7.9999995 6.0000025,7.1045695 6.0000025,5.9999995 C6.0000025,4.8954295 6.8954325,3.9999995 8.0000025,3.9999995 Z"
                            />
                          </svg>
                        </i>
                        <img
                          className="img--shadow"
                          alt="shadow"
                          src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/img-shadow.png"
                        />
                        <span>TP LONG KHÁNH</span>
                      </Link>
                    </li>
                  </ul>
                  {activeTheaterTab === "tab1" && (
                    <div>
                      <ul className="list--info">
                        <HoChiMinh />
                      </ul>
                    </div>
                  )}
                  {activeTheaterTab === "tab2" && (
                    <div>
                      {" "}
                      <ul className="list--info">
                        <HaNoi />
                      </ul>
                    </div>
                  )}
                  {activeTheaterTab === "tab3" && (
                    <div>
                      {" "}
                      <ul className="list--info">
                        <Hue />
                      </ul>
                    </div>
                  )}
                  {activeTheaterTab === "tab4" && (
                    <div>
                      {" "}
                      <ul className="list--info">
                        <LongKhanh />
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </ul>
          </div>
        </div>
        <div className="section--promotion">
          <ListPromotion />
        </div>
      </div>
    </>
  );
};

export default ShowTimes;

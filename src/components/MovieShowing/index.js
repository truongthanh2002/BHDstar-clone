import React from "react";
import Slider from "react-slick";
import { GiTicket } from "react-icons/gi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import settings from "./SettingSlick";
import "./style.css";

const MovieShowing = ({ movies }) => {
  const navigate = useNavigate();
  const showing = movies.filter(
    (movieShowing) => movieShowing.status === "active"
  );
  return (
    <Slider {...settings}>
      {showing.map((movie) => (
        <div className="card" key={movie.id}>
          <div
            className="card-top"
            onClick={() => {
              navigate(`/movie/${movie.id}`);
            }}
          >
            <img src={movie.thumnail} alt={movie.title} />
            <p className="title-movie">{movie.title}</p>
          </div>
          <div className="card-bottom">
            <button
              to="#"
              className="btn-antd"
              
              onClick={() => {
                navigate(`/movie/${movie.id}`);
              }}
            >
              <GiTicket />
              Mua vé
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MovieShowing;

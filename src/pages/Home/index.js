import React from "react";
import { useEffect } from "react";

import ListMovie from "../../components/ListMovie";
import CardsMember from "../../components/CardsMember";
import Banner from "./component/Banner";
import ListPromotion from "../../components/ListPromotion";

import "./style.css";

const Home = ({movies}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Banner />
      <div className="section--product-view">
        <ListMovie movies={movies} />
      </div>
      <div className="section--member">
        <CardsMember />
      </div>
      <div className="section--promotion">
        <ListPromotion />
      </div>
    </div>
  );
};

export default Home;
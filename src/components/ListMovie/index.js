import "./style.css";
import MovieShowing from "../MovieShowing";
import UpComingMoive from "../UpcomingMovie";
import PreSaleTickets from "../PreSaleTickets";

import { useState } from "react";


const ListMovie = ({movies}) => {
  const [active , setActive] = useState("active")
  
  return (
    <div className="list-movie">
      <nav>
        <ul className="nav--titles">
          <li>
            <h3
              onClick={() => setActive("active")}
              className={active === "active" ? "active-link" : ""}
            >
              Phim Đang Chiếu
            </h3>
          </li>
          <li>
            <h3
              onClick={() => setActive("comingsoon")}
              className={active === "comingsoon" ? "active-link" : ""}
            >
              Phim Sắp Chiếu
            </h3>
          </li>
          <li className="presaleticket">
            <h3
              onClick={() => setActive("presaletickets")}
              className={active === "presaletickets" ? "active-link" : ""}
            >
              Vé Bán Trước
            </h3>
          </li>
        </ul>
      </nav>
      {active === "active" && <MovieShowing  movies={movies}/>}
      {active === "comingsoon" && <UpComingMoive movies={movies}/>}
      {active === "presaletickets" && <PreSaleTickets movies={movies}/>}
    </div>
  )
};

export default ListMovie;

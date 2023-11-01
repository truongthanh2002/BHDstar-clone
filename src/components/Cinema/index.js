import React from "react";
import { Link } from "react-router-dom";


import "./style.css";

function Cinama({theaters}) {
  
  return (
    <>
      {theaters.map((cinema) => (
        <li key={cinema.id} className="col-md-3 col-sm-6 col-xs-12">
          <div className="news--item">
            <Link to={`/he-thong-rap/${cinema.href}`}>
              <img alt="cinema-img" width="243" height="330" src={cinema.img} />
            </Link>
            <Link className="news-title" to={`/he-thong-rap/${cinema.href}`}>
              {cinema.name}
            </Link>
            <div className="like-share">
            <span>{cinema.amount_like}</span>
            <Link href="#" className="btn--share">
              Chia sẻ
            </Link>
            </div>
            
          </div>
        </li>
      ))}
    </>
  );
}

export default Cinama;

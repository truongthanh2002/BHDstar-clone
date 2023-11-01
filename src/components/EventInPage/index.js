import React from "react";

import Promotions from "../../data/Promotions";

import "./style.css";

function EventInPage() {
  const eventToShow = Promotions.filter(
    (event) =>
      event.amount_likes !== "" &&
      event.url !== "" &&
      event.title !== "" &&
      event.status === "show"
  );
  return (
    <>
      {eventToShow.map((events) => (
        <li key={events.id} className="col-md-3 col-sm-6 col-xs-12">
          <div className="news--item">
            <a href="*">
              <img alt="cinema-img" width="221" height="330" src={events.url} />
            </a>
            <a className="news-title" href="*">
              {events.title}
            </a>
            <span>{events.amount_likes}</span>
            <a href="*" className="btn--share">
              Chia sẻ
            </a>
          </div>
        </li>
      ))}
    </>
  );
}

export default EventInPage;

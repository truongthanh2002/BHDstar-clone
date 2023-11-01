import Cinama from "../../components/Cinema";
import ListMovie from "../../components/ListMovie";
import "./style.css";

import { useEffect } from "react";

const Cinema = ({movies ,theaters}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="warper-content">
      <div className="page--news cinema--background">
        <div className="container-cinema">
          <h1 className="about--us-title-title">HỆ THỐNG RẠP</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ul
              className="list--news"
              style={{
                position: "relative",
                height: "1329px",
                width: "1170px",
              }}
            >
              <Cinama theaters={theaters}/>
            </ul>
          </div>
        </div>
      </div>
      <div className="cinema-listmovie">
        <ListMovie movies={movies} />
      </div>
    </div>
  );
};

export default Cinema;

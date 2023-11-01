import BHD_Cinema from "./image/BHD_Cinema.png";
import "./style.css"

import React, { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    return () => {
      document.title = "CI87 - BHD STAR CINEPLEX - HỆ THỐNG RẠP CHIẾU PHIM HIỆN ĐẠI";
    };
  }, []);

  useLayoutEffect(() => {
    document.title = "CI87 - Error Page";
  }, []);

  return (
    <div className="error">
      <div className="box-error">
        <img src={BHD_Cinema} alt="BHD_Cinema" className="img-logo_bhd" />
        <h1 className="text-title">404. That's an error</h1>
        <h2 className="text-error">Page not found</h2>
        <p className="text-error">
        Rất tiếc đường dẫn <strong className="pathname">{window.location.pathname}</strong> không được tìm thấy. 
        </p>
        <p className="text-error">Trang bạn đang tìm kiếm không tồn tại hoặc đã xảy ra lỗi khác.</p>
        <p className="text-error">
       Vui lòng quay trở lại, hoặc đi đến <Link to="/" className="error-link"><strong>ci87app.netlify.app</strong></Link> để đi đến trang khác.
        </p>
        <button type="button" title="go back" className="error-button" onClick={()=>window.history.back()}>QUAY LẠI</button>
      </div>
      
    </div>
  );
};

export default Error;

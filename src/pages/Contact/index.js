import React from "react";
import SideLocationCinema from "../../components/SideLocationCinema";

function Contact({theaters}) {
  return (
    <div className="warper-content">
      <div className="page--wrapper">
        <div className="container">
          <h1 className="about--us-title">LIÊN HỆ</h1>
          <div className="about--us-content">
            <div className="text--content">
              <p>
                <strong>Mọi thông tin liên hệ vui lòng gửi về:</strong>
              </p>
              <p>
                <strong>VĂN PHÒNG CHÍNH&nbsp;</strong>
              </p>
              <div className="page" title="Page 1">
                <div className="section">
                  <div className="layoutArea">
                    <div className="column">
                      <p>
                        Tầng 11, Toà nhà Hồng Hà Building, 25 Lý Thường Kiệt,
                        Phường Phan Chu Trinh, Quận Hoàn Kiếm, Hà Nội
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <strong>VĂN PHÒNG CHI NHÁNH PHÍA NAM&nbsp;</strong>
              </p>
              <p>
                Tầng 5, Vincom Megamall Thảo Điền, 159 Xa Lộ Hà Nội, Phường Thảo
                Điền, TP.Thủ Đức, TP.Hồ Chí Minh
              </p>
              <p>
                Số điện thoại: 19002099&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;Email:&nbsp;cskh@bhdstar.vn
              </p>
            </div>
            <div className="tag--list">
              <i className="fa fa-tags"></i>
            </div>
            <div className="button--share">
              <a href="*" className="btn--fb-share">
                <i className="fa fa-facebook"></i>
                Chia sẻ
              </a>
            </div>
          </div>
          <div className="about--us-sidebar">
            <SideLocationCinema theaters={theaters}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

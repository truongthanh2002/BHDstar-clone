import BackTopTopButton from "../BackTopTopButton";
import "./style.css";

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-logo">
          <img
            src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="container">
          <div className="footer_row-left">
            <h3 className="title">về bhd star</h3>
            <div className="menu-intro">
              <ul>
                <li><Link to="/he-thong-rap">hệ thống rạp</Link></li>
                <li><Link to="/lien-he">liên hệ</Link></li>
                <li><Link to="/quang-cao">quảng cáo</Link></li>
              </ul>
              <Link to="http://online.gov.vn/Home/WebDetails/46605" target="_blank">
                <img
                  alt="bocongthuong"
                  style={{ width: "150px" }}
                  src="https://www.bhdstar.vn/wp-content/uploads/2020/02/dathongbao-1.png"
                />
              </Link>
            </div>
          </div>
          <div className="footer_row-right">
            <h3 className="title">quy định & điều khoản</h3>
            <div className="menu-rules">
              <ul>
                <li><Link to="/quy-dinh-thanh-vien">Quy định thành viên</Link></li>
                <li><Link to="/dieu-khoan">Điều khoản</Link></li>
               
                
                <li><Link to="/bao-mat-thong-tin">Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_copyright">
          <p>© 2015 BHD Star Cineplex</p>
        </div>
      </footer>

      <BackTopTopButton />
    </>
  );
};

export default Footer;

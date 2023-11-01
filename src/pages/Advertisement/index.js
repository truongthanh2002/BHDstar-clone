import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";

import SideLocationCinema from "../../components/SideLocationCinema";
import "./style.css";

const Advertisement = ({theaters}) => {
  const shareUrl = "https://www.facebook.com/sharer/sharer.php?u=https://ci87-bhdstar.netlify.app/"



  return (
    <div className="warper-content advertisement">
      <div className="page--wrapper">
        <div className="container">
          <h1 className="about--us-title">DỊCH VỤ QUẢNG CÁO</h1>
          <div className="about--us-content">
            <div className="text--content">
              <p>Thông tin về dịch vụ quảng cáo</p>
              <p>
                <strong>BHD Star Cineplex</strong> đang trở thành điểm đến mới
                mẻ và cực kỳ tiện lợi cho những khách hàng có nhu cầu quảng cáo
                sản phẩm và tổ chức sự kiện. Với lượng khán giả thường xuyên rất
                đông đảo, đặc biệt là các ngày lễ và cuối tuần, việc quảng cáo
                sản phẩm qua các TVC trước giờ chiếu phim hay tại các LCD sảnh
                đã trở nên một công cụ không thể thiếu trong media mix của nhiều
                công ty trong nhiều lĩnh vực. Ngoài TVC, các sảnh rạp cũng là
                một không gian lý tưởng cho việc phát sampling, đặt các booth
                hoặc tủ trưng bày, để khán giả quan tâm và tìm hiểu trực tiếp,
                thậm chí tương tác với sản phẩm của mình.
              </p>
              <p>
                Các phòng chiếu được thiết kế rộng rãi, màn hình và âm thanh
                chuẩn, các hàng ghế sắp xếp từ thấp đến cao, hoàn toàn phù hợp
                cho việc tổ chức các hội nghị, hội thảo hay họp mặt cho đông
                người. Việc tổ chức này có thể được thực hiện qua cách thuê
                phòng chiếu trực tiếp hoặc mua vé số lượng lớn, và đều được áp
                dụng mức chiếu khấu cực kỳ hấp dẫn.
              </p>
              <ul>
                <li>Quảng cáo: TVC, POSM, Booth…</li>
                <li>Thẻ quà tặng, phiếu quà tặng</li>
                <li>Thuê phòng chiếu làm sự kiện / xem phim</li>
                <li>Vé số lượng lớn</li>
              </ul>
              <p>Hãy liên hệ ngay với chúng tôi hôm nay:</p>
              <ul>
                <li>
                  <strong>Địa chỉ</strong>: Tầng 5, Vincom Megamall, 159 Xa lộ
                  Hà Nội, P.Thảo Điền, Q.2, TPHCM
                </li>
                <li>
                  <strong>Điện thoại</strong>: 08 62 670670
                </li>
                <li>
                  <strong>E-Mail:</strong> sales@bhdstar.vn
                </li>
              </ul>
            </div>
            <div className="tag--list">
              <i className="fa fa-tags"></i>
            </div>
            <div className="button--share">
              <Link to={shareUrl} target="_blank" className="btn--fb-share">
                <FaFacebookF/>
                Chia sẻ
              </Link>
            </div>
          </div>
          <div className="about--us-sidebar">
            <SideLocationCinema theaters={theaters}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;

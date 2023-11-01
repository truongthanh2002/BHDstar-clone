import React from "react";
import { useParams ,Link} from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";

import SideLocationCinema from "../../components/SideLocationCinema";
import ListPromotion from "../../components/ListPromotion";

const TheaterDetail =({theaters}) =>{
  const { slug } = useParams();
  const theater = theaters.find((t) => t.href === slug);
  const shareUrl = "https://www.facebook.com/sharer/sharer.php?u=https://ci87-bhdstar.netlify.app/"

  if (!theater) {
    return <div>Rạp không tồn tại</div>;
  }

  return (
    <div className="warper-content">
      <div className="page-wrapper">
        <div className="container">
          <h1 className="about--us-title">HỆ THỐNG RẠP</h1>
          <div className="about--us-content">
            <h3 className="content--title">{theater.name}</h3>
            <div className="text--content">
              <ul>
                <li className="left">
                  <strong>Địa điểm:</strong>
                  <span className="">{theater.address}</span>
                </li>
                <li className="left">
                  <strong>Số điện thoại:</strong>
                  {theater.phone}
                </li>
                <li className="left">
                  <strong>Email:</strong>
                  {theater.email}
                </li>
                <li className="left">
                  <strong>Phòng chiếu:</strong>
                  {theater.phongChieu}
                </li>
              </ul>
              <p>
                <img
                  alt="ticket-img"
                  className="alignnone size-full wp-image-44596"
                  src={theater.ticketPrice}
                  width={1920}
                  height={1080}
                />
              </p>
              <p>
                <img
                  alt="Fticket-img"
                  className="alignnone wp-image-44732 size-full"
                  src={theater.fTicketPrice}
                  width={1920}
                  height={1080}
                />
              </p>
              <p>
                <strong>CÁC QUY ĐỊNH GIÁ VÉ</strong>
              </p>
              <p>
                – Giá vé trẻ em áp dụng cho trẻ em có chiều cao dưới 1,3m. Yêu
                cầu trẻ em có mặt khi mua vé. Trẻ em dưới 0,7m sẽ được miễn phí
                vé khi mua cùng 01 vé người lớn đi kèm theo. Không áp dụng kèm
                với chương trình khuyến mãi ưu đãi về giá vé khác.
                <br />
                – Giá vé thành viên U22 chỉ áp dụng cho thành viên dưới 22 tuổi
                khi mua vé. Không áp dụng kèm với chương trình khuyến mãi ưu đãi
                về giá vé khác. Mỗi thẻ thành viên U22 được áp dụng giá vé ưu
                đãi tối đa 02 vé/ngày.
                <br />
                – Ngày lễ: 1/1, Giổ Tổ Hùng Vương 10/3 Âm Lịch, 30/4, 1/5, 02
                Ngày Lễ Quốc Khánh
                <br />
                – Giá vé Tết Âm Lịch sẽ được áp dụng riêng.
                <br />– Suất chiếu đặc biệt áp dụng giá vé theo khung giờ của
                ngày. Không áp dụng các giá vé ưu đãi dành cho U22, Privilege
                Voucher/Staff Voucher, Happy Day. Trong trường hợp Suất chiếu
                đặc biệt cùng ngày với Happy Day sẽ áp dụng giá vé của Thứ 3
              </p>
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
            <SideLocationCinema theaters={theaters} />
          </div>
        </div>
      </div>
      <div className="section--promotion">
        <ListPromotion />
      </div>
    </div>
  );
}

export default TheaterDetail;

import "./style.css";
import ListPromotion from "../ListPromotion";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const RegulationMember = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="regulation-member">
      <div className="regulation-content-member">
      <h3>1. cách thức đăng ký tài khoản</h3>
      <p>
        Khách hàng có thể đăng ký tài khoản thành viên miễn phí tại{" "}
        <Link to="/dang-ky">www.bhdstar.vn/dang-ky</Link> hoặc trên ứng dụng di
        động BHD Star (iOS hoặc Android)
      </p>

      <p>
        Vui lòng kiểm tra và đảm bảo thông tin cá nhân chính xác trước khi hoàn
        tất đăng ký tài khoản. Tất cả thông tin ngoại trừ mật khẩu sẽ không thể
        chỉnh sửa sau khi đăng ký.
      </p>
      <p>
        Nếu có nhu cầu điều chỉnh thông tin cá nhân, quý khách vui lòng gửi
        email bằng địa chỉ đã đăng ký thành viên đến{" "}
        <Link to="mailto:cskh@bhdstar.vn">cskh@bhdstar.vn</Link> để được hỗ trợ.
      </p>
      <p>Tài khoản thành viên có thể sử dụng ngay sau khi đăng ký.</p>

      <h3>2. quy định và quyền lợi về cấp bậc thành viên</h3>
      <p>
        BHD Star xếp hạng thành viên dựa trên số lần mua vé (sau đây gọi là
        Visit) trong vòng 01 năm kể từ ngày đăng ký tài khoản
      </p>
      <p>
        Cấp bậc thành viên được duy trì trong vòng 12 tháng tính từ ngày cập
        nhật cấp bậc.
      </p>
      <p>
        BHD Star sẽ xét lại cấp bậc thành viên sau 12 tháng dựa trên số Visit
        tích lũy được trong 12 tháng trước đó.
      </p>
      <div>
      <img
        src="https://www.bhdstar.vn/wp-content/uploads/2022/06/unknown.jpg"
        alt="bhd-star"
      />
      </div>
      
      <h3>3. quy định về điểm thưởng</h3>
      <p>
        Với mỗi giao dịch phát sinh có dùng tài khoản thành viên bao gồm giao
        dịch mua vé hoặc mua bắp, nước… (trực tiếp tại rạp hoặc giao dịch
        online), khách hàng thành viên sẽ được tích luỹ được điểm thưởng (RP).
      </p>
      <h4>3.1 Cách thức tích lũy RP</h4>
      <div>
      <img
        src="https://www.bhdstar.vn/wp-content/uploads/2022/06/1__@__unknown.jpg"
        alt="bhd-star"
      />
      </div>
      
      <p>Ví dụ: Với giao dịch 100,000VNĐ bạn sẽ tích lũy được:</p>
      <p>Hạng Star: 10 RP</p>
      <p>Hạng Gold: 12.5 RP</p>
      <p>Hạng Diamond: 15 RP</p>
      <h4>3.2 Quà tặng có thể đổi được từ RP</h4>
      <div>
      <img
        src="https://www.bhdstar.vn/wp-content/uploads/2022/07/Qua%CC%80-ta%CC%A3%CC%86ng-RP.jpg"
        alt="bhd-star"
      />
      </div>
      
      <h4>3.3 Quy định chung</h4>
      <p>
        Điểm thưởng sẽ không thể quy đổi thành tiền mặt hoặc chuyển nhượng sang
        cho tài khoản khác.
      </p>
      <p>Quà thưởng sau khi đã đổi sẽ không thể đổi hoặc trả.</p>
      <p>
        Khách hàng thành viên chỉ có thể đổi quà thưởng và hưởng ưu đãi khi xuất
        trình tài khoản.
      </p>
      <h3>4. quy định về quà tặng sinh nhật</h3>
      <h4>4.1 Cách thức nhận quà</h4>
      <p>
        Thời gian nhận quà sinh nhật dành cho khách hàng Gold và Diamond: trong
        tháng sinh nhật.
      </p>
      <p>
        Khách hàng Gold và Diamond cần xuất trình tài khoản thành viên và giấy
        tờ tùy thân để nhận quà trực tiếp tại rạp. Quà tặng không thể chuyển
        nhượng hoặc nhận quà thay.
      </p>
      <p>
        Quà tặng sinh nhật chỉ có giá trị sử dụng trong ngày khách hàng đến nhận
        quà tặng.
      </p>
      <p>
        Chỉ áp dụng xuất vé và combo trực tiếp, không thể xuất voucher thay thế
        để sử dụng lần sau.
      </p>
      <h4>4.2 Quy định về vé tặng sinh nhật</h4>
      <p>Áp dụng cho suất chiếu 2D (hoặc 3D) tùy thuộc vào hạng thành viên.</p>
      <p>
        Áp dụng cho vé đơn 2D (Standard hoặc VIP), không áp dụng cho ghế đôi,
        ghế sofa.
      </p>
      <p>
        Không áp dụng quy đổi vé của các suất chiếu đặc biệt, suất chiếu sớm và
        Lễ/ Tết.
      </p>
      <p>
        Không áp dụng quy đổi vé của các suất chiếu phòng chiếu Onyx, Deluxe
        hoặc First Class.
      </p>
      <h3>5. lưu ý khác</h3>
      <p>
        Khách hàng thành viên phải xuất trình tài khoản thành viên trước khi
        thanh toán tại quầy vé và đồ ăn thức uống để được tích điểm.
      </p>
      <p>
        Khi mua vé online trên website hoặc ứng dụng di động BHD Star, vui lòng
        đăng nhập thành viên trước khi chọn phim hoặc suất chiếu để được tích
        điểm.
      </p>
      <p>
        BHD Star Cineplex có quyền thay đổi bất kỳ điều khoản nào và sẽ có thông
        báo chi tiết trên website, tại rạp và email cá nhân cho khách hàng trước
        ngày chính thức áp dụng thay đổi.
      </p>
      <p>
        Mọi thắc mắc liên quan đến tài khoản thành viên, khách hàng vui lòng
        liên hệ hotline 1900 2099 hoặc email cskh@bhdstar.vn để được hỗ trợ.
      </p>
    </div>
    <ListPromotion />
    </div>
    
  );
};

export default RegulationMember;

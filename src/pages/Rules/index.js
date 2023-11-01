import "./style.css";
import SideLocationCinema from "../../components/SideLocationCinema";

import { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Rules = ({ theaters }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shareUrl = "https://www.facebook.com/sharer/sharer.php?u=https://ci87-bhdstar.netlify.app/"

  return (
    <div className="rules">
      <div className="rule-title">
        <h2>điều khoản</h2>
      </div>
      <div className="rule-content">
        <div className="rule-content-left">
          <div className="item-text">
            <p>
              Chào mừng bạn đến với website <span>BHD Star Cineplex</span>{" "}
              www.bhdstar.vn. Để sử dụng website này, vui lòng đọc kỹ những điều
              khoản sử dụng này một cách cẩn thận và đồng ý với những thỏa thuận
              dưới đây.
            </p>
            <p>Nếu bạn không đồng ý, xin vui lòng không sử dụng website.</p>
          </div>
          <div className="item-text">
            <strong>1. Rủi ro cá nhân khi truy cập</strong>
            <p>
              Khi truy cập vào trang web này bạn chấp thuận và đồng ý với việc
              có thể gặp một số rủi ro và đồng ý rằng BHD Star Cineplex cũng như
              các bên liên kết chịu trách nhiệm xây dựng trang web này sẽ không
              chịu trách nhiệm pháp lý cho bất cứ thiệt hại nào đối với với bạn
              dù là trực tiếp, đặc biệt, ngẫu nhiên, hậu quả để lại, bị phạt hay
              bất kỳ mất mát, phí tổn hoặc chi phí có thể phát sinh trực tiếp
              hay gián tiếp qua việc sử dụng hoặc chuyển tải dữ liệu từ trang
              web này, bao gồm nhưng không giới hạn bởi tất cả những ảnh hưởng
              do virus, tác động hoặc không tác động đến hệ thống máy vi tính,
              đường dây điện thoại, phá hỏng ổ cứng hay các phần mềm chương
              trình, các lỗi kỹ thuật khác gây cản trở hoặc trì hoãn việc truyền
              tải qua máy vi tính hoặc kết nối mạng.
            </p>
          </div>
          <div className="item-text">
            <strong>2. Ngưng cấp quyền sử dụng</strong>
            <p>
              Các thành viên tham gia BHD Star Cineplex sẽ bị Ngưng cấp quyền sử
              dụng dịch vụ (xoá nội dung, lock nick, xoá nick) mà không được báo
              trước nếu vi phạm một trong những điều sau:
            </p>
            <ul className="item-text-ul--style">
              <li>
                Đăng tải những nội dung mang tính khiêu dâm, đồi truỵ, tục tĩu,
                phỉ báng, hăm doạ người khác, vi phạm pháp luật hoặc dẫn tới
                hành vi phạm pháp.
              </li>
              <li>Spam dưới mọi hình thức tại trang web BHD Star Cineplex.</li>
              <li>Vi phạm các quy định khác của BHD Star Cineplex</li>
            </ul>
            <p>
              BHD Star Cineplex sẽ không chịu trách nhiệm hay có nghĩa vụ gì đối
              với các nội dung đó, và sẽ hợp tác hết mình với cơ quan luật pháp
              hay tòa án khi có yêu cầu công bố những hành vi đăng tải thông tin
              và dữ liệu trái phép này.
            </p>
          </div>
          <div className="item-text">
            <strong>3. Nội dung</strong>
            <p>
              Các thông tin trong trang web này được cung cấp “như đã đăng tải”
              và không kèm theo bất kỳ cam kết nào. Ban quản trị BHD Star
              Cineplex không bảo đảm hay khẳng định sự đúng đắn, tính chính xác,
              độ tin cậy hay bất cứ chuẩn mực nào trong việc sử dụng dữ liệu hay
              kết qủa của việc sử dụng dữ liệu trên trang web này. Mặc dù BHD
              Star Cineplex luôn cố gắng đảm bảo rằng tất cả nội dung trong
              trang web này đều được cập nhật, chúng tôi không cam kết rằng
              những thông tin được đề cập còn đang hiện hành, chính xác và hoàn
              chỉnh. Mọi thành viên, khi sử dụng một trong các chức năng sau của
              BHD Star Cineplex, cần ý thức rằng những hành động của mình cần
              phải hoàn toàn phù hợp với luật dân sự và luật bản quyền hiện hành
              và chịu trách nhiệm trước pháp luật đối với nội dung mình đưa lên.
            </p>
          </div>
          <div className="item-text">
            <strong>4. Bản quyền</strong>
            <p>
              Là một trang web về điện ảnh, chúng tôi ý thức rõ ràng về việc tôn
              trọng bản quyền của các tác giả, tác phẩm, các sản phẩm trí tuệ về
              điện ảnh. BHD Star Cineplex luôn cố gắng đảm bảo rằng tất cả nội
              dung trên trang web hoặc liên quan đến thương hiệu BHD Star
              Cineplex đều hợp pháp, nhưng chúng tôi không cam kết chắc chắn
              rằng có thể kiểm soát mọi thông tin trên trang web. Bất kỳ hành vi
              xâm phạm đến bản quyền nào nếu bị phát hiện sẽ bị Ban quản trị gỡ
              bỏ khỏi trang web trong thời gian sớm nhất.
            </p>
          </div>
          <div className="item-text">
            <strong>5. Sở hữu trí tuệ</strong>
            <p>
              Mọi nội dung được đăng tải trên BHD Star Cineplex, bao gồm thiết
              kế, logo, các phần mềm, chức năng kỹ thuật, các , hình ảnh, cấu
              trúc trang đều thuộc bản quyền của BHD Star Cineplex và công ty sở
              hữu trang web này. Nghiêm cấm mọi sao chép, sửa đổi, trưng bày,
              phân phát, chuyển tải, tái sử dụng thông qua công nghệ, xuất bản,
              bán, cấp phép, tái tạo hay sử dụng bất cứ nội dung nào của trang
              web cho bất kỳ mục đích nào mà không có sự xác nhận bằng văn bản
              của Ban quản trị BHD Star Cineplex hoặc/và công ty sở hữu.
            </p>
          </div>
          <div className="item-text">
            <strong>6. Sử dụng thông tin</strong>
            <p>
              Khi vào trang web này là bạn đã thừa nhận và đồng ý rằng mọi thông
              tin hay dữ liệu mà bạn chuyển đến trang web này dưới bất kỳ hình
              thức nào, vì vì bất kỳ lý do gì, sẽ trở thành tài sản của BHD Star
              Cineplex và công ty sở hữu BHD Star Cineplex. Những thông tin này
              sẽ được BHD Star Cineplex và công ty chủ sở hữu BHD Star Cineplex
              sử dụng trong quá trình phát triển sản phẩm, phát triển thương
              hiệu, kinh doanh sản phẩm và các hoạt động khác. Chúng tôi cam kết
              sẽ không chia sẻ những thông tin cá nhân (bao gồm: thông tin lý
              lịch, email, mật khẩu) của thành viên cho bên thứ ba nào khác mà
              không có sự đồng ý của thành viên đó. Người dùng BHD Star Cineplex
              được phép sử dụng để chia sẻ trên mạng, với điều kiện phải ghi rõ
              nguồn tham khảo và chủ sở hữu thông tin.
            </p>
          </div>
          <div className="item-text">
            <strong>7. Sửa đổi</strong>
            <p>
              BHD Star Cineplex có quyền thay đổi, bổ sung, thêm hoặc bớt nội
              dung trang web cũng như các điều khoản sử dụng vào bất cứ lúc nào.
            </p>
          </div>
          <div className="item-text">
            <strong>8. Kết nối với các trang web khác </strong>
            <p>
              Mặc dù trang web này có thể kết nối với các trang web khác, điều
              đó không có nghĩa là BHD Star Cineplex trực tiếp hay gián tiếp
              tham gia vào việc phê chuẩn, hợp tác, tài trợ, chứng thực hay kết
              nạp các trang web đó, trừ khi được công bố chính thức. Khi truy
              cập vào trang web này là bạn đã thừa nhận và đồng ý rằng BHD Star
              Cineplex không kiểm soát tất cả các trang web liên kết, và BHD
              Star Cineplex không chịu trách nhiệm về nội dung của bất kỳ trang
              web ngoại lai nào, hay bất kỳ trang web nào có liên kết với trang
              web này.
            </p>
          </div>
        </div>
        <div className="rule-sider-right">
          <SideLocationCinema theaters={theaters} />
        </div>
      </div>
      <div className="rule-footer">
        <div className="tag--list">
          <i className="fa fa-tags"></i>
        </div>
        <div className="button--share">
          <Link to={shareUrl} target="_blank" className="btn--fb-share">
            <FaFacebookF />
            Chia sẻ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rules;

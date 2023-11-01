import "./style.css";
import defaultAvatar from "../../images/avatar.png";
import { updateUser } from "../../../../api/users";
import { handleFormatDate } from "../../../../utils/date";

import React, { useState } from "react";
import axios from "axios";
import { AiFillCamera } from "react-icons/ai";

const InfomationTop = ({ user, isLogin }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [hovered, setHovered] = useState(false);

  const { id, avatar, lastName, fistName, email, dateRegister } = user;

  const date = handleFormatDate(dateRegister)
  
  const API_URL =
    "https://api.imgbb.com/1/upload?expiration=600&key=23ab0c87fe03eacea40da570cc60dc26";

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(API_URL, formData, {});

      const imageUrl = response.data.data.url;

      const avatarLink = {
        avatar: imageUrl,
      };

      updateUser(id, avatarLink);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <div className="info-top-title">
        <p>
          "Hi ! <strong>{`${fistName} ${lastName}`}</strong>
        </p>
        <p>
          Từ bảng thông tin tài khoản, bạn có thể xem bản sao các hoạt động của
          tài khoản bạn trong thời gian gần đây và cập nhật thông tin tài khoản
          của bạn. Chọn liên kết bên dưới để xem hoặc chỉnh sửa thông tin”
        </p>
      </div>
      <div className="info-top">
        <label htmlFor="fileInput">
          <div
            className="image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Avatar"
                className="info-avatar"
              />
            ) : avatar === "" || isLogin === false ? (
              <img src={defaultAvatar} alt="Avatar" className="info-avatar" />
            ) : (
              <img src={avatar} alt="Avatar" className="info-avatar" />
            )}

            {hovered && (
              <span className="text-overlay">
                <AiFillCamera className="icons-camera" /> Đổi avatar
              </span>
            )}
          </div>
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
        <div className="title-info-upload">
          <p>
            Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang 150
            pixel và dọc 200 pixel (dung lượng dưới 1MB)
          </p>
          <h3>
            Username :<span>{email}</span>
          </h3>
          <h3>
            Ngày đăng kí :<span>{date}</span>
          </h3>
          <div className="meta">
            <p className="bonus">Điểm thưởng: <strong>100</strong></p>
            <p className="cost">Tổng chi tiêu: <strong>100000</strong><sup>đ</sup></p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default InfomationTop;

import "./style.css";
import { updateUser } from "../../../../api/users";
import { useInput } from "../../../../hooks/useInput";

import React, { useState } from "react";

const InfomationBottom = ({ user}) => {
  const [editPassword, setEditPassword] = useState(false);
const newPass =useInput()

  const {
    id,
    email,
    ranks,
    fistName,
    lastName,
    phone,
    birthday,
    address,
    location,
  } = user;

  if (!user.location) return;

 const handleUpdatePass = async ()=>{
  const newPassword = {
    password : newPass.value
  }
  try{
    await updateUser(id,newPassword)
    setEditPassword(!editPassword)
  }catch{
    console.error()
  }
 }

  return (
    <div className="info-bottom">
      <form className="infomation-user">
        <label htmlFor="user-email">
          <span>email :</span>
          <input type="text" id="user-email" value={email} autoComplete="username" disabled />
        </label>
        <div className="info-pass">
          <label htmlFor="user-pass" className="pass-user">
            <span>mật khẩu</span>
            <input type="password" id="user-pass" autoComplete="current-password" value="********" disabled />
            <button
              type="button"
              onClick={() => setEditPassword(!editPassword)}
            >
              Edit pass
            </button>
          </label>

          {editPassword && (
            <label htmlFor="user-change-pass" className="chang-pass-user">
              <span>mật khẩu mới</span>
              <input type="password" id="user-change-pass" value={newPass.value} autoComplete="new-password" onChange={newPass.onChange}/>
              <button
                type="button"
                onClick={handleUpdatePass}
              >
                Update pass
              </button>
            </label>
          )}
        </div>

        <label htmlFor="user-fistname">
          <span>họ</span>
          <input type="text" id="user-fistname" value={fistName} disabled />
        </label>
        <label htmlFor="user-lastname">
          <span>tên</span>
          <input type="text" id="user-lastname" value={lastName} disabled />
        </label>
        <label htmlFor="user-ranks">
          <span>ranks</span>
          <input type="text" id="user-ranks" value={ranks} disabled />
        </label>
        <label htmlFor="user-phone">
          <span>số điện thoại</span>
          <input type="text" id="user-phone" value={phone} disabled />
        </label>
        <label htmlFor="user-brithday">
          <span>ngày sinh</span>
          <input type="text" id="user-brithday" value={birthday} disabled />
        </label>
        <label htmlFor="user-address">
          <span>địa chỉ</span>
          <input type="text" id="user-address" value={address} disabled />
        </label>
        <div className="location">
          <p>
            tỉnh/thành phố<span>{location.city}</span>
          </p>
          <p>
            thành phố<span>{location.district}</span>
          </p>
          <p>
            phường/xã<span>{location.wards}</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default InfomationBottom;

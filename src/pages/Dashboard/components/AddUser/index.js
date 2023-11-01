import "./style.css";
import { useInput } from "../../../../hooks/useInput";
import Provinces from "../../../LoginRegister/components/Provinces";
import { creatUser } from "../../../../api/users";
import {
  validateFormatEmail,
  validateFormatPassword,
  validatePhone,
} from "../../../../utils/validate";
import {
  alertError,
  alertSuccess,
  alertWanning,
} from "../../../../utils/alert";

import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AddUser = ({ users, setUsers, admin, setOpenAddUser }) => {
  const [isValid, setIsValid] = useState(true);
  const fistName = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();
  const phone = useInput();
  const birthday = useInput();
  const cityProvince = useInput();
  const districts = useInput();
  const wards = useInput();
  const address = useInput();
  const ranks = useInput("");

  const inputRef = useRef(null);

  const currentTime = new Date();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleReceiveData = (city, district, ward) => {
    cityProvince.setValue(city);
    districts.setValue(district);
    wards.setValue(ward);
  };

  const validateFormAddUser = () => {
    const validatePassword = validateFormatPassword(password.value);
    const validateEmail = validateFormatEmail(email.value);
    const validateNumberPhone = validatePhone(phone.value);

    if (!validatePassword) {
      setIsValid(!isValid);
      alertWanning(
        "Password phải ít nhất 6 kí tự & có ít nhất 1 kí tự viết hoa!"
      );
      return;
    } else if (!validateEmail) {
      setIsValid(!isValid);
      alertWanning("Email sai định dạng!");
      return;
    } else if (!validateNumberPhone) {
      setIsValid(!isValid);
      alertError("Số điện thoại không đúng định dạng!");
      return;
    } else {
      setIsValid(true);
    }
    return isValid;
  };

  const handleAddNewUser = async () => {
    if (!validateFormAddUser) return;

    const checkedEmail = users.find((user) => user.email === email.value);
    if (checkedEmail) {
      alertWanning("Email đã tồn tại");
      return;
    }
    const newUser = {
      dateRegister: currentTime,
      avatar: "",
      fistName: fistName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      birthday: birthday.value,
      location: {
        city: cityProvince.value,
        district: districts.value,
        wards: wards.value,
      },
      ranks: ranks.value,
      status: "open",
      address: address.value,
      code: uuidv4(),
    };

    await creatUser(newUser)
      .then((res) => {
        setUsers((prev) => {
          users = [...prev, res];
          return users;
        });
        setOpenAddUser(false);
        alertSuccess("Thêm mới thành công.");
      })
      .catch(() => {
        alertError("Đã có lỗi xảy ra!");
      });
  };

  return (
    <div className="add_user">
      <h1>thêm thành viên mới</h1>
      <form className="form_add_user">
        <label htmlFor="add_user-fistname">
          <span>Họ (*)</span>
          <input
            ref={inputRef}
            type="text"
            id="add_user-fistname"
            value={fistName.value}
            onChange={fistName.onChange}
            autoComplete="fistName"
            required
          />
        </label>
        <label htmlFor="add_user-lastname">
          <span>Tên (*)</span>
          <input
            type="text"
            id="add_user-lastname"
            value={lastName.value}
            onChange={lastName.onChange}
            autoComplete="lastName"
            required
          />
        </label>
        <label htmlFor="add_user-email">
          <span> Email (*)</span>
          <input
            type="email"
            id="add_user-email"
            value={email.value}
            onChange={email.onChange}
            autoComplete="username"
            title="Email phải chứa @"
            required
          />
        </label>
        <label htmlFor="add_user-password">
          <span>Mật khẩu (*)</span>
          <input
            type="password"
            id="add_user-password"
            value={password.value}
            onChange={password.onChange}
            autoComplete="new-password"
            title="Password phải có 1 kí tự viết hoa và có ít nhất 6 kí tự"
            required
          />
        </label>

        <label htmlFor="add_user-phone">
          <span>Số điện thoại (*)</span>
          <input
            type="number"
            id="add_user-phone"
            value={phone.value}
            onChange={phone.onChange}
            autoComplete="phone"
            required
          />
        </label>
        <label htmlFor="add_user-birthday">
          <span>Ngày sinh</span>
          <input
            type="date"
            id="add_user-birthday"
            value={birthday.value}
            autoComplete="birthday"
            onChange={birthday.onChange}
          />
        </label>
        <Provinces handleReceiveData={handleReceiveData} />
        <label htmlFor="add_user-address">
          <span>Số nhà</span>
          <input
            type="text"
            id="add_user-address"
            value={address.value}
            autoComplete="address"
            onChange={address.onChange}
          />
        </label>
        <label htmlFor="add_user-ranks">
          <span>Ranks</span>
          <select value={ranks.value} onChange={ranks.onChange}>
            <option value="" disabled>
              Chọn ranks
            </option>
            <option value="member">MemberShip</option>
            {admin && <option value="collab">Collaborate</option>}
            {admin && <option value="admin">Administrator</option>}
          </select>
        </label>
        <div className="add_user--button">
          <button
            type="button"
            className="cancel-add_user"
            onClick={() => setOpenAddUser(false)}
          >
            cancel
          </button>
          <button
            type="button"
            className="add_new_user"
            onClick={handleAddNewUser}
          >
            add new user
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;

import Provinces from "../Provinces";
import { useInput } from "../../../../hooks/useInput";
import {
  alertError,
  alertSuccess,
  alertWanning,
} from "../../../../utils/alert";
import {
  validateDuplePass,
  validateFormatEmail,
  validateFormatPassword,
  validatePhone,
} from "../../../../utils/validate";

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import axios from "axios";

const Register = ({ setUsers }) => {
  const [checked, setChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const fistName = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();
  const reEnterPassword = useInput();
  const phone = useInput();
  const birthday = useInput();
  const cityProvince = useInput();
  const districts = useInput();
  const wards = useInput();
  const address = useInput();

  const navigate = useNavigate();

  const inputRef = useRef(null);

  const currentTime = new Date()

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

  const validateFormRegister = () => {
    const validatePassword = validateFormatPassword(password.value);
    const validateEmail = validateFormatEmail(email.value);
    const valiDuplePassword = validateDuplePass(
      password.value,
      reEnterPassword.value
    );
    const validateNumberPhone = validatePhone(phone.value);

    if (!validatePassword) {
      setIsValid(!isValid);
      alertWanning(
        "Password phải ít nhất 6 kí tự & có ít nhất 1 kí tự viết hoa!"
      );
      return;
    } else if (!valiDuplePassword) {
      setIsValid(!isValid);
      alertWanning("Password & Nhập lại password không khớp!");
      return;
    } else if (!validateEmail) {
      setIsValid(!isValid);
      alertWanning("Email sai định dạng!");
      return;
    } else if (!checked) {
      setIsValid(!isValid);
      alertError("Vui lòng đồng ý với các điều khoản!");
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

  const handleRegister = async (e) => {
    e.preventDefault();
    const API_URL = "https://65219433a4199548356d628d.mockapi.io";
    axios
      .get(`${API_URL}/user`)
      .then((res) => {
        const users = res.data;

        const checkValidate = validateFormRegister();
        if (!checkValidate) return;

        const checked = users.find((user) => user.email === email.value);
        if (checked) {
          alertError("Email đã tồn tại");
          return;
        } else {
          const newUser = {
            dateRegister : currentTime,
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
            ranks: "member",
            status: "open",
            address: address.value,
            code: uuidv4(),
          };
          axios
            .post(`${API_URL}/user`, newUser)
            .then((res) => {
              
              Cookies.set("token", newUser.code, {
                expires: new Date(Date.now() + 30 * 60 * 1000),
              });
              setUsers((prve) => {
                const users = [...prve, newUser];

                return users;
              });
             

              alertSuccess("Đăng kí thành công");
              navigate("/");
            })
            .catch(() => {
              alertWanning("Đăng ký thất bại");
            });
        }
      })
      .catch(() => {
        alertWanning("error");
      });
  };

  return (
    <div className="container-register">
      <h2 className="register-title">đăng ký mới</h2>
      <form className="register" onSubmit={handleRegister}>
        <label htmlFor="register-fistname">
          Họ (*)
          <input
            ref={inputRef}
            type="text"
            id="register-fistname"
            value={fistName.value}
            onChange={fistName.onChange}
            autoComplete="fistName"
            required
          />
        </label>
        <label htmlFor="register-lastname">
          Tên (*)
          <input
            type="text"
            id="register-lastname"
            value={lastName.value}
            onChange={lastName.onChange}
            autoComplete="lastName"
            required
          />
        </label>
        <label htmlFor="register-email">
          Email (*)
          <input
            type="email"
            id="register-email"
            value={email.value}
            onChange={email.onChange}
            autoComplete="username"
            title="Email phải chứa @"
            required
          />
        </label>
        <label htmlFor="register-password">
          Mật khẩu (*)
          <input
            type="password"
            id="register-password"
            value={password.value}
            onChange={password.onChange}
            autoComplete="new-password"
            title="Password phải có 1 kí tự viết hoa và có ít nhất 6 kí tự"
            required
          />
        </label>
        <label htmlFor="register-reenter-password">
          Nhập lại mật khẩu (*)
          <input
            type="password"
            id="register-reenter-password"
            value={reEnterPassword.value}
            autoComplete="new-password"
            onChange={reEnterPassword.onChange}
            required
          />
        </label>
        <label htmlFor="register-phone">
          Số điện thoại (*)
          <input
            type="number"
            id="register-phone"
            value={phone.value}
            onChange={phone.onChange}
            autoComplete="phone"
            required
          />
        </label>
        <label htmlFor="register-birthday">
          Ngày sinh
          <input
            type="date"
            id="register-birthday"
            value={birthday.value}
            autoComplete="birthday"
            onChange={birthday.onChange}
          />
        </label>
        <Provinces handleReceiveData={handleReceiveData} />
        <label htmlFor="register-address">
          Số nhà
          <input
            type="text"
            id="register-address"
            value={address.value}
            autoComplete="address"
            onChange={address.onChange}
          />
        </label>
        <div className="acceps-regulation">
          <label htmlFor="acceps">
            <input
              type="checkbox"
              id="acceps"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <p>Tôi đã đọc, hiểu và đồng ý với <Link to="/quy-dịnh">các điều khoản</Link> </p>
            
          </label>
        </div>
        <button type="submit" title="register" className="submit-register">
          Đăng Ký
        </button>
      </form>
    </div>
  );
};

export default Register;

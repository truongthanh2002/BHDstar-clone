import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useInput } from "../../hooks/useInput";

const LoginHeader = ({
  handleLogin,
  openLogin,
  setOpenLogin,
  openFromLogin,
}) => {
  const email = useInput();
  const password = useInput();
  const loginRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setOpenLogin(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setOpenLogin]);

  const handleSignUpClick = () => {
    navigate("/dang-ky");
    setOpenLogin(false);
  };

  const handleLoginHeader = () => {
    handleLogin(email.value, password.value);
    setOpenLogin(false);
    email.setValue("");
    password.setValue("");
  };

  return (
    <div className="login_header" ref={loginRef}>
      {openLogin ? (
        <>
          <button
            type="button"
            className="header_button_login header_button--style"
            onClick={openFromLogin}
          >
            ĐĂNG NHẬP
          </button>
          <div className="modal-header-login">
            <form className="from-login">
              <input
                type="text"
                className="email-login"
                value={email.value}
                onChange={email.onChange}
                placeholder="Email"
                autoComplete="username"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password.value}
                onChange={password.onChange}
                autoComplete="current-password"
                required
              />
              <div className="form-login-item">
                <button
                  type="submit"
                  className="form-button-login header_button--style"
                  onClick={handleLoginHeader}
                >
                  ĐĂNG NHẬP
                </button>
                <Link to="/reset-password">Quên mật khẩu</Link>
              </div>
            </form>

            <button
              type="button"
              onClick={handleSignUpClick}
              className="form-button-sigup header_button--style"
            >
              ĐĂNG KÝ THÀNH VIÊN
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            type="button"
            className="header_button_login header_button--style"
            onClick={openFromLogin}
          >
            ĐĂNG NHẬP
          </button>
        </>
      )}
    </div>
  );
};

export default LoginHeader;

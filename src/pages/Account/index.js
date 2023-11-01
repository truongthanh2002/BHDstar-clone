import "./style.css";
import Infomation from "./components/Infomation";
import Regulation from "../../components/RegulationMember";
import Cart from "../../components/Cart";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Account = ({ users, isLogin ,cart ,handleUpdateCart}) => {
  const [active, setActive] = useState("info");
  const navigate = useNavigate();

  useEffect(() => {
    const handleCheckLogin = () => {
      if (!isLogin) {
        navigate("/dang-ky");
      }
    };
    handleCheckLogin()
  },[isLogin,navigate]);

  return (
    <div className="account">
      <div className="navigate">
        <Link
          to="#"
          onClick={() => setActive("info")}
          className={active === "info" ? "navigate-active" : ""}
        >
          thành viên
        </Link>
        <span>|</span>
        <Link
          to="#"
          onClick={() => setActive("regula")}
          className={active === "regula" ? "navigate-active" : ""}
        >
          quy định
        </Link>
        <span>|</span>
        <Link
          to="#"
          onClick={() => setActive("cart")}
          className={active === "cart" ? "navigate-active" : ""}
        >
          giỏ hàng
        </Link>
      </div>
      {active === "info" && (
        <Infomation users={users} isLogin={isLogin} />
      )}
      {active === "regula" && (
        <div className="account-regulation">
          <Regulation />
        </div>
      )}
      {active === "cart" && (
        <div className="account-regulation">
          <Cart cart={cart} handleUpdateCart={handleUpdateCart}/>
        </div>
      )}
    </div>
  );
};

export default Account;

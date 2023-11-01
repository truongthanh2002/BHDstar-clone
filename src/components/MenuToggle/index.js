import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuToggle = ({user ,isLogin}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showDashboard, setShowDashboard]= useState(false)
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(()=>{
    const handleShowDashboard = ()=>{
      if(isLogin && (user.ranks === "admin" || user.ranks ===  "collaborate")){
        setShowDashboard(true)
      }
    }
    handleShowDashboard()
  },[user.ranks,isLogin])
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="toggle_menu">
      {openMenu ? (
        <div>
          <button
            type="button"
            className="header_button--toggle"
            onClick={toggleMenu}
          >
            <FaTimes className="toggle_button-size" />
            CLOSE
          </button>

          <ul
            className="nav-menu-toggle "
            ref={menuRef}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {(isLogin && showDashboard) && <li>
              <Link to="/admin">dashboard</Link>
            </li>}
            
            <li>
              <Link to="/lich-theo-chieu-phim">lịch chiếu</Link>
            </li>
            <li>
              <Link to="/he-thong-rap">hệ thống rạp</Link>
            </li>
            <li>
              <Link to="/khuyen-mai-su-kien">khuyến mãi | sự kiện</Link>
            </li>
            <li>
              <Link to="/quang-cao">dịch vụ quảng cáo</Link>
            </li>
            <li>
              <Link to="/ve-chung-toi">về chúng tôi</Link>
            </li>
          </ul>
        </div>
      ) : (
        <button
          type="button"
          className="header_button--toggle"
          onClick={toggleMenu}
        >
          <FaBars className="toggle_button-size" />
          MENU
        </button>
      )}
    </div>
  );
};

export default MenuToggle;

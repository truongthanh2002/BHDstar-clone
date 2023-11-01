import "./App.css";
import { fetchUser } from "./api/users";
import { fetchMovies } from "./api/movies";
import { updateUser } from "./api/users";
import { useAuth } from "./hooks/useAuth";
import CartProvider from "./components/CartProvider";
import { alertError, alertWanning, alertSuccess } from "./utils/alert";
import THEATERS from "./data/Theater";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cinema from "./pages/Cinema";
import ShowTimes from "./pages/ShowTimes";
import Advertisement from "./pages/Advertisement";
import PromotionsEvents from "./pages/PromotionsEvents";
import Movie from "./pages/Movie";
import Abouts from "./pages/Abouts";
import LoginRegister from "./pages/LoginRegister";
import RegulationMember from "./components/RegulationMember";
import Rules from "./pages/Rules";
import SecurityPersonal from "./pages/SecurityPersonal";
import Account from "./pages/Account";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import TheaterDetail from "./pages/Cinema/TheaterDetail";
import Dashboard from "./pages/Dashboard";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

const carts = JSON.parse(localStorage.getItem("cart"));

const App = () => {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState(carts ?? []);
  const [usersChange, setUsersChange] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const { isLogin, setIsLogin, loading } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataUserFromAPI = async () => {
      try {
        const resultUsers = await fetchUser();
        if (resultUsers.length > 0) {
          setUsers(resultUsers);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchDataUserFromAPI();
  }, [usersChange]);

  useEffect(() => {
    const fetchDataMoviesFromAPI = async () => {
      try {
        const resultMovies = await fetchMovies();
        if (resultMovies.length > 0) {
          setMovies(resultMovies);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchDataMoviesFromAPI();
  }, []);


  const handleLogin = async (email, password) => {
    const userLogin = users.find(
      (user) => email === user.email && password === user.password
    );

    const newCode = {
      code: uuidv4(),
    };

    if (!userLogin) {
      alertError("Sai email hoặc password");
      return;
    }
    if (userLogin.status === "close") {
      alertWanning("Tài khoản bạn đã bị khóa vui lòng gọi đến CSKH");
      return;
    }

    if (userLogin) {
      await updateUser(userLogin.id, newCode)
        .then(() => {
          setUsersChange((prev) => !prev);
          Cookies.set("token", newCode.code, {
            expires: new Date(Date.now() + 30 * 60 * 1000),
          });
          navigate("/");
          alertSuccess("Đăng nhập thành công.");
        })
        .catch(() => {
          alertError("Đã có lỗi xảy ra");
        });
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    Cookies.remove("token");
  };

  const handleUpdateCart = (cart) => {
    setCart(cart);
  };

  const handleOpenFromLogin = () => {
    setOpenLogin(!openLogin);
  };

  return (
    <div className="App">
      <CartProvider>
      <Header
        users={users}
        isLogin={isLogin}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        loading={loading}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        handleOpenFromLogin={handleOpenFromLogin}
      />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route
          path="/admin"
          element={
            <Dashboard
              users={users}
              isLogin={isLogin}
              setUsers={setUsers}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          path="/lich-theo-chieu-phim"
          element={<ShowTimes movies={movies} />}
        />
        <Route
          path="/he-thong-rap"
          exact
          element={<Cinema movies={movies} theaters={THEATERS} />}
        />
        <Route
          path="/he-thong-rap/:slug"
          element={<TheaterDetail theaters={THEATERS} />}
        />
        <Route
          path="/khuyen-mai-su-kien"
          element={<PromotionsEvents movies={movies} />}
        />
        <Route
          path="/quang-cao"
          element={<Advertisement theaters={THEATERS} />}
        />
        <Route path="/lien-he" element={<Contact theaters={THEATERS} />} />
        <Route path="/ve-chung-toi" element={<Abouts theaters={THEATERS} />} />

        <Route
          path="/dang-ky"
          element={
            <LoginRegister
              handleLogin={handleLogin}
              setUsers={setUsers}
              setIsLogin={setIsLogin}
            />
          }
        />

        <Route
          path="/tai-khoan"
          element={
            <Account
              users={users}
              isLogin={isLogin}
              cart={cart}
              handleUpdateCart={handleUpdateCart}
            />
          }
        />
        <Route path="/quy-dinh-thanh-vien" element={<RegulationMember />} />
        <Route path="/dieu-khoan" element={<Rules theaters={THEATERS} />} />
        <Route
          path="/bao-mat-thong-tin"
          element={<SecurityPersonal theaters={THEATERS} />}
        />
        <Route
          path="/movie/:movieId"
          element={
            <Movie
              movies={movies}
              isLogin={isLogin}
              setCart={setCart}
              openFromLogin={handleOpenFromLogin}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </CartProvider>
    </div>
  );
};

export default App;

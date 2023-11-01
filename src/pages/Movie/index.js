import "./style.css";
import { alertSuccess } from "../../utils/alert";

import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Movie = ({ movies, isLogin, setCart ,openFromLogin}) => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const movieParams = useParams();
  const movie = movies.find(
    (movie) => movie.id === Number(movieParams.movieId)
  );

  const cartInLocal = JSON.parse(localStorage.getItem("cart")) ?? [];

  const navigate = useNavigate();

  useEffect(() => {
    const scrollPosition = 4 * 16;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }, []);

  const handleQuantityPlus = () => {
    setCount(Number(count + 1));
    setTotal((count + 1) * movie.price);
  };

  const handleQuantityMinus = () => {
    if (count <= 0) return;
    setCount(Number(count - 1));
    setTotal((count - 1) * movie.price);
  };

  const handleSubmitOrderTicket = () => {
    const ticketMovie = {
      id: cartInLocal.length + 1,
      nameMovie: movie.title,
      thumnail: movie.thumnail,
      quantity: count,
      totalPrice: total,
    };

    const cart = [...cartInLocal];

    const existingMovieIndex = cart.findIndex(
      (movie) => movie.nameMovie === ticketMovie.nameMovie
    );

    if (existingMovieIndex !== -1) {
      cart[existingMovieIndex].quantity += ticketMovie.quantity;
    } else {
      cart.push(ticketMovie);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
    setCount(0);
    setTotal(0);
    alertSuccess(
      `Bạn đã đặt vé fiml ${movie.title} thành công vui lòng kiểm tra thông tin giỏ hàng tại trang tài khoản.`
    );
    navigate("/");
  };

  return (
    <div className="movie">
      {movie && (
        <div className="container-movie">
          <div className="movie-detail-title">
            <h2>
              <Link to="/">TRANG CHỦ</Link> | {movie.title}
            </h2>
          </div>
          <div className="movie-detail-content">
            <div className="movie-detail-content--left">
              <img src={movie.thumnail} alt={movie.title} />
            </div>
            <div className="movie-detail-content--right">
              <h2 className="text-content--right itle">{movie.title}</h2>
              <p className="text-content--right description">
                {movie.description}
              </p>
              <p className="text-content--right">
                Phân Loại <span className="classify">{movie.classify}</span>
              </p>
              <p className="text-content--right">
                Đạo diễn <span>{movie.director}</span>
              </p>
              <p className="text-content--right">
                Thể Loại <span>{movie.category}</span>
              </p>
              <p className="text-content--right">
                Khởi chiếu <span>{movie.premiere}</span>
              </p>
              <p className="text-content--right">
                Thời lượng <span>{movie.videoDuration}</span>
              </p>
              <p className="text-content--right">
                Ngôn ngữ <span>Phim có phụ đề</span>
              </p>
              <p className="text-content--right">
                Giá vé <span>{(movie.price).toLocaleString()}đ</span>
              </p>
              {isLogin ? (
                <>
                  <div className="submit-order-ticket">
                    <div className="plus-minus">
                      <button
                        type="button"
                        onClick={handleQuantityMinus}
                        className="minus"
                        title="minus"
                      >
                        <FaMinus />
                      </button>

                      <input
                        type="number"
                        value={count}
                        title="quantity"
                        className="quantity"
                        onChange={(e) => setCount(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={handleQuantityPlus}
                        className="plus"
                        title="plus"
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <button
                      type="button"
                      title="submit"
                      className="submit-ticket"
                      onClick={handleSubmitOrderTicket}
                    >
                      đặt vé
                    </button>
                  </div>
                  <div className="total-order-ticket">
                    <p>
                      Tổng thanh toán:{" "}
                      <strong>{Number(total).toLocaleString()}</strong>
                      <sub>đ</sub>
                    </p>
                  </div>
                </>
              ) : (
                <div className="request-login">
                  <h3>
                    oh!! có vẻ bạn chưa <Link to="#" onClick={openFromLogin}>đăng nhập</Link>{" "}
                    hoặc <Link to="/dang-ky"> đăng ký</Link> rồi!{" "}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;

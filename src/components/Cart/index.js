import "./style.css";
import { alertSuccess, alertWanning } from "../../utils/alert";

import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus, FaX, FaCartShopping } from "react-icons/fa6";

const Cart = ({ cart, handleUpdateCart }) => {
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cart.map((movie) => {
      if (movie.id === id) {
        if (movie.quantity > 0) {
          return {
            ...movie,
            quantity: movie.quantity - 1,
            totalPrice:
              (movie.totalPrice / movie.quantity) * (movie.quantity - 1),
          };
        }
      }
      return movie;
    });

    handleUpdateCart(updatedCart);
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cart.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          quantity: movie.quantity + 1,
          totalPrice:
            (movie.totalPrice / movie.quantity) * (movie.quantity + 1),
        };
      }
      return movie;
    });

    handleUpdateCart(updatedCart);
  };

  const handleDeleteMovie = (id) => {
    const updatedCart = cart.filter((movie) => movie.id !== id);

    handleUpdateCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCompeteOrder = () => {
    if (cart.length === 0) {
      alertWanning("Bạn chưa đặt vé!");
      return
    } else {
      localStorage.removeItem("cart");
      handleUpdateCart([]);
      alertSuccess("Thanh toán thành công!");
      navigate("/");
    }
  };

  return (
    <div className="cart">
      <div className="list-movie-cart">
        <table>
          <thead>
            <tr>
              <th>stt</th>
              <th>phim</th>
              <th>tên phim</th>
              <th>số lượng</th>
              <th>tổng tiền</th>
              <th>xóa</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((movie, idx) => (
              <tr key={movie.id}>
                <td>{idx}</td>
                <td>
                  <img src={movie.thumnail} alt={movie.nameMovie} />
                </td>
                <td>{movie.nameMovie}</td>
                <td>
                  <button onClick={() => handleDecreaseQuantity(movie.id)}>
                    <FaMinus />
                  </button>

                  <input value={movie.quantity} readOnly />
                  <button onClick={() => handleIncreaseQuantity(movie.id)}>
                    <FaPlus />
                  </button>
                </td>
                <td className="price">
                  {Number(movie.totalPrice).toLocaleString()}
                  <sub>đ</sub>
                </td>
                <td>
                  <button
                    type="button"
                    title="delete"
                    onClick={() => handleDeleteMovie(movie.id)}
                  >
                    <FaX />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-cart">
        <h1>
          Tổng số tiền cần thanh toán :{" "}
          <strong>{Number(total).toLocaleString()}</strong>
          <sub>đ</sub>
        </h1>
        <button
          type="button"
          onClick={handleCompeteOrder}
          title="complete order"
          className="complete-order"
        >
          <FaCartShopping /> Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Cart;

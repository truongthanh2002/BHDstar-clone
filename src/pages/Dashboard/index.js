import "./style.css";
import ListUsers from "./components/ListUsers";
import AddUser from "./components/AddUser";
import { updateUser, deleteUser } from "../../api/users";
import { alertError, alertSuccess } from "../../utils/alert";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { PacmanLoader } from "react-spinners";

const Dashboard = ({
  users,
  isLogin,
  setUsers,
  handleLogout,
}) => {
  const [admin, setAdmin] = useState(false);
  const [collab, setCollab] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);


  useEffect(() => {
    const handleCheckRanks = () => {
      const token = Cookies.get("token");
      const user = users.find((user) => user.code === token);
      if (user === undefined) {
        setLoading(true);
        return {};
      } else if (user.ranks === "admin") {
        setAdmin(true);
        setLoading(false);
      } else if (user.ranks === "collaborate") {
        setCollab(true);
        setLoading(false);
      } else {
        setAdmin(false);
        setCollab(false);
        setLoading(false);
      }
    };
    handleCheckRanks();
  }, [users, setAdmin]);

  const handleUpdateUser = async (id, newData) => {
    const user = users.find((user) => user.id === id);

    if (!user) return;

    if (user) {
      updateUser(id, newData)
        .then(async () => {
          setUsers((prev) => {
            return prev.map((user) => {
              if (user.id === id) {
                return {
                  ...user,
                  ...newData,
                };
              }
              return user;
            });
          });
        })
        .catch(() => {
          alertError("Cập nhật thất bại");
        });
      
      alertSuccess("Cập nhật thành công");
    }
  };

  const handleDeleteUser = async (id) => {
    const user = users.filter((user) => user.id !== id);
    if (!user) return;
    if (user) {
      await deleteUser(id)
        .then(() => {
          alertSuccess("Đã xóa người dùng");
          setUsers(user);
        })
        .catch(() => {
          alertError("Xóa thất bại!");
        });
    }
  };

  return (
    <>
      {loading && isLogin ? (
        <div className="dashboard-loading">
          <h1>loading</h1>
          <PacmanLoader color="#54ab35" size={25} />
        </div>
      ) : (
        <div className="dashboard">
          {isLogin && (admin || collab) ? (
            <>
              {openAddUser ? (
                <div className="box-dashboard">
                  <AddUser users={users} setUsers={setUsers} admin={admin} setOpenAddUser={setOpenAddUser} />
                </div>
              ) : (
                <div className="box-dashboard">
                  <div className="title-dashboard">
                    <h1>danh sách tài khoản trên hệ thống</h1>{" "}
                    <button type="button" className="button-adduser" onClick={() => setOpenAddUser(!openAddUser)}>
                      Add new user
                    </button>
                  </div>
                  <form className="table-list">
                    <table>
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>họ</th>
                          <th>tên</th>
                          <th>email</th>
                          <th>ngày đăng ký</th>
                          <th>ranks</th>
                          <th>status</th>
                          <th>edit</th>
                          {admin && <th>delete</th>}
                        </tr>
                      </thead>

                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className={user.id}>
                            <ListUsers
                              user={user}
                              admin={admin}
                              handleUpdateUser={handleUpdateUser}
                              handleDeleteUser={handleDeleteUser}
                            />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </form>
                </div>
              )}
            </>
          ) : (
            <div className="dashboard-security">
              <h1>bạn không có quyền truy cập thông tin!</h1>
              <h2>
                Vui lòng đăng nhập vào{" "}
                <Link to="/dang-ky" onClick={handleLogout}>
                  tài khoản quản lý{" "}
                </Link>
                hoặc quay lại <Link to="/">HomePage</Link>
              </h2>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;

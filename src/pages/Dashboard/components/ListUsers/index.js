import { useInput } from "../../../../hooks/useInput";
import { handleFormatDate } from "../../../../utils/date";

import { useState, useEffect, useRef } from "react";
import {
  FaUserPen,
  FaTrashCan,
  FaUserCheck,
  FaCircleXmark,
} from "react-icons/fa6";

const ListUsers = ({ user, admin, handleUpdateUser, handleDeleteUser }) => {
  const fistName = useInput(user.fistName);
  const lastName = useInput(user.lastName);
  const email = useInput(user.email);
  const ranks = useInput(user.ranks);
  const status = useInput(user.status);

  const [editUser, setEditUser] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const date = handleFormatDate(user.dateRegister);

  const newData = {
    id: user.id,
    fistName: fistName.value,
    lastName: lastName.value,
    email: email.value,
    ranks: ranks.value,
    status: status.value,
  };

  const updateMember = () => {
    handleUpdateUser(user.id, newData);
    setEditUser((prve) => !prve);
  };

  return (
    <>
      {editUser ? (
        <>
          <td>
            <span>{user.id}</span>
          </td>
          <td>
            {admin || user.ranks !== "admin" ? (
              <input
                ref={inputRef}
                type="text"
                value={fistName.value}
                onChange={fistName.onChange}
                autoFocus
              />
            ) : (
              <span className="name">{user.fistName}</span>
            )}
          </td>
          <td>
            {admin || user.ranks !== "admin" ? (
              <input
                type="text"
                value={lastName.value}
                onChange={lastName.onChange}
              />
            ) : (
              <span className="name">{user.lastName}</span>
            )}
          </td>
          <td>
            {admin || user.ranks !== "admin" ? (
              <input
                type="text"
                value={email.value}
                onChange={email.onChange}
                autoComplete="username"
              />
            ) : (
              <span>{user.email}</span>
            )}
          </td>
          <td>
            <span>{date}</span>
          </td>

          <td>
            {admin || user.ranks !== "admin" ? (
              <select value={ranks.value} onChange={ranks.onChange}>
                <option value="member">Member</option>
                {admin && 
                  <option value="admin">Admin</option>
                }
                {admin && <option value="collaborate">Collab</option>}
              </select>
            ) : (
              <span className="ranks">{user.ranks}</span>
            )}
          </td>
          <td>
            {admin || user.ranks !== "admin" ? (
              <select value={status.value} onChange={status.onChange}>
                <option value="open">Open</option>
                <option value="close">Close</option>
              </select>
            ) : (
              <span
                style={
                  user.status === "close"
                    ? { color: "#545454", fontWeight: 600 }
                    : {}
                }
              >
                {user.status}
              </span>
            )}
          </td>
          <td className="button">
            {(admin || user.ranks !== "admin") && (
              <button
                type="button"
                title="Update"
                className="compet-update"
                onClick={updateMember}
              >
                <FaUserCheck className="update-member" />
              </button>
            )}

            <button
              type="button"
              className="cancel-update"
              onClick={() => setEditUser(!editUser)}
            >
              <FaCircleXmark />
            </button>
          </td>
          {admin && (
            <td className="button-delete">
              <button
                type="button"
                title="Delete"
                onClick={() => handleDeleteUser(user.id)}
              >
                <FaTrashCan className="delete-member" />
              </button>
            </td>
          )}
        </>
      ) : (
        <>
          <td>
            <span>{user.id}</span>
          </td>
          <td>
            <span className="name">{user.fistName}</span>
          </td>
          <td>
            <span className="name">{user.lastName}</span>
          </td>
          <td>
            <span>{user.email}</span>
          </td>
          <td>
            <span>{date}</span>
          </td>
          <td>
            <span className="ranks">{user.ranks}</span>
          </td>
          <td>
            <span
              style={
                user.status === "close"
                  ? { color: "#545454", fontWeight: 600 }
                  : {}
              }
            >
              {user.status}
            </span>
          </td>
          <td>
            <button
              type="button"
              title="Edit"
              onClick={() => setEditUser(!editUser)}
            >
              <FaUserPen className="edit-member" />
            </button>
          </td>
          {admin && (
            <td className="button-delete">
              <button
                type="button"
                title="Delete"
                onClick={() => handleDeleteUser(user.id)}
              >
                <FaTrashCan className="delete-member" />
              </button>
            </td>
          )}
        </>
      )}
    </>
  );
};

export default ListUsers;

import React from "react";
import "./UserCard.css";

const UserCard = ({ user, onView, onEdit, onDelete }) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <div className="user-card" onClick={onView}>
      <img src={avatarUrl} alt={user.name} className="avatar" />

      <div className="user-info">
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Company: {user.company?.name}</p>

        <div className="buttons">
          <button
            className="edit-btn"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

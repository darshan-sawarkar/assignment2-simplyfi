import React from "react";
import "./Modal.css";

const UserModal = ({ user, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        <p>
          <strong>Address:</strong> {user.address?.street}, {user.address?.city}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserModal;

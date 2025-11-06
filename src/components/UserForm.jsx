import React, { useEffect, useState } from "react";
import "./Modal.css";

const UserForm = ({ onClose, onSubmit, initialValues }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    street: "",
    city: "",
  });

  useEffect(() => {
    if (initialValues) {
      setFormData({
        name: initialValues.name || "",
        username: initialValues.username || "",
        email: initialValues.email || "",
        phone: initialValues.phone || "",
        website: initialValues.website || "",
        company: initialValues.company?.name || "",
        street: initialValues.address?.street || "",
        city: initialValues.address?.city || "",
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{initialValues ? "Edit User" : "Add New User"}</h3>

        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              required={["name", "username", "email"].includes(key)}
            />
          ))}

          <div className="form-buttons">
            <button type="submit">
              {initialValues ? "Update" : "Add"}
            </button>
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

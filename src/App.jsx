import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import UserModal from "./components/UserModal";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleEditUser = (userData) => {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editUser.id
            ? { ...u, ...userData, company: { name: userData.company } }
            : u
        )
      );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div className="app">
      <header className="header">
        <h2>User Profiles</h2>
      </header>

      <div className="cards-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onView={() => setSelectedUser(user)}
            onEdit={() => {
              setEditUser(user);
              setShowForm(true);
            }}
            onDelete={() => handleDelete(user.id)}
          />
        ))}
      </div>

      {showForm && (
        <UserForm
          initialValues={editUser}
          onClose={() => setShowForm(false)}
          onSubmit={handleEditUser}
        />
      )}

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;

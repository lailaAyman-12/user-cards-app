// src/pages/Users.js
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users.slice(0, 4)));
  }, []);

  return (
    <div className="container">
      <h2 className="center">Users List</h2>
      <div className="card-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;

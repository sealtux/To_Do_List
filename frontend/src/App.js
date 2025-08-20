import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  fetch("http://127.0.0.1:5000/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data);
    })
    .catch(err => console.error("Error fetching data:", err));
}, []);

  return (
    <div className="container" >
      <h1>Users from MySQL</h1>
      {users.length > 0 ? (
        <ul className="user-list">
          {users.map((user, index) => (
            <li key={index} className="user-item">
              {user.FirstName} {user.LastName} - Age: {user.Age}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default App;
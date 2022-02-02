import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import './assets/style/app.css';





const App = () => {
  const usersData = [
    { id: 1, name: "Ada", username: "fLovelace" },
    { id: 2, name: "Adela", username: "Katz" },
    { id: 3, name: "Betty", username: "Snyder " },
    { id: 4, name: "Kathleen", username: "McNulty" },
  
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialFormState);
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <div className="crudSection"> 
        <div className="">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
              
            </div>
          ) : (
            <div>
              <h2>🙋‍♀️ Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
      
        <div className="viewUserContainer">
          <h3>🔎 View users</h3>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;

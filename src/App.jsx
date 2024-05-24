import React, { useState } from "react";
import "./components/Profile";
import "./App.css";
import Profile from "./components/Profile";
import useGetUser from "./hooks/useGetUser";
import useGetUsers from "./hooks/useGetUsers";
import Username from "./components/Username";
import Header from "./components/Header";

const App = () => {
  // const [userId, setUserId] = useState(0);
  // const [userData, users] = useGetUser(userId);\
  const [currentUser, setCurrentUser] = useState();
  const users = useGetUsers();

  // function handleNextUser() {
  //   setUserId(userId + 1);
  // }
  // function handlePrevUser() {
  //   setUserId(userId - 1);
  // }

  // function handleMoreInfomation() {
  //   setUserInfo(!userInfo);
  // }

  console.log(users);
  console.log(currentUser);
  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <div className="user-info">
          {users.map((userData) => (
            <div onClick={() => setCurrentUser(userData)}>
              <Username userData={userData} />
            </div>
          ))}
        </div>
        <div className="profile-info">
          <Profile userData={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default App;

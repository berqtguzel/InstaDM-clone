"use client";
import React, { useState } from "react";
import "./Chatbar.css";
import SelectedUser from "../SelecterUser/SelectedUser";
import Users from "../Usersbar/Users";
import ChatUsers from "../Usersbar/ChatUsers/ChatUsers";
import Navbar from "../Navbar/Navbar";

const ParentComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <div className="direct-message-container">
        <div className="direct-message">
          <Users />
          <ChatUsers onUserClick={setSelectedUser} />
        </div>
        <div className="selected-user-container">
          <SelectedUser user={selectedUser} />
        </div>
      </div>
    </>
  );
};

export default ParentComponent;

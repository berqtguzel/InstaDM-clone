"use client";
import React, { useState } from "react";
import "./Chatbar.css";
import SelectedUser from "../SelecterUser/SelectedUser";
import Users from "../Usersbar/Users";
import ChatUsers from "../Usersbar/ChatUsers/ChatUsers";
import Navbar from "../Navbar/Navbar";
import { GoSmiley } from "react-icons/go";
import { GrMicrophone } from "react-icons/gr";
import { TbPhotoSquareRounded } from "react-icons/tb";
const ParentComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <div className="direct-message">
        <Users />
        <ChatUsers onUserClick={setSelectedUser} />
      </div>
      <div className="selected-user-container">
        <SelectedUser user={selectedUser} />
        <div className="dm-footer">
          <div>
            <GoSmiley />
            <input type="text" placeholder="Mesaj..." />
            <GrMicrophone />
            <TbPhotoSquareRounded />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentComponent;

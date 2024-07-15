"use client";
import "./Users.css";
import { useState } from "react";
import { TbMessage2Plus } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import ChatUsers from "./ChatUsers/ChatUsers";
import Image from "next/image";
const Users = ({ onUserClick }) => {
  const users = [
    {
      photo: "berat",
      name: "Notun",
      key: "1",
      note: "Not...",
    },
    {
      photo: "aybik",
      name: "Aybike",
      key: "2",
      note: "Yorgun Demokrat",
    },
    {
      photo: "elif",
      name: "Elif",
      key: "3",
      note: "Gurbet",
    },
    {
      photo: "yusuf",
      name: "Yusuf",
      key: "4",
      note: "Affet",
    },
    {
      photo: "emre",
      name: "Emre",
      key: "5",
      note: "Haberin Var mı",
    },
  ];

  return (
    <div className="users-container">
      <div className="name-message">
        <div className="user-name-container">
          <h1 className="user-name">berqtguzel</h1>
          <IoMdArrowDropdown className="arrow-icon" />
        </div>
        <div className="message-icon-container">
          <TbMessage2Plus className="message-icon" />
        </div>
      </div>
      <div className="users-music">
        {users.map((user) => (
          <div className="users">
            <div className="notes">{user.note}</div>
            <Image
              src={require(`../../assets/profile/${user.photo}.png`)}
              alt=""
              className="user-icon"
            />

            <p className="profile-name">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

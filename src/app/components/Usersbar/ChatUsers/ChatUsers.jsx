// ChatUsers.js
"use client";
import React from "react";
import "./ChatUsers.css";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

const ChatUsers = ({ onUserClick }) => {
  const chatUsers = [
    {
      tick: "true",
      photo: "begüm",
      name: "Begüm Gül Karakoyun",
      key: "1",
      lastmessage: "Sen: Biliom",
      message1: "Lorem ipsum dolor sit",
      message2: "Lorem ipsum ",
      message3: "Lorem ipsum dolor sit",
      message4: "Lorem",
    },
    {
      photo: "aybik",
      name: "Aybike Göçer",
      key: "2",
      lastmessage: "Sen: Hee",
      message1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      message2: "Lorem ipsum",
      message3: "Lorem ipsum dolor sit, amet",
      message4: "Lorem ipsum dolor sit,",
    },
    {
      photo: "emre",
      name: "Emre Güzel",
      key: "3",
      lastmessage: "Sen: Ho",
      message1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      message2: "Lorem ipsum",
      message3: "Lorem ipsum dolor sit, amet",
      message4: "Lorem ipsum dolor sit,",
    },
    {
      photo: "elif",
      name: "Elif Naz Demir",
      key: "4",
      lastmessage: "Bir Reels Videosu Gönderdi",
      message1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      message2: "Lorem ipsum",
      message3: "Lorem ipsum dolor sit, amet",
      message4: "Lorem ipsum dolor sit,",
    },
    {
      photo: "yusuf",
      name: "Yusuf Öz",
      key: "5",
      lastmessage: "Sen: Adamım Be",
      message1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      message2: "Lorem ipsum",
      message3: "Lorem ipsum dolor sit, amet",
      message4: "Lorem ipsum dolor sit,",
    },
  ];

  return (
    <div className="chat-users">
      <div className="chat-text">
        <h1 className="chats">Mesajlar</h1>
        <h1 className="chats request-text">İstekler</h1>
      </div>
      <div className="user-component">
        {chatUsers.map((chat) => (
          <div
            key={chat.key}
            className="user-message"
            onClick={() => onUserClick(chat)}
          >
            <Image
              src={require(`../../../assets/profile/${chat.photo}.png`)}
              alt=""
              className="message-user-icon"
            />
            <div className="chat-message-name">
              <div className="chat-name">
                {chat.name}
                {chat.tick && <TiTick className="tick-icon" />}
              </div>
              <p className="chat-lastmessage">{chat.lastmessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatUsers;

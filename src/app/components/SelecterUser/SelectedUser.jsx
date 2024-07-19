import React, { useState } from "react";
import Image from "next/image";
import "./SelectedUser.css";
import { BsTelephone } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { GoSmiley } from "react-icons/go";
import { GrMicrophone } from "react-icons/gr";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

const SelectedUser = ({ user }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      photo: "berat",
      message: "Lorem ipsum dolor sit amet",
    },
    {
      photo: "berat",
      message: "Lorem, ipsum dolor",
    },
    {
      photo: "berat",
      message: "Lorem, ipsum",
    },
    {
      photo: "berat",
      message: "Lorem, ipsum",
    },
    {
      photo: "berat",
      message: "Lorem",
    },
  ]);

  if (!user) return null;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("Input value changed: ", e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      console.log("Sending message: ", inputValue);
      setMessages([...messages, { photo: user.photo, message: inputValue }]);
      console.log("Messages updated: ", [
        ...messages,
        { photo: user.photo, message: inputValue },
      ]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="selected-user">
        <div className="user-header">
          <div className="userdm-imgname">
            <Image
              src={require(`../../assets/profile/${user.photo}.png`)}
              alt={user.name}
              className="selected-user-icon"
            />
            <p className="userdm-name">
              {user.name}
              {user.tick && <TiTick className="tick-icon" />}
            </p>
          </div>
          <div className="userdm-icon">
            <BsTelephone className="telephone-icon" />
            <BsCameraVideo className="camera-icon" />
            <IoIosInformationCircleOutline className="info-icon" />
          </div>
        </div>
        {[user.message1, user.message2, user.message3, user.message4].map(
          (message, index) => (
            <div
              key={index}
              className={`userdm-messages userdm-text${index + 1}`}
            >
              <Image
                className="dm-icon"
                src={require(`../../assets/profile/${user.photo}.png`)}
                alt={user.name}
              />
              <p className="dm-message1">{message}</p>
            </div>
          )
        )}
        {messages.map((me, index) => (
          <div key={index} className={`me-messages me-text${index + 1}`}>
            <p className="me-message1">{me.message}</p>
          </div>
        ))}
      </div>
      <div className="dm-footer">
        <div className="footer-input">
          <GoSmiley className="smiley-icon" />
          <input
            type="text"
            placeholder="Mesaj..."
            className="text-input"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <div className={`footer-icons ${inputValue.trim() ? "hidden" : ""}`}>
          <GrMicrophone className="mic-icon" />
          <TbPhotoSquareRounded className="photos-icon" />
          <CiHeart className="hearth-icon" />
        </div>
        <div
          className={`send-button ${inputValue.trim() ? "visible" : "hidden"}`}
          onClick={handleSendMessage}
        >
          Gönder
        </div>
      </div>
    </>
  );
};

export default SelectedUser;

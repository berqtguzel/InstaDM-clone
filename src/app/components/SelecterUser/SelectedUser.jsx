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

  if (!user) return null;

  const chatMe = [
    {
      photo: "berat",
      message1: "Lorem ipsum dolor sit amet",
      message2: "Lorem, ipsum dolor",
      message3: "Lorem, ipsum",
      message4: "Lorem, ipsum",
      message5: "Lorem",
    },
  ];

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
        {chatMe.map((me, meIndex) =>
          Object.keys(me)
            .filter((key) => key.startsWith("message"))
            .map((key, index) => (
              <div key={index} className={`me-messages me-text${index + 1}`}>
                <p className="me-message1">{me[key]}</p>
              </div>
            ))
        )}
      </div>
      <div className="dm-footer">
        <div className="footer-input">
          <GoSmiley className="smiley-icon" />
          <input
            type="text"
            placeholder="Mesaj..."
            className="text-input"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <div className={`footer-icons ${isFocused ? "hidden" : ""}`}>
          <GrMicrophone className="mic-icon" />
          <TbPhotoSquareRounded className="photos-icon" />
          <CiHeart className="hearth-icon" />
        </div>
        <div className={`send-button ${isFocused ? "visible" : ""}`}>
          Gönder
        </div>
      </div>
    </>
  );
};

export default SelectedUser;

// SelectedUser.js
import React from "react";
import Image from "next/image";
import "./SelectedUser.css";
import { BsTelephone } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const SelectedUser = ({ user }) => {
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
      <div className="userdm-messages userdm-text1">
        <Image
          className="dm-icon"
          src={require(`../../assets/profile/${user.photo}.png`)}
          alt={user.name}
        />
        <p className="dm-message1">{user.message1}</p>
      </div>
      <div className="userdm-messages userdm-text2">
        <Image
          className="dm-icon"
          src={require(`../../assets/profile/${user.photo}.png`)}
          alt={user.name}
        />
        <p className="dm-message1">{user.message2}</p>
      </div>
      <div className="userdm-messages userdm-text3">
        <Image
          className="dm-icon"
          src={require(`../../assets/profile/${user.photo}.png`)}
          alt={user.name}
        />
        <p className="dm-message1">{user.message3}</p>
      </div>
      <div className="userdm-messages userdm-text4">
        <Image
          className="dm-icon"
          src={require(`../../assets/profile/${user.photo}.png`)}
          alt={user.name}
        />
        <p className="dm-message1">{user.message4}</p>
      </div>
      {chatMe.map((me) => (
        <>
          <div className="me-messages me-text1">
            <p className="me-message1">{me.message1}</p>
          </div>
          <div className="me-messages me-text2">
            <p className="me-message1">{me.message2}</p>
          </div>
          <div className="me-messages me-text3">
            <p className="me-message1">{me.message3}</p>
          </div>
          <div className="me-messages me-text4">
            <p className="me-message1">{me.message4}</p>
          </div>
          <div className="me-messages me-text5">
            <p className="me-message1">{me.message5}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default SelectedUser;

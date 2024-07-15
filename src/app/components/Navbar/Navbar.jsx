import "./Navbar.css";
import { FaInstagram } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { TbPhotoVideo } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import profile from "../../assets/profile/berat.png";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
Image;
const Navbar = () => {
  return (
    <div className="navbar-component">
      <h1 className="chat-icon">Chat</h1>
      <div className="main-icons">
        <IoMdHome className="icon ichov" />
        <FaSearch className="icon ichov" />
        <FaCompass className="icon ichov" />
        <TbPhotoVideo className="icon ichov" />
        <BiMessageRoundedDots className="icon ichov" />
        <FaHeart className="icon ichov" />
        <FiPlusSquare className="icon ichov" />
        <Image src={profile} alt="" className="profile-photo ichov" />
      </div>
      <CiMenuBurger className="icon menu-icon ichov" />
    </div>
  );
};

export default Navbar;

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./layout.css";
import Users from "./components/Usersbar/Users";
import Chatbar from "./components/Chatbar/Chatbar";

function Page() {
  return (
    <div className="page">
      <Navbar />
      <Chatbar />
    </div>
  );
}

export default Page;

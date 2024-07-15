import React from "react"
import Navbar from "./components/Navbar/Navbar"
import "./layout.css"
import Users from "./components/Usersbar/Users"
import Chatbar from "./components/Chatbar/Chatbar"

function page() {
  return (
    <div className="page">
      <Navbar/>
      <Chatbar/>
    </div>
  )
}

export default page
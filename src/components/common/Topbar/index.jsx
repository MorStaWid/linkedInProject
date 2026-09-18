import React from "react";
import LinkedinLogo from "../../../assets/LinkedinLogo.svg";
import user from "../../../assets/userIcon.png";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { LiaUserSolid } from "react-icons/lia";
import { BsBriefcase } from "react-icons/bs";
import "./index.scss";

export default function Topbar() {
  return (
    <div className="topbar-main">
      <img className="linkedin-logo" src={LinkedinLogo} alt="LinkedIn logo" />

      <div className="react-icons">
        <AiOutlineSearch className="react-icon" />
        <AiOutlineHome className="react-icon" />
        <LiaUserSolid className="react-icon" />
        <BsBriefcase className="react-icon" />
        <AiOutlineMessage className="react-icon" />
        <AiOutlineBell className="react-icon" />
      </div>

      <img className="user-logo" src={user} alt="User profile" />
    </div>
  );
}

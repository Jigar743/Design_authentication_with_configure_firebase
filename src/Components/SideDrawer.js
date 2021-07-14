import React from "react";
import "../style/SideDrawer.css";
import profileImg from "../assets/Jigar_modi.jpg";
import { NavLink } from "react-router-dom";

export default function SideDrawer(props) {
  console.log(props.show);
  return (
    <nav className={props.show ? "side-drawer open" : "side-drawer"}>
      <div className="profile_section">
        <div className="profile_img">
          <img src={profileImg} alt="ProfileImage" />
        </div>
        <div className="profile_bio">
          <p>Jigar Modi</p>
          <p>Work</p>
        </div>
      </div>
      <ul>
        <li>
          <NavLink
            activeClassName="active"
            activeStyle={{background: "wheat"}}
            to="/help"
            onClick={props.ListClick}
          >
            Help
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            activeStyle={{background: "wheat"}}
            to="/notification"
            onClick={props.ListClick}
          >
            Notification
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            activeStyle={{background: "wheat"}}
            to="/contact"
            onClick={props.ListClick}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            activeStyle={{background: "wheat"}}
            to="/account"
            onClick={props.ListClick}
          >
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

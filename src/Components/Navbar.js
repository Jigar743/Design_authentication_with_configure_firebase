import React from "react";
import {  NavLink } from "react-router-dom";
import "../style/Navbar.css";

export default function Navbar(props) {
  return (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div>
          <button className="toggle_button" onClick={props.drawerTogglerButton}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
          </button>
        </div>
        <div className="navbar__logo">
          <p>Company Logo</p>
        </div>
        <div className="spacer" />
        <div className="Navbar_list_item">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/help">
                Help
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/notification">
                Notification
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/account">
                Account
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

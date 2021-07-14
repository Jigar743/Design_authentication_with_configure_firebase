import React from "react";
import "../style/BackDrop.css"

export default function BackDrop(props) {
  return <div className="back-drop" onClick={props.backdropetoggler}></div>;
}

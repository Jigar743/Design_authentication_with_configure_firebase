import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Account from "./Account";
import Contact from "./Contact";
import Help from "./Help";
import Notification from "./Notification";

export default function Main() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div style={{ margin: "auto", width: "70%  " }}>
      <Switch location={background || location}>
        <Route path="/account" exact component={Account} />
        <Route path="/help" component={Help} />
        <Route path="/notification" component={Notification} />
        <Route path="/contact" component={Contact} />
        <Redirect from="*" to="/account" />
      </Switch>
    </div>
  );
}

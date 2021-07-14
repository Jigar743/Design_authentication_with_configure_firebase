import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import BackDrop from "./BackDrop";
import SideDrawer from "./SideDrawer";
import Main from "./Main";
import Navbar from "./Navbar";

export default function Home() {
  const [drawerToggle, setDrawerToggle] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerToggle(!drawerToggle);
  };

  const backdropClickHandler = () => {
    setDrawerToggle(false);
  };

  const onDrawerItemClick = () => {
    setDrawerToggle(false);
  };

  // let location = useLocation();
  // let background = location.state && location.state.background;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUserData());
  // });

  return (
    <div style={{ height: "100%" }}>
      <BrowserRouter>
        <Navbar drawerTogglerButton={drawerToggleClickHandler} />
        <SideDrawer show={drawerToggle} ListClick={onDrawerItemClick}/>
        {drawerToggle ? (
          <BackDrop backdropetoggler={backdropClickHandler} />
        ) : null}
        <main style={{ marginTop: "80px" }}>
          <Route path="/" component={Main} />
        </main>
      </BrowserRouter>
    </div>
  );
}

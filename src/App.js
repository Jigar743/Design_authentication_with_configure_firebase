import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Authentication/Login";
import ResetPassword from "./Authentication/ResetPassword";
import Signup from "./Authentication/Signup";

function App() {
  const isAuthenticated = useSelector((state) => state.reducer.isAuthenticated);
  return (
    <div>
      <Switch>
        <Route
          path="/"
          render={(props) => {
            return isAuthenticated ? <Login /> : <Home {...props} />;
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset-password" component={ResetPassword} />
      </Switch>
    </div>
  );
}

export default App;

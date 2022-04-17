import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/style.css";
import Home from "./Pages/Home";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Pages/Login";
import ProfileCreation from "./Pages/ProfileCreation";
import ProfileCreation2 from "./Pages/ProfileCreation2";
import ProfileCreation3 from "./Pages/ProfileCreation3";
import DashBoardLanding from "./Pages/DashBoardLanding";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <DashBoardLanding />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">
          {/* <ProfileCreation /> */}
          {/* <ProfileCreation2 /> */}
          <ProfileCreation3 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

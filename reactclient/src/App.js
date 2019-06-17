import React from "react";
import "./App.css";
import { NavLink, Route, withRouter } from "react-router-dom";

import Login from "./routes/Login";
import Jokes from "./routes/Jokes";
import Register from "./routes/Register";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/jokes">Jokes</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/jokes" component={Jokes} />
      </>
    );
  }

  logout = () => {
    localStorage.removeItem("jwt");

    this.props.history.push("/jokes");
  };
}

export default withRouter(App);

import React from "react";
import axios from "axios";

class Register extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <>
        <h1>Register an Account</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Register!</button>
          </div>
        </form>
      </>
    );
  }

  handleInputChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = "http://localhost:3300/api/register";

    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("RESPONSE", res.data);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };
}

export default Register;

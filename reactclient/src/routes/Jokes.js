import React from "react";
import axios from "axios";

import "../auth/addInterceptors";
import requiresAuth from "../auth/requiresAuth";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <>
        <h2>Our Jokes!</h2>

        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </>
    );
  }

  // USING AXIOS.INTERCEPTORS
  componentDidMount() {
    const endpoint = "http://localhost:3300/api/jokes";

    axios
      .get(endpoint)
      .then(res => {
        console.log("jokes", res.data);
        this.setState(() => ({ jokes: res.data }));
      })
      .catch(error => {
        console.error("jokes error", error.response);
      });
  }

  // NOT USING AXIOS.INTERCEPTORS
  // componentDidMount() {
  //   const endpoint = "http://localhost:3300/api/jokes";
  //   const token = localStorage.getItem("jwt");
  //   const config = {
  //     headers: {
  //       authorization: token
  //     }
  //   };

  //   axios
  //     .get(endpoint, config)
  //     .then(res => {
  //       console.log("jokes", res.data);
  //       this.setState(() => ({ jokes: res.data }));
  //     })
  //     .catch(error => {
  //       console.error("jokes error", error.response);
  //     });
  // }
}

export default requiresAuth(Jokes);

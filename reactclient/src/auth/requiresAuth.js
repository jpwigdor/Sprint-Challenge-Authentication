import React from "react";

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("jwt");
      const notLoggedIn = <div>Please Login to see our jokes</div>;

      return <> {token ? <Component {...this.props} /> : notLoggedIn} </>;
    }
  };
}

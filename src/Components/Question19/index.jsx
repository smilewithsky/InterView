import React from "react";
// Function component
function WelcomeFunction(props) {
    return <h1>Xin chào, {props.name}</h1>;
  }
  
  // Class component
class WelcomeClass extends React.Component {
    render() {
      return <h1>Xin chào, {this.props.name}</h1>;
    }
  }
  
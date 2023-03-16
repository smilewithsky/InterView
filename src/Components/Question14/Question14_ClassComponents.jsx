import React, { useState } from "react"; // useState là khai báo ở trên react

// class component
class Question14_ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // Khai báo state
    this.state = {
      name: "",
      age: 0,
    };
  }

  render() {
    return (
      <>
        name: {this.state.name}
        old: {this.state.old}
      </>
    );
  }
}

// function component
function Question14_FunctionComponent() {
  // Khai báo state ( useState )
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <>
      name: {name}
      age: {age}
    </>
  );
}

export { Question14_ClassComponent, Question14_FunctionComponent };

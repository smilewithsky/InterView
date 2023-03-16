import React from "react";
import { Question11, Question11_Class } from "./Components/Question11/Question11";
import Question14ClassComponents from "./Components/Question14/Question14_ClassComponents";
import Question14FunctionComponents from "./Components/Question14/Question14_FunctionComponents";
import Question20 from "./Components/Question20/question-20";
import { ParentClass, ParentFunction } from "./Components/Question25";
import Question39 from "./Components/Question39/Quesion39";
import { Question9Class, Question9Function } from "./Components/Question9/Question9";
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() { // hàm render
    return (
      <>
      <ParentClass />
      <ParentFunction />
        <Question14ClassComponents />
          <Question14FunctionComponents />
          <Question20  />
          <Question9Class />
          <Question9Function />
          <Question11 />
          <Question11_Class />
          <Question39 />
      </>
    );
  }
}

export default Example;

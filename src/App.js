import React from "react";
import Question9ClassComponents from "./Components/Question9/Question9_ClassComponents";
import Question9FunctionComponents from "./Components/Question9/Question9_FunctionComponents";
import Question12 from "./Components/Question12/question12";
import { ParentClass, ParentFunction } from "./Components/Question17";
import Question20 from "./Components/Question20/Quesion20";
import { Question6, Question6_Class } from "./Components/Question6/Question6";
import {
  Question5Class,
  Question5Function,
} from "./Components/Question5/Question5";
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    // hàm render
    return (
      <>
        <ParentClass />
        <ParentFunction />
        <Question9ClassComponents />
        <Question9FunctionComponents />
        <Question12 />
        <Question5Class />
        <Question5Function />
        <Question6 />
        <Question6_Class />
        <Question20 />
      </>
    );
  }
}

export default Example;

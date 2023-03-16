import React from "react";
import "./stylesheet.css";
const style = {
  width: "250px",
  height: "250px",
  background: "red",
};


const Question20 = () => {
  return (
    <>
      <div style={{ width: "250px", height: "250px", background: "red" }}>
        Question 20 inline
      </div>
      <div className="style-sheet">Question 20 Style Sheet</div>
      <div style={style}>Question 20 object</div>
    </>
  );
};

export default Question20;  
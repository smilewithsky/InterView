import React from "react";
import "./stylesheet.css";
const style = {
  width: "250px",
  height: "250px",
  background: "red",
};

const Question39 = () => {
  return (
    <>
      <div style={{ width: "250px", height: "250px", background: "red" }}>
        Question 39 inline
      </div>
      <div className="style-sheet">Question 39 Style Sheet</div>
      <div style={style}>Question 39 object</div>
    </>
  );
};

export default Question39;

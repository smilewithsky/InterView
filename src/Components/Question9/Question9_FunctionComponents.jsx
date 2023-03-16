import React from "react";
import { useState } from "react";

const Question9_FunctionComponents = () => {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    alert(`Your name is ${name}`);
  };

  return (
    <form onSubmit={() => handleSubmit()}>
      <div className="form-group">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input type="submit" />
      </div>
    </form>
  );
};

export default Question9_FunctionComponents;

import React, { Component } from 'react';


function ChildFunction(props) {
    return <h1>Xin chào, {props.name}</h1>;
  }
  
function ParentFunction() {
    const name = "Nguyen Van A";
    return (
      <div>
    {/* Comment 1 dòng */}
    {/* Comment 
        nhiều
        dòng 
    */}
        <ChildFunction name={name} />
      </div>
    );
  }
  


class ChildClass extends Component {
  render() {
    return <h1>Xin chào, {this.props.name}</h1>;
  }
}

class ParentClass extends Component {
  render() {
    const name = "Nguyen Van A";
    return (
      <div>
        <ChildClass name={name} />
      </div>
    );
  }
}


export {ParentClass , ParentFunction}
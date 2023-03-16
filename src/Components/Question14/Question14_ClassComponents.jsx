import React from 'react';

class Question14_ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // Khai báo state
    this.state = {
      name: '',
      age: 0
    };
  }

  render() {
    return <>
        name: {this.state.name}
        old: {this.state.old}
    </>
  }
}

export default Question14_ClassComponent
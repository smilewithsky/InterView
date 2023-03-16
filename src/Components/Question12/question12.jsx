import React, { useState } from "react";
// class component
class Question12 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // khởi tạo state
      count: 0,
    };
  }

  render() {
    // hàm render
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        {/* Mỗi khi click vào button nào thì React sẽ tiến hành cập nhật lại State sau 
        khi cập nhật State xong thì sẽ tiến hành update UI ( tương ứng với việc gọi lại hàm render() ) */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button> 
        {/* mỗi khi click button này thì giá trị count sẽ tăng lên 1 */}
      </div>
    );
  }
}

// function component
const Question12Function = () => {
  const [count, setCount] = useState();
  return (
    <>
      <p>You click {count} times </p>
      <button onClick={setCount(count + 1)}></button> 
    </>
  );
};

export { Question12, Question12Function };

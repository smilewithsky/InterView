import React from "react";
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
      </div>
    );
  }
}

export default Question12;

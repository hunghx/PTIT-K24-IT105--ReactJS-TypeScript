import React, { Component } from 'react';

type State = {
  count: number;
};

class Counter extends Component<{}, State> {
  state = {
    count: "hai",
  };

  toggle = () => {
    this.setState({
      count: this.state.count === "Một" ? "hai" : "Một",
    });
  };

  render() {
    return (
      <div>
        <p>Giá trị: {this.state.count}</p>
        <button onClick={this.toggle}>Chuyển</button>
      </div>
    );
  }
}
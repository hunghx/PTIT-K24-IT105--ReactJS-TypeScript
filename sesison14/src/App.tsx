import React, { Component } from 'react'
type PropTypes = {
  name: string
}

type StateTypes = {

}


export default class App extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes){
    super(props);
    this.state = {
    }
    console.log("1. Khởi tạo component bằng constructor");
  }
  componentWillMount(): void {
    console.log("2. Component sắp render ra dom");    
  }
  componentDidMount(): void {
    console.log("4. COmponent đã hiển thị ra dom");
  }

  componentWillReceiveProps(nextProps: Readonly<PropTypes>, nextContext: any): void {
    console.log("next props : ", nextProps);
    console.log("next cpntext: ", nextContext);
    console.log("5. component nhận props truyền xuống");
  }
  shouldComponentUpdate(nextProps: Readonly<PropTypes>, nextState: Readonly<StateTypes>, nextContext: any): boolean {
    if(nextProps.name === "Nguyen Van B"){
      return false;
    }
    return true;
    console.log("6. Xét điều kiện để component đc rerender");
  }
  componentWillUnmount(): void {
    console.log("7. Component sắp bị xóa khỏi dom");
  }

  render() {
    console.log("3. Gọi hàm render");
    return (
      <div>
        <h1>UI</h1>
        <p>{this.props.name}</p>
      </div>
    )
  }
}


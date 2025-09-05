import React, { Component } from 'react'

type PropTypes = {
    id: number,
    name: string,
    children: string
}
type StateTypes = {
    color: string,
    background: string
}

export default class Children extends Component<{}, StateTypes> {
    constructor(props: {}){
        super(props)
        this.state = {
            color: "red",
            background: "blue"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    //    alert('Bạn vừa bấm vào thẻ d
        this.setState({color:"black", background:"pink"})
    }
    // handleClick = ()=>{
    //      this.setState({color:"black", background:"pink"})
    // }

    handleMouseOver=()=>{
        console.log("Bạn đang di chuyển chuột qua thẻ div");
    }
  render() {
    console.log("hàm render của CHildren đc gọi");
    
    return (
      <div style={this.state} onClick={this.handleClick} onMouseOver={this.handleMouseOver}>
        {/* {this.props.children} */}
        Ấn vào đây
      </div>
    )
  }
}


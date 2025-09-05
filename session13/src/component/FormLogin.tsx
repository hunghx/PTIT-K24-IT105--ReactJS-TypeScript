import React, { Component, type ChangeEvent } from 'react'

type PropTypes= {
    username: string,
    password : string,
    changeState: Function
}
export default class FormLogin extends Component<PropTypes> {
    constructor(props:PropTypes){
        super(props);
        
    }
    // onchangeUsername =(e: ChangeEvent<HTMLInputElement>)=>{
    //     this.setState({...this.state,username : e.target.value})
    // }
    // onchangePassword =(e: ChangeEvent<HTMLInputElement>)=>{
    //     this.setState({...this.state,password : e.target.value})
    // }
   
  render() {
    const {username,password} = this.props;
    console.log(this.state);
    
    return (
      <div>
        <form action="" method="post">
            <label htmlFor="">Nhập tên đăng nhập</label>
            <input onChange={(e)=> this.props.changeState(e)} id="username" value={username} type="text"/> <br />

            <label htmlFor="">Nhập mật khẩu </label>
            <input onChange={(e)=> this.props.changeState   (e)} id="password" value={password} type="password"/>

            <button>Login</button>
        </form>
      </div>
    )
  }
}

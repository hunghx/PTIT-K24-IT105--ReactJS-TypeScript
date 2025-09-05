import { useState, type ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Children from './component/Children'


import React, { Component } from 'react'
import FormLogin from './component/FormLogin'

export default class App extends Component<{}, {value:string, isShow: boolean, username: string,
    password : string}> {
  constructor(props:{}){
    super(props);
    this.state = {
      value : "NGuyen Van A",
      username:"",
      password:"",
      isShow:false
    }
  }
  onclickBtn=()=>{
    this.setState({...this.state,value:"Nguyen Van B",isShow: !this.state.isShow})
  }
   handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
        const{id,value} = e.target;
        this.setState({...this.state,[id]:value})
    }
  render() {
    return (
       <>
      <Children id={10} name={this.state.value}>
        nội dung
      </Children>
      <button onClick={this.onclickBtn}>Change Prop</button>

      {this.state.isShow && <FormLogin username={this.state.username} password={this.state.password} changeState={this.handleChange} />
    }
      </>
    )
  }
}


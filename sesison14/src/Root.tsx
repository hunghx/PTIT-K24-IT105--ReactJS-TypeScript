import React, { Component } from 'react'
import App from './App';

export default class Root extends Component<{}, {name: string, isShow: boolean, count: number}> {
    constructor(props:{}){
        super(props);
        this.state = {
            name:"Nguyen Van A",
            isShow: true,
            count: 1
        }
        this.changeName = this.changeName.bind(this);
        this.changeName1 = this.changeName1.bind(this);
    }
    changeName(){
        this.setState({name: "Nguyen Van B"});
    }
    changeName1(){
        this.setState({name: "Nguyen Van C"});
    }

    changeCount=()=>{
         this.setState((pre)=>({...pre, count: pre.count+1}));
         this.setState((pre)=>({...pre, count: pre.count+1}));
         this.setState((pre)=>({...pre, count: pre.count+1}));
         this.setState((pre)=>({...pre, count: pre.count+1}));
         this.setState((pre)=>({...pre, count: pre.count+1}));
         
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
         {this.state.isShow && <App name={this.state.name}/>}
        <button onClick={this.changeCount}>Increment</button>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={this.changeName1}>Change Name1</button>
        <button onClick={()=>this.setState((pre)=>({...pre,isShow:false}))}>Hide App</button>
      </div>
    )
  }
}

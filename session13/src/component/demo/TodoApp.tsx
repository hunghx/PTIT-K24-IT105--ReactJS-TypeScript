import React, { Component } from 'react'
import TodoTable from './TodoTable'
export interface Todo{
    id : number,
    content : string,
    pip : string,
    status : boolean,
    creAt: Date
}

type StateType ={
    todos : Todo[]
}
const data: Todo[] = [
    {id: 1, content:"Đi chơi cầu lông", pip:"Võ Tài", status:false, creAt: new Date()},
    {id: 2, content:"Đi chơi bóng rổ", pip:"Gia Huy", status:true, creAt: new Date()},
    {id: 3, content:"Đi chơi PUBG", pip:"Hương", status:false, creAt: new Date()}
]
export default class TodoApp extends Component <{},StateType>{
    constructor(props:{}){
            super(props);
            this.state = {
                todos : data
            }
    }

    handleDelete = (id : number)=>{
        this.setState({todos: this.state.todos.filter(todo=> todo.id!== id)})
    }

  render() {
    return (
      <div>
        <TodoTable data={this.state.todos}  onDelete ={this.handleDelete}/>
      </div>
    )
  }
}

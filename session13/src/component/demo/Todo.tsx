import React, { Component } from 'react'
import type { Todo as TodoTypes } from './TodoApp'
import styles from './Todo.module.css'

export default class Todo extends Component<{data: TodoTypes, index: number, onDelete :Function}> {
    render() {
        console.log(styles);
        
        const {id, content, pip, status, creAt} = this.props.data;
        return (
            <tr className={styles.colorPrimary}>
                <th scope="row">{this.props.index+1}</th>
                <td>{content}</td>
                <td>{pip}</td>
                <td>{status?"Hoan thanh":"CHưa haon thanh"}</td>
                <td>{creAt.toDateString()}</td>
                <td>Sưa</td>
                <td onClick={()=>this.props.onDelete(id)}>Xoa</td>
            </tr>
        )
    }
}

// bảng hiển thị danh sách công việc
import React, { Component } from 'react'
import type { Todo as TodoTypes } from './TodoApp'
import Todo from './Todo'


export default class TodoTable extends Component<{data:TodoTypes[], onDelete:Function}> {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Tên công việc</th>
                            <th scope="col">Người thực hiện</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Ngày tạo</th>
                            <th scope="col" colSpan={2}>Thao tác</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.props.data?.map((todo:TodoTypes, index: number)=> <Todo key={todo.id} index={index} data={todo} onDelete ={this.props.onDelete}/>)}
                    </tbody>
                </table>

            </div>
        )
    }
}

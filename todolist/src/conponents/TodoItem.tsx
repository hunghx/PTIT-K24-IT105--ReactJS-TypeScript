import React from 'react'
import type { Todo } from '../utils/type'
type PropTypes = {
    item: Todo,
    handleChange: (id: number) => void,
    handleDelete: (id: number) => void,
    handleOpen : (todo: Todo)=> void
}
const TodoItem = ({item, handleChange,handleDelete, handleOpen}:PropTypes) => {
    
    return (
        <li className="list-group-item d-flex justify-content-between mb-2">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="checkDefault" checked={item.status} onChange={()=>handleChange(item.id)} />
                <label className={`form-check-label ${item.status?'text-decoration-line-through':''}`} htmlFor="checkDefault">
                    {item.content}
                </label>
            </div>
            <div>
                <div>
                    <button className="btn text-warning " onClick={()=>handleOpen(item)}><i className="fa-solid fa-pen-to-square" /></button>
                    <button className="btn text-danger" onClick={()=>handleDelete(item.id)}><i className="fa-solid fa-trash" /></button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem

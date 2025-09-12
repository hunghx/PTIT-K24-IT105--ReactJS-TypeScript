import React, { useState } from 'react'
import TodoItem from './TodoItem'
import type { Todo } from '../utils/type'
type PropTypes = {
    list: Todo[],
    handleChange: (id: number) => void,
    handleDelete: (id: number) => void,
    handleUpdate: (item: Todo)=> void
}


const ListTodo = ({ list, handleChange, handleDelete, handleUpdate }: PropTypes) => { // destructoring
    const [isOpen, setIsOpen] = useState(false)
    const [editTodo ,setEditTodo] = useState<Todo>();
    const handleOpenModal =(todo: Todo)=>{
        setIsOpen(true)
        setEditTodo(todo)
    }
    const handleCloseModal =()=>{
        setIsOpen(false);
    }
    const handleSaveChanges = ()=>{
        handleUpdate(editTodo as Todo);
        setIsOpen(false);
    }


    return (
        <>
            <ul className="list-group mt-3">
                {list.map(todo => <TodoItem handleOpen= {handleOpenModal} handleDelete={handleDelete} handleChange={handleChange} key={todo.id} item={todo} />)}
            </ul>
            {
                isOpen && (<div className='position-absolute ' style={{ width: "100vw", height: "100vh", top: "0", left: "0", backgroundColor: "#a4a1a1db" }}>
                    <div className="position-absolute" style={{ top: 0, minWidth: "60%", left: "50%", transform: "translateX(-50%)" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" onClick={()=> setIsOpen(false)} data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                     <input className="form-control me-2" value={editTodo?.content}  onChange={(e)=> setEditTodo({...editTodo, content: e.target.value} as Todo)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={()=> setIsOpen(false)}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={()=> handleSaveChanges()}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </>

    )
}

export default ListTodo

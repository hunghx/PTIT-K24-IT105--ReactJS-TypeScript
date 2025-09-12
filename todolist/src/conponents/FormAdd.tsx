import React, { useState, type FormEvent } from 'react'

const FormAdd = ({handleAdd}: {handleAdd: (content:string)=> void}) => {
       const [content , setContent] = useState("")
       const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAdd(content);
       }
    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit   }>
            <input className="form-control me-2" value={content} onChange={(e)=> setContent(e.target.value)}  type="search" placeholder="Nhap cong viec" aria-label="Search" />
            <button className="btn btn-success" type="submit">Add</button>
        </form>
    )
}

export default FormAdd

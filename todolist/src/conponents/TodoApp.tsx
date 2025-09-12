import React, { useEffect, useMemo, useState } from 'react'
import Form from './Form'
import ListTodo from './ListTodo'
import { initData } from '../utils/data'
import type { Todo } from '../utils/type'
import FormAdd from './FormAdd'

const TodoApp = () => {
    const [data, setData] = useState<Todo[]>(JSON.parse(localStorage.getItem('data')||JSON.stringify([])))
    const [text, setText] = useState("")


    const handleChangeSearchInput = (input : string)=>{
        setText(input)
    }
    // sau khi load component thi lay du lieu
    // useEffect(()=>{
    //     // // let dataLocal = localStorage.getItem("data")
    //     // console.log(initData);
        
        // localStorage.setItem("data", JSON.stringify(initData))
    //     // // if(dataLocal){
    //     setData(JSON.parse(localStorage.getItem('data')))
    //     // // }
    // }, [])
    useEffect(()=>{
        // local cap nhat
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])

    const handleChangeStatus = (id:number)=>{
        console.log("ID item change =>>>", id);
        
        setData(data.map(todo=>{
            if(todo.id == id){
                return {...todo, status: !todo.status}
            }
            return todo;
        }))

    }

    const handleDelete =(id: number)=>{
        if(!confirm('Ban co chac chan muon xoa ko')){
            return;
        }
        console.log("ID item delete =>>>", id);
        setData(data.filter(todo=> todo.id != id));
    }

    const handleAdd = (content: string)=>{
        // logic id tu tang 
        const maxId = Math.max(...data.map(todo=> todo.id))
        const newTodo = {
            id : maxId == -Infinity?1:maxId+1,
            content ,
            status: false
        }
        setData([...data, newTodo ])
    }

    const handleUpdate = (item: Todo) =>{
        setData(data.map(todo=>{
            if(todo.id == item.id){
                return item;
            }
            return todo;
        }))
    }
    
    

    const totalTasksFinal = useMemo(()=>{
        return data.filter(todo=> todo.status).length
    }
,[data])

    const filterData = useMemo(()=>{
        return data.filter(todo=> todo.content.toLowerCase().includes(text.toLowerCase()))
    }, [text,data])

    return (
        <div className='container-fluid py-2 px-3 d-flex justify-content-center'>
            <div className="border border-1 rounded  p-2 mt-5" style={{ minWidth: "80%" }}>
                <h1 className='text-center m-3'>Danh sách công việc</h1>
                <Form text={text} handleChange={handleChangeSearchInput}/>
                <br />
                <FormAdd handleAdd={handleAdd}/>
                <ListTodo handleUpdate={handleUpdate} list={filterData} handleChange={handleChangeStatus} handleDelete={handleDelete}/>
                <p className='p-2' style={{backgroundColor: "#f2f2f2"}}>Công việc đã hoàn thành : <strong>{totalTasksFinal}/{data.length}</strong></p>
            </div>
        </div>
    )
}

export default TodoApp

import React, { useState } from 'react'

const Form = (props : {text: string, handleChange :(text:string)=> void}) => {
 
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" value={props.text} onChange={(e)=> props.handleChange(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
        </form>
    )
}

export default Form

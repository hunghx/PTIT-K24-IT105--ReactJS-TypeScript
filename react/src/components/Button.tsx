// Class component 

import React, { Component } from 'react'
import './Buttton.module.css'

export default class Button extends Component {
    render() {
        let isActive = true;
        let arr = [1, 2, 3, 4, 5]
        return (
            <div>
                {/* Tại sao dùng map để render */}
                {arr.map((num, id) => <li className='item' key={id}>{num * num}</li>)}



                <div>
                    {/* Hello world */}
                    <div className="awesome" style={{ border: '1px solid red' }}>
                        <label htmlFor="name">Enter your name: </label>
                        <input type="text" id="name" />
                    </div>
                    <p>Enter your HTML here</p>
                </div>

            </div>
        )
    }
}


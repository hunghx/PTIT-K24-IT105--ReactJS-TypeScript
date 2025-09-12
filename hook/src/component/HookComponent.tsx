import React, { useImperativeHandle, useRef, useState } from 'react'
import FirstComponent from './FirstComponent';

const HookComponent = () => {
    // const [count, setCount] = useState(1);
    // const ref = useRef(10);
    // const inputRef = useRef(null);

    // const handleInputChange = () => {    
    //     const input = inputRef.current as HTMLInputElement | null;
    //     console.log(input?.value);
    // }

    return (
        <div>
            {/* <h1>use Ref</h1>
            <p>Số lần bấm vào nút Click : {count}</p>
            <input type='text' ref={inputRef} />

            <button type="button" onClick={handleInputChange}>Click</button> */}

            <FirstComponent count ={1}/>

        </div>
    )
}

export default HookComponent

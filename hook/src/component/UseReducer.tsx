import React, { useReducer } from 'react'

const reducer = (state: number, action: string) => {
    console.log(action);
    
    switch (action) {
        case "INCRE":
            return state + 1;
        case "DECRE":
            return state - 1;
        case "DOUBLE":
            return state * 2;
        case "POW":
            return state * state
        default:
            return state
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <p>count : {state}</p>
            <button onClick={()=> dispatch("INCRE")}> Tang</button>
            {/* <button onClick={()=> dispatch("DECRE")}> Giam</button>
            <button onClick={()=> dispatch("DOUBLE")}> X2</button> */}
        </div>
    )
}

export default UseReducer

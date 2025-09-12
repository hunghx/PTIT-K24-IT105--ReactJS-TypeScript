import React, { memo } from 'react'

const Children = (props : {name : string, hanclick: ()=>void, changeName: ()=> void}) => {
    const handleClick = ()=>{
        props.hanclick();
    }
    const changeName = ()=>{
        props.changeName();
    }
    console.log("render conponent con");
    
  return (
    <div>
        <p>{props.name}</p>
      <button onClick={handleClick}> Click</button>
      <button onClick={changeName}> ChangeName</button>
    </div>
  )
}

export default memo(Children);

import React, { useCallback, useState } from 'react'

type Propstypes = {
    title: string
}

const UseStateComponent = (props: Propstypes) => {
    const {title} = props;
    // Usestate
   const [count, setCount]=  useState(1);
   const [name, setName]=  useState("Nguyen Van A");
   const handleClick = ()=>{
    setCount(pre => pre+1);
    // setName(pre=> pre + count);
   }

   console.log("Tạo lại hàm handleclick");
   const handleClickCopy =  useCallback(()=>{
    console.log("Tạo hàm handleClick Copy");
    
   }, [count])
   
  return (
    <div>
    <h1>CHào mừng bạn : {name}</h1>
      <p>Số lần bấm vào nút Click : {count}</p>
    
      <button type="button" onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseStateComponent

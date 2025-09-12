import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {
    const [count , setCount] = useState(0); 
    const [count1 , setCount1] = useState(0); 
    // useEffect 
    // useEffect(()=>{
    //     // hàm call back được gọi sau mỗi lần component render / re-render
    //     console.log("Gọi useEffect");
    //     // componentDidMount DidUpDate
        
    // });
    // useEffect(()=>{
    //     // hàm call back được gọi sau khi component đc mount (1 lần duy nhất)
    //     console.log("Gọi useEffect");
    
        
    // },[]);

    useEffect(()=>{
        // hàm call back được gọi sau khi các phụ thuộc được khai báo trong mảng thay đổi
        console.log("Gọi useEffect");   
    },[count]);


  return (
    <div>
      <h1>Use Effect</h1>
       <p>Số lần bấm vào nút Click : {count}</p>
    
      <button type="button" onClick={()=> setCount(count+1)}>Click</button>
       <p>Số lần bấm vào nút Click : {count1}</p>
    
      <button type="button" onClick={()=> setCount1(count1+1)}>Click</button>
    </div>
  )
}

export default UseEffectComponent

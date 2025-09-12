import { createContext, useCallback, useContext, useMemo, useState , } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateComponent from './component/UseStateComponent'
import UseEffectComponent from './component/UseEffectComponent'
import HookComponent from './component/HookComponent'
import Children from './component/Children'
import UseReducer from './component/UseReducer'
export const Theme = createContext({count:0, name :""});
function App() {
  const [items , setItems] = useState([{id:1, price : 100},{id:2, price : 1000}])
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Nguyen Van B")

  const total = items.reduce((prev, item)=> prev + item.price, 0);
  const totalMeno = useMemo(()=>{
    return items.reduce((prev, item)=> prev + item.price, 0);
  }, [items]) 

  const handleClick = useCallback(()=>{
    setCount(count+1);
  },[]);
  const handleChangeName = useCallback(()=>{
    setName("Nguyen Van A");
  },[]);
  return (
    <>
      {/* <UseStateComponent title={"Đây là UseState"}/> */}
      {/* <UseEffectComponent/> */}
      {/* <Theme.Provider value={{count,name}}>
        <HookComponent/>
      </Theme.Provider> */}
      {/* <p>Count : {count}</p> */}
      {/* <Children hanclick= {handleClick} changeName= {handleChangeName} name={name}/> */}
      <UseReducer/>
    </>
  )
}

export default App

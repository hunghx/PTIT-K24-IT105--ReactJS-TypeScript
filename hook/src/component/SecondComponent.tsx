import React, { useContext } from 'react'
import { Theme } from '../App';

const SecondComponent = ({count}:{count: number}) => {
    const context = useContext(Theme); 
    console.log(context);
    
  return (
    <div>
      {count}
    </div>
  )
}

export default SecondComponent

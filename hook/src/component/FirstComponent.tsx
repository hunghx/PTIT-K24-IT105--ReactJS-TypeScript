import React from 'react'
import SecondComponent from './SecondComponent'

const FirstComponent = ({count}: {count : number}) => {
  return (
    <div>
      <SecondComponent count={count}/>
    </div>
  )
}

export default FirstComponent

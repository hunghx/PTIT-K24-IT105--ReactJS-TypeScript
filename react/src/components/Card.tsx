// function component 
import React from 'react'
import Button from './Button'

const Card = () => {


    const styles = {
        color : "red",
        backgroundColor: "black"
    }
  return (
    // trả về 1 element duy nhấy
    <>
        <li className="item" style={styles}>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>

        <Button/>
    </>
  )
}

export default Card

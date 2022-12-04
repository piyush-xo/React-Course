import React from 'react'

export default function FunctionClick() {
    function clickHandler(){
        console.log('Button Clicked')
    }
    return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

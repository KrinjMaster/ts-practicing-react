import React, { useState, useEffect, useReducer, useRef } from 'react'

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0)

  function changeValue(value: number) {
    setCount(currentAmount => {
      return currentAmount + value
    })
    setCount(currentAmount => {
      return currentAmount + value
    })
  }

  return (
    <div className='flex flex-row justify-center items-center'>
      <button onClick={() => changeValue(1)} className='border rounded mr-3'>+</button>
      <h1>Value: {count}</h1>
      <button onClick={() => changeValue(-1)} className='border rounded ml-3'>-</button>
    </div>
  )
}

export default Counter
  

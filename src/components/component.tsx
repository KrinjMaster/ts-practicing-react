import React, { useState, useEffect, useReducer, useRef } from 'react'

export const Component: React.FC = () => {

  const [button, setButton] = useState(0)
  
  useEffect(() => {
    console.log(`Button state is ${button}`)
  }, [button])

  const changeBtnTrue = () => {
    return setButton(button => button + 1)
  }

  const changeBtnFalse = () => {
    return setButton(button => button - 1)
  }

 

  return (<>
    <div>
      <h1>State: {button}</h1>
      <button onClick={changeBtnTrue}>to True</button>
      <button onClick={changeBtnFalse}>to False</button>
    </div>
  </>
  )
}

export default Component


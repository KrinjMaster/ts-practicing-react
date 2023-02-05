import React, { useState, useEffect, useReducer, useRef } from 'react'

export const Component: React.FC = () => {

  const [count, setCount] = useState(0)

  const Increasement = () => {
    return setCount(count => count + 1)
  }


  return (<>
    <div>
      <h1>Clicked: {count}</h1>
      <button onClick={Increasement}>Click</button>
    </div>
  </>
  )
}

export default Component


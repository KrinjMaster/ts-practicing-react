import React,  { useEffect, useReducer, useRef, useState } from 'react'

const UseReducer: React.FC = () => {
  const [value, setValue] = useState('')
  const InputRef = useRef<HTMLInputElement | null>(null)
  
  useEffect(() => {
      InputRef.current?.focus()
  },[])

  return (<>
    <h1>Value: {value}</h1>
    <input type="text" ref={InputRef} onChange={(event) => setValue(event.target.value)}/>
  </>)
}

export default UseReducer

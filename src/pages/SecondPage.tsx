import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SecondPage = () => {
    const [message, setMessage] = useState("")
    const { number } = useParams()

  useEffect(() => {
    if (number) {
      setMessage(`number is ${number}`)
    } else {
      setMessage(`number wasnt provide`)
    }
  },[])

  return (
    <div>
        <h1>SecondPage</h1>
        <p>{message}</p>
    </div>
  )
}

export default SecondPage
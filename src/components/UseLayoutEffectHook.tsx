import { useEffect, useLayoutEffect } from "react"

const UseLayoutEffectHook = () => {
  useEffect(() => {
    console.log('Use Effect')
  },[])
  
  useLayoutEffect(() => {
    console.log('Use Layout Effect')
  }, [])


  return (
    <div></div>
  )
}

export default UseLayoutEffectHook 
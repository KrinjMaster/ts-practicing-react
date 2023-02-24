import { MutableRefObject, useRef } from 'react';
import Button from './button';

const UseImperativeHandleHook = () => {
  const ButtonRef: any = useRef(null)

  return (
  <div className='flex flex-col w-[250px]'>
    <button className='border-2 border-black mb-5' onClick={() => ButtonRef.current.alterToggle()}> Button from parent</button>
    <Button ref={ButtonRef}/>
  </div>
  )
}

export default UseImperativeHandleHook
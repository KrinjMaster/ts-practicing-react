import { forwardRef, useImperativeHandle, useState } from "react"

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    }))
    
  return (<>
    <button className="border-2 border-black">Button from child</button>
    {toggle && <span>Toggle</span>}
  </>
  )
})

export default Button
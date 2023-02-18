import { useRef } from "react"

const FormInput = (): JSX.Element => {
    const userNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    function sendInfo() {
        if (userNameRef.current! && emailRef.current!) {
            console.log(`${userNameRef.current.value} ${emailRef.current.value}`)
        }
    }

    return (
    <div className="flex flex-col justify-center items-center">
        <h1>User Name:</h1>
        <input type="text" placeholder="User Name here!" ref={userNameRef} className="text-center border"/>
        <h1>Email:</h1>
        <input type="text" placeholder="Email here!" ref={emailRef} className="text-center border"/>
        <button className="border mt-4 rounded bg-orange-500 w-1/6" onClick={sendInfo}>Submit info</button>
    </div>
    )
}

export default FormInput
import { useState } from "react";

import { app } from "./Data";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Signin() {

    const Auth = getAuth(app)

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const HandleEmail = (e) => {

        setEmail(e.target.value)
    }

    const HandlePassword = (e) => {

        setPassword(e.target.value)
    }

    const HandleSignin = () => {
        
        setEmail("")
        setPassword("")

        signInWithEmailAndPassword(Auth,email,password).then((res)=>{
            console.log("succfully")
        }).catch((erro)=>{
            console.log("errre")
        })
    }

    return (
        <>
            <label>Emaill</label>
            <input  onChange={HandleEmail}  placeholder="Email...." value={email}></input><br></br>

            <label>password</label>
            <input onChange={HandlePassword} placeholder="password" value={password}></input><br></br>

            <button onClick={HandleSignin}>signin</button>

        </>
    )
}
export default Signin;
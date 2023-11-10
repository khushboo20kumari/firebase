import { useState } from "react";

import { app } from "./Data";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
    const [errorMessage, setErrorMessage] = useState("");

    const Auth = getAuth(app)

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const HandleEmail = (e) => {

        setEmail(e.target.value)
    }

    const HandlePassword = (e) => {

        setPassword(e.target.value)

        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;

        if (!password.match(lowerCase)) {
            setErrorMessage("Password should contains lowercase letters!")
        }
        else if (!password.match(upperCase)) {
            setErrorMessage("Password should contain uppercase letters!")
        }
        else if (!password.match(numbers)) {
            setErrorMessage("Password should contains numbers also!")
        } else if (password < 10) {
            setErrorMessage("Password length should be more than 10.")
        } else {
            setErrorMessage("Password is strong!")
        }

    }

    const HandleSignin = () => {

        setEmail("")
        setPassword("")



        signInWithEmailAndPassword(Auth, email, password).then((res) => {
            console.log("succfully")
        }).catch((erro) => {
            console.log("errre")
        })
    }

    return (
        <>
            <label>Emaill</label>
            <input onChange={HandleEmail} placeholder="Email...." value={email}></input><br></br>

            <label>password</label>
            <input onChange={HandlePassword} placeholder="password" value={password}></input><br></br>

            <button onClick={HandleSignin}>signin</button>

        </>
    )
}
export default Signin;
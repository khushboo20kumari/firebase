import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Data"
import { useState } from "react";
function Signup() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    const [password,setPassword]=useState("")
    const [mobail,setMobail]=useState("")

    const athu = getAuth(app)

    const HandleName=(e)=>{
        setName(e.target.value)
    }

    const HandlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const HandleMobail=(e)=>{
        setMobail(e.target.value)
    }


    const signup = () => {

        createUserWithEmailAndPassword(
            athu, "khushboo.kumari@navgurukul.org",
            "Navgurukul@123"
        ).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.error(error);
        });
    }


    return (
        <>
            <p>Signup Page</p>
            <label>name</label>
            <input onChange={HandleName} label="name"></input><br></br>

            <label>Email</label>
            <input onChange={HandleEmail} label="Email"></input>

            <label> password</label>
            <input onChange={HandlePassword} label="password"></input>

            <leble>mobail number</leble>
            <input onChange={HandleMobail} leble="mobail number"></input>
            <button onClick={signup}>submit</button>



        </>
    )
}
export default Signup;
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Data"
import { useState } from "react";
function Signup() {

    // const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")
    // const [mobail, setMobail] = useState("")

    const athu = getAuth(app)

    const HandlePassword = (e) => {
        setPassword(e.target.value)
    }

   

    const HandleEmail = (e) => {
        setEmail(e.target.value)
    }

    const signup = () => {
        setEmail("")
       
        setPassword("")

        createUserWithEmailAndPassword(
            athu,email, password
        ).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.error(error);
        });
    }


    return (
        <>
            <p>Signup Page</p>
           
            <label>Email</label>
            <input onChange={HandleEmail} value={email} label="Email"></input><br></br>

            <label> password</label>
            <input onChange={HandlePassword} value={password} label="password"></input><br></br>
            <button onClick={signup}>submit</button><br></br>



        </>
    )
}
export default Signup;
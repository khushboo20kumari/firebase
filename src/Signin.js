import { useState } from "react";

function Signin(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const HandleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const HandlePassword=(e)=>{
        setPassword(e.target.value)
    }



    return(
        <>
          <label onChange={HandleEmail} value={email}>Name</label>
          <input placeholder="Name"></input><br></br>

          <label>password</label>
          <input onChange={HandlePassword} placeholder="password" value={password}></input><br></br>

          <button>signin</button>

        </>
    )
}
export default Signin;
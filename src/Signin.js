import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { app } from "./Data";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Card,Avatar,Box,Typography,Button,TextField} from "@mui/material"

function Signin() {
    
    const [errorMessage, setErrorMessage] = useState("");

    const Auth = getAuth(app)

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const nav=useNavigate("")
    const HandleSignup = () => {

        nav("/signup")

    }

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
            <center>
                <Card sx={{ maxWidth: 300, marginTop: "100px", background: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", color: "white" }} className='signup'>
                    <Avatar sx={{ m: "20px" }} src="/broken-image.jpg" />
                    <Typography>Sigin</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>

                            <TextField
                                label="Password"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandlePassword} placeholder="password" value={password}
                            />

                            <TextField

                                label="Email"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandleEmail} placeholder="Email...." value={email}
                            />

                            <p style={{ color: "red" }}>{errorMessage}</p>

                        </div>

                        <Button sx={{ width: "70%", borderRadius: "20px", m: "20px" }} variant='contained' onClick={HandleSignin}>Save</Button>

                      <Button> <Link to="/signup">Signup</Link></Button>
                    </Box>
                </Card>
                <Outlet /> 
            </center >

        </>
    )
}
export default Signin;
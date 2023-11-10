// import { getDatabase, set, ref } from "firebase/database";
// import { app } from "./Data";
import './App.css';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { app } from "./Data";

import Signup from "./Signup";

import Signin from "./Signin";

import { useEffect, useState } from "react";
import Navbar from './Navbar';
function App() {
  const Athu = getAuth(app)

  const [user, setUser] = useState(null)

  useEffect(() => {

    onAuthStateChanged(Athu, user => {
      if (user) {
        setUser(user)
        // it means user is already logged

      }
      else {
        setUser(null)
        // it mense user is not logged user need to signin or signup
      }
    })


  }, [])

  const HandleLogout = () => {
    signOut(Athu)

  }
  return (
    <>
      {user !== null ? (
        <>
          <p>hello {user.email}</p>
          <button onClick={HandleLogout}>logout</button>
        </>
      ) : (
        <>

          <BrowserRouter>

            <Routes>
              <Route path="/" element={<Navbar/>}>

                <Route path='/sigin' element={<Signin/>}></Route>

                <Route path='/signup' element={<Signup/>}/>

              </Route>
            </Routes>
          </BrowserRouter>

        </>
      )}

    </>

  )
}
export default App;




// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from react-router-dom

// function App() {
//     return (
//         <div className="App">
//             <Router>

//                 <Routes>
//                     <Route path="/" element={<Home />}></Route>
//                     <Route path="/about" element={<About />}></Route>
//                     <Route path="/contact" element={<Contact />}></Route>
//                 </Routes>
//             </Router>

//         </div>
//     )
// }
// export default App;

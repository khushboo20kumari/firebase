// import { getDatabase, set, ref } from "firebase/database";
// import { app } from "./Data";
// import './App.css';
// const db = getDatabase(app)
// function App() {

//   const putData = () => {

//     set(ref(db, "users/khushboo"), {
//       id: "1",
//       name: "khushboo",
//       age: "16"
//     })

//   }

//   return (

//     <div className="App">
//       <button onClick={putData}>add</button>
//     </div>

//   );

// }

// export default App;



import { getAuth, onAuthStateChanged ,signOut} from "firebase/auth";

import { app } from "./Data";

import Signup from "./Signup";

import Signin from "./Signin";

import { useEffect, useState } from "react";

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

  const HandleLogout=()=>{
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
          <Signin />
          <Signup />
        </>
      )}

    </>

  )
}
export default App;

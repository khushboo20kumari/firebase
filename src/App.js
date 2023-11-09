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

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Data"
function App() {

  const athu = getAuth(app)
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

    <div className="App">
      <p>Signup with firebase</p>
      <button onClick={signup}>add</button>
    </div>

  )
}
export default App;

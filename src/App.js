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

import Signup from "./Signup";
function App() {
  return (

    <div className="App">
      <Signup/>
    </div>

  )
}
export default App;

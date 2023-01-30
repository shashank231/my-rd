import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import { Todo } from './App-1/components/Todo';
import { Products } from './Prods/components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;

// import './App.css';
// import { useState, useEffect } from "react";
// import axios from "axios";


// function App() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//    async function getAllStudent(){
//     try{
//       const students = await axios.get("http://127.0.0.1:8000/api/student/");
//       console.log(students.data);
//       setStudents(students.data);
//     }catch(err){
//       console.log(err);
//     }
//    } 
//    getAllStudent();
//   }, []);


//   return (
//     <div className="App">
//       <h1>Connect React with Django</h1>
//       {
//         students.map((stu, i) => {
//           return (
//             <h2 key={i}>
//               {stu.name}
//             </h2>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default App;




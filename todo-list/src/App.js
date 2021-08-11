// import react, {useEffect, useState} from 'react';
// import './App.css';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';

// const LOCAL_STORAGE_KEY = "react-todo-list-todos";

// function App() {
//   const [todos, setTodos] = useState([]);

//   // this one loads the todos from local storage
//   useEffect(() => {
//     const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//     if (storageTodos){
//       setTodos(storageTodos)
//     }
//   }, []);

  
//   // this saves the todos into local storage
//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
//   }, [todos]);

//   function addTodo(todo){
//     setTodos([todo,...todos]);
//   }

//   function toggleComplete(id){
//     setTodos(
//       todos.map(todo => {
//         if(todo.id === id){
//           return {
//             ...todo,
//             completed: !todo.completed
//           }
//         }
//         return todo;
//       })
//     )
//   }

//   function removeTodo(id){
//     setTodos(todos.filter(todo => todo.id !== id));

//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>My To-do List</p>
//         <TodoForm addTodo = {addTodo} />
//         <TodoList todos = {todos} toggleComplete = {toggleComplete} removeTodo = {removeTodo}/>
//       </header>
//     </div>
//   );
// }

// export default App;


// this is now starting from the other tutorial ill try to merge later

import React from "react"
import "./App.css"


// components
import InputTodo from "./components/InputTodo"
import CreateUser from "./components/CreateUser"

function App(){
  return( 
    <div className = "App">
      <header className = "App-header"> 
      {/* <InputTodo/> */}
      <CreateUser/>
      </header>
    </div>
    
 
  )
}

export default App
import React, {useState} from "react";
import {v4 as uuid} from "uuid"

function TodoForm({ addTodo }){
    const[todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function inputChange(e){
        setTodo({...todo, task:e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({ ...todo, id:uuid()});
            setTodo({...todo, task: ""});
        }
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input
                name = "task"
                type = "text"
                value = {todo.task}
                onChange = {inputChange}
            />
            <button type = "submit" > submit </button>
        </form>
    );

}
export default TodoForm
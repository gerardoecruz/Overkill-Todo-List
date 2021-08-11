import React, {Fragment, useState} from "react";
import axios from "axios"

function InputTodo() {

    const [description, setDescription] = useState("");

    // i know this works but i want to use axios

    // const onSubmitForm = async(e) => {
    //     e.preventDefault();
    //     try{
    //         const body = {description};
    //         const response = await fetch("http://localhost:5000/todos",{
    //             method: "POST",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(body)
    //         })
    //         console.log(response)
    //     }catch(err){
    //         console.log(err.message)
    //     }
    // }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            axios({
                method: "post",
                url: "http://localhost:5000/todos",
                data: {
                    description
                },
            }).then((res => console.log(res.data)))
        }catch(err){
            console.log(err.message)
        }
    }


    return(
        <Fragment>
            <h1> INPUT TODO </h1>
            <form onSubmit = {handleSubmit}>
                <input 
                type = "text" 
                className = "form-control" 
                value = {description}
                onChange = {e => setDescription(e.target.value)} // this should be changed into a function later
                />
                <button> Add </button>
            </form>
        </Fragment>
        
    );

}
export default InputTodo
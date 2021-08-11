import React from "react"

function CreateUser(){

    return(
        <div>
            <p> Make an Account</p>
            <form>
                <div>
                <label style={{ color: 'white' }}>Username: </label>
                <input type = "text" 
                className = "form-control">
                </input>
                </div>

           
                <div>
                <label style={{ color: 'white' }}>Password: </label>
                <input type = "text" 
                className = "form-control">
                </input>

                </div>
                

                <button> Create Account</button>
            </form>
        </div>
    )
}

export default CreateUser
import React, {useState} from "react"
import axios from "axios"

function UserLogin(){

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            axios({
                method: "post",
                url: "http://localhost:5000/login",
                data: {
                    username: user,
                    password: pass
                }
            })
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <div>
            <p> Login </p>
            <form onSubmit = {handleSubmit}>
                <div>
                <label style={{ color: 'white' }}>Username: </label>
                <input type = "text" 
                className = "form-control"
                value = {user}
                onChange = {e => setUser(e.target.value)}
                />                
                </div>

           
                <div>
                <label style={{ color: 'white' }}>Password: </label>
                <input type = "password" 
                className = "form-control"
                value = {pass}
                onChange = {e => setPass(e.target.value)}
                />
                </div>
                

                <button> Create Account</button>
            </form>
        </div>
    )
}

export default UserLogin
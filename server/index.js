const express = require('express');
const cors = require("cors");
const app = express();
const pool = require("./db")

app.use(cors());
app.use(express.json());

// routes

// add a todo
app.post("/todos", async(req,res) => {
    try{
        const {description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
        res.json(newTodo.rows[0])
    }catch(err){
        console.error(err.message)
    }
})

// get all todos
app.get("/currentTodos", async(req,res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    }catch(err){
        console.log(err.message)
    }
})

// get a single todo

app.get("/todos/:id", async(req,res) => {
    try{
        const {id} = req.params
        
        const singleTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        res.json(singleTodo.rows)
        
    }catch(err){
        console.log(err.message)
    }
})

//update a todo

app.put("/todos/:id", async(req,res) => {
    try{
        const {id} = req.params
        const {description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.json("Todo was updated")
        
    }catch(err){
        console.log(err.message)
    }
})

// delete a todo

app.delete("/todos/:id", async(req,res) => {
    try{
        const {id} = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        res.json("Todo was deleted")
        
    }catch(err){
        console.log(err.message)
    }
})

// creating users routes
app.post("/createUser", async(req, res) => {
    try{
        const {username, password} = req.body;
        console.log(username)
        console.log(password)
        const newUser = await pool.query("INSERT INTO users (user_id, password) VALUES($1, $2) RETURNING *", [username, password])
        res.json(newUser.rows[0])
    }catch(err){
        console.log(err.message)
    }
})

// trying to do a login
app.post("/login", async(req,res) => {
    try{
        const {username, password} = req.body;
        console.log(username)
        console.log(password)
        const qpass = await pool.query("SELECT password FROM users WHERE user_id = $1", [username])
        if(password == qpass.rows[0].password ){
            console.log("Welcome Back!")
        }
        else{
            console.log("Wrong password")
        }
        
        
    }catch(err){
        console.log(err.message)
    }
})

app.listen(5000, () => {
    console.log("running on port 5000")
})
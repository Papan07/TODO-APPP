const express = require("express");

const app = express();

app.use(express.json());

const dotenv = require("dotenv");

dotenv.config();

const cors = require("cors");

app.use(cors())

let todos = [
    {
        title:"Buying groceries",
        status:false
    }
];

app.get("/",(request,response)=>{
    try {
        response.status(200).send({msg:"This is todo backend"});
    }
    catch (error){
        response.status(500).send({msg:"error occured",error});
    }
})

app.get("/get-todo",(request,response)=>{
    try{
        response.status(200).send({msg:"Successful",todos:todos});
    }
    catch(error){
        response.status(500).send({msg:"error occured",error});
    }
})

app.post("/post-todo",(request,response)=>{
    try {
        const {title} = request.body;
        console.log(title);
        if(title == ""){
            response.status(200).send({msg:"todo input was empty"});
        }

        const newTodo = {
            title:title,
            status:false
        }

        todos.push(newTodo);

        response.status(200).send({msg:"todo created successfully"});
    }
    catch (error){
        response.status(500).send({msg:"error occured",error});
    }
})

app.listen(8080,()=>{
    console.log("connected to server successfully")
})
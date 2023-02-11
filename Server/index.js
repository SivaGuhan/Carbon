const express=require("express");

const app=express();

const bodyParser=require("body-parser");

const cors=require("cors");

const mongoose =require('mongoose')

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://SivaGuhan:SivaGuhan@cluster0.bxbffps.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true});

const Cont=require("./models/profile")

app.use(cors());

app.use(bodyParser.json());

app.post("/add",async(req,res)=>{
    const {username,role,preference,loc,email}=req.body;
    const cont=new Cont({
        username,role,preference,loc,email
    })
    cont.save().then(console.log('saved'));
})

app.listen(5000,()=>{
    console.log("Server started");
})
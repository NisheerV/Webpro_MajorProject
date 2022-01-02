const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User=require('./model/userschema');
app.use(require('./router/auth'));
// app.use(require('./getrequests/empget'));

const PORT = process.env.PORT;

const middleware=(req,res,next)=>{
    console.log("hello my middleware");
    next();
} 

app.get('/',(req,res) =>{
    res.send(`hello server`);
});
app.get('/dept',(req,res) =>{
    res.send(`hello server dept`);
});
app.get('/emp',middleware,(req,res) =>{
    res.send(`hello server emp`);
});
app.get('/update',middleware,(req,res) =>{
    res.send(`hello server update`);
});
// app.get('/reg',(req,res) =>{
//     res.send(`hello server reg`);
// });

app.listen(PORT,()=>{
    console.log(`server .here on ${PORT}`);
});
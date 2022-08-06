//Npm Initilization
const express = require("express");
const cors = require("cors");
const app = express();
const morgan=require('morgan')

const port=process.env.PORT||3000;

//Cors
const corsOptions = {origin: "*",credentials: true,  optionSuccessStatus: 200,};
//access-control-allow-credentials:true
app.use(cors(corsOptions)); // Use this after the variable declaration

//Server Creation
app.listen(port , () => console.log("server running....."));

// DB Connection
const connection = require("./DB/mongoose");

//Middleware
app.use(express.json());
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("run....")
})

//router
const test1=require('./Routes/router0')
app.use('/router0',test1)

const test2=require('./Routes/router1')
app.use('/router1',test2)


const test3=require('./Routes/router2')
app.use('/router2',test3)

const test4=require('./Routes/router3')
app.use('/router3',test4)




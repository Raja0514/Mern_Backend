//Npm Initilization
const express = require("express");
const cors = require("cors");
const app = express();
const morgan=require('morgan')

//Cors
const corsOptions = {origin: "*",credentials: true,  optionSuccessStatus: 200,};
//access-control-allow-credentials:true
app.use(cors(corsOptions)); // Use this after the variable declaration

//Server Creation
app.listen(process.env.PORT||8080, () => console.log("server running....."));

// DB Connection
const connection = require("./DB/mongoose");

//Middleware
app.use(express.json());
app.use(morgan('dev'))

//router
const router=require('./Routes/router0')
app.use('/router0',router)

const router1=require('./Routes/router1')
app.use('/router1',router1)


const router2=require('./Routes/router2')
app.use('/router2',router2)

const router3=require('./Routes/router3')
app.use('/router3',router3)




// modules Importer 
const express = require("express");
const app = express();
const Connection = require('./connection/mongooseConnect');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const security_Key = process.env.BACKEND_SECURITY_KEY;
// Schemas importer
const UserModel = require('./Schemas/User');
// Connect to Mongoose
Connection;

const PORT = process.env.PORT || 5000;

// MiddleWares
app.use(express.json());

app.use(cors({
    origin: "https://palm-online-front.vercel.app",
    methods: ["GET", "POST", ]
}));
app.options('*', cors())
// API Section Starts from here

app.get('/',(req,res)=>{
    res.send("API Working");
})

// Register API
app.post('/register/',async (req,res)=>{
    try {
        if(req.body.name && req.body.email && req.body.password){
            const user = UserModel;
            const checkEmail = await user.findOne({email:req.body.email});
            const checkUsername = await user.findOne({name:req.body.name});

            if(!checkEmail && !checkUsername && req.body.password.length >= 8 && req.body.email.includes("@") && req.body.email.includes("gmail.com") || req.body.email.includes("email.com")){
                let result = new user(req.body);
                result = await result.save();
                res.send(result);
            }else if(checkEmail && checkUsername){
                res.send({result:"username and Email already taken!"});
            }else if(checkEmail){
                res.send({result:"Email already taken!"});
            }else if(checkUsername){
                res.send({result:"username already taken"});
            }else if(req.body.password.length < 8){
                res.send({result:"Enter Strong password"})
            }else if(!req.body.email.includes("@") || !req.body.email.includes("gmail.com") || !req.body.email.includes("email.com") ){
                res.send({result:"Invalid Email"})
            }
        }else{
            res.send({result:"Please fill all the fields"})
        }

    } catch (error) {
        res.status(400).send({result:"Opp's something went wrong!"})
    }
})

// Login API
app.post('/login/',async (req,res)=>{
    try {
        
        if(req.body.email && req.body.password){
            let result = await UserModel.findOne(req.body);
            if(result){
                res.send(result);
            }else{
                res.send({result:"Please provide correct details!"})
            }
        

        }else{
            res.send({result:"Please fill all the fields!"})
        }

    } catch (error) {
        res.status(400).send({result:"Opp's something went wrong!"})
    }
})

// User Data
app.get('/fetchUser/:_id/',async(req,res)=>{

    try {
    
        const User = UserModel;
        let result = await User.findOne(req.params)
        res.send(result)
    } catch (error) {
        res.status(400).send({result:"Something went wrong!"})
    }

})

// Port Listener
app.listen(PORT)

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = new require("jsonwebtoken");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const User = require("./models/User")

const port = 3000;
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET"],
    credentials:true
}));
app.use(cookieParser())



const connect =async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/formtoken')
        console.log("db connected")
    } catch (error) {
        const {status, message} = error;
        console.log(status, message)
        
    }
};

const verifyUser = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.send("token is missing")
    }else {
        jwt.verify(token, "jwt-secret-key", (err,decoded) => {
            if(err) {
                return res.send("error with token")
            } else {
                if(decoded.role === "admin") {
                    next()
                } else {
                    return res.send("not admin")
                }
            }
        })
    }
};

app.get("/dashboard", verifyUser, (req,res) => {
    res.send("success")
});

app.post("/register",(req,res) => {
    const {name, email,password} = req.body;
    bcrypt.hash(password,10)
    .then(hash => {
        User.create({name,email,password: hash})
        .then(user => res.send("success"))
        .catch(err => res.send(err))
    }).catch(err => res.send(err))
});

app.post("/login", (req,res) => {
    const {email,password} = req.body;
    User.findOne({email:email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err,response) => {
                if(response) {
                    const token = jwt.sign({email:user.email, role:user.role},
                        "jwt-secret-key", {expiresIn: "1d"} )
                    res.cookie('token', token)
                    return res.send({Status:"success", role: user.role})    
                }else {
                    return res.send("password is incorrect")
                }
            })
        } else {
            return res.send("no record existed")
        }
    })
})

app.listen(port, ()=>{
    console.log(`app is running in ${port}`)
    connect()
})
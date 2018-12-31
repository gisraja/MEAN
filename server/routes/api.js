const express = require('express')
const router = express.Router()
const User = require("../models/users")

const mongoose = require('mongoose')
const db = "mongodb://admin:adminpassword1@ds037768.mlab.com:37768/data"

mongoose.connect(db, err =>{
    if (err){
        console.error(err)
    }else{
        console.log('connected to mongo')
    }

})

router.get("/", (req,res) => {
    res.send("Hello from api")
})

router.post("/register", (req, res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((err, regUser) =>{
        if (err)
        {
            console.log(err)
        }
        else
        {
            res.status(200).send(regUser)
        }
    })
} )

module.exports = router
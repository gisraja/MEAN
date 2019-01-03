const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require("../models/users")

const mongoose = require('mongoose')
const db = "mongodb://admin:adminpassword1@ds037768.mlab.com:37768/data"

mongoose.connect(db, err => {
    if (err) {
        console.error(err)
    } else {
        console.log('connected to mongo')
    }

})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("unauthorized access")
    }
    let token = req.headers.authorization.split(" ")[1]
    if (token === "null") {
        return res.status(401).send("unauthorized access")
    }
    let payload = undefined
    try {
         payload = jwt.verify(token, "password")
    } catch (error) {
        if (error.name === "JsonWebTokenError"){
            return res.status(401).send("unauthorized access")
        }
    }
    if (!payload) {
        return res.status(401).send("unauthorized access")
    }
    req.userId = payload.subject
    next()
}

router.get("/", (req, res) => {
    res.send("Hello from api")
})

router.post("/register", (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, regUser) => {
        if (err) {
            console.log(err)
        }
        else {
            let payload = { subject: regUser._id }
            let token = jwt.sign(payload, "password")
            res.status(200).send({ token })
        }
    })
})

router.post("/login", (req, res) => {
    let userData = req.body

    User.findOne({ email: userData.email }, (err, udata) => {
        if (err) {
            res.status(401).send(err)
            console.error(err)
        } else {
            if (!udata) {
                res.status(401).send("Invalid email")
            }
            else {
                if (userData.password !== udata.password) {
                    res.status(401).send("Invalid password")

                }
                else {
                    let payload = { subject: udata._id }
                    let token = jwt.sign(payload, "password")
                    res.status(200).send({ token })
                }
            }
        }

    })
})

router.get("/events", (req, res) => {
    let events = [
        {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }
    ]
    res.json(events)
})

router.get("/special",verifyToken, (req, res) => {
    let events = [
        {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }, {
            "id": 1,
            "name": "Auto Expo",
            "description": "Description of Auto expo",
            "date": "2018-12-31"
        }
    ]
    res.json(events)
})

module.exports = router
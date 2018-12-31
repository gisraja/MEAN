const mongoose = require('mongoose')

const schema = mongoose.schema
const userSchema = new schema({
    email: string,
    password: string
})

module.exports = mongoose.model('user',userSchema,'users')
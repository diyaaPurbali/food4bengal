import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

    name : {type : String, required: true},
    email : {type : String, required: false},
    password : {type : String, required: false},
    profilePic: {type: String, required: false},
    donations: [{type: mongoose.Schema.Types.ObjectId, ref: "ngos", required: false}]

},{timestamps : true})


const User = mongoose.model('user', UserSchema)

export default User
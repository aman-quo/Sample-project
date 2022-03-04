import { Schema,model } from "mongoose";
const userSchema=Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const User=model('users',userSchema);
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema  =  new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max:50
    },
    password: {
        type:String,
        required:true,
        min: 6
    },
    img:{
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export const User = mongoose.models.User || mongoose.model("User", userSchema)
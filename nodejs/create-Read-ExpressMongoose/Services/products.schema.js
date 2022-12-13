import mongoose from 'mongoose'
import '../Mongoose/mongoose.connect.js'

export const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
   
    },
    description:{
        type:String,

    },
    category:{
        type:String,
        required:true
    },
    isActive:Boolean,
    price:{
        type:Number,
        required:true,
        max:1000
    }   
})
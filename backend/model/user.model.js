//yahan humne vo details create ki hain jo hum database me daalenge
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required:true
    },
    listing:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Listing"//ye jab listing ka model banayenge tab usko isse refer karenge
    },
    booking:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    }
},{timestamps:true})

const User = mongoose.model("User", userSchema)

export default User
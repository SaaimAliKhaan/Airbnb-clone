import genToken from "../config/token.js"
import User from "../model/user.model.js"
import bcrypt from "bcryptjs"

//yahan hum user se signin, signin and signout karwayenge
export const signUp = async(req , res) => {
try{//button humne auth.route me banaya uski functionality hum yahan likhenge
    let {name,email,password} = req.body//body se name email aur password lenge
    //ab ye bhi check kr lenge ki if user already exists

    let existUser = await User.findOne({email})//ye email ke basis pe check krne ke liye hai ki user exist krta hai ya nhi 
    if(existUser){
        return res.status(400).json({message:"User already exists"})
    }

    let hashPassword = await bcrypt.hash(password,10)//agar user exist nhi krta already to naya password banega and bcrypt us password ko hash kr dega means usme 10 aur characters ko add kr dega 
    let user = await User.create({name, email, password:hashPassword})
    let token = await genToken(user._id)
    res.cookie("token", token,{//token ko cookie ke andar pass krna hai 
        httpOnly:true,//jab local pe run karenge to http pe run hoga lekin jab deploy kr denge tab https pe run hoga
        secure:process.env.NODE_ENVIRONMENT = "production",
        sameSite : "strict",
        maxAge : 7 * 24 * 60 * 60 * 1000
    })
    return res.status(201).json(user)
}catch(error){
    return res.status(500).json({message:'signup error: ${error.message}'})
}
}
export const login = async(req , res) => {  
try{
     let {email,password} = req.body//body se name email aur password lenge
    //ab ye bhi check kr lenge ki if user already exists

    let user = await User.findOne({email})//ye email ke basis pe check krne ke liye hai ki user exist krta hai ya nhi 
    if(!user){
        return res.status(400).json({message:"User does not exists"})
    }

    // let hashPassword = await bcrypt.hash(password,10)//agar user exist nhi krta already to naya password banega and bcrypt us password ko hash kr dega means usme 10 aur characters ko add kr dega 
    // let user = await User.create({name, email, password:hashPassword})
    //ab password ko compare krna hai ki jo password user ne dala hai wo database me jo password hai uske sath match krta hai ya nhi...isliye humne password ko hash krne wali line ko comment kr diya hai 
    
    let isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({message:"incorrect password"})
    }
    let token = await genToken(user._id)
    res.cookie("token", token,{//token ko cookie ke andar pass krna hai 
        httpOnly:true,//jab local pe run karenge to http pe run hoga lekin jab deploy kr denge tab https pe run hoga
        secure:process.env.NODE_ENVIRONMENT = "production",
        sameSite : "strict",
        maxAge : 7 * 24 * 60 * 60 * 1000
    })
    return res.status(200).json(user)
    } catch(error){
            return res.status(500).json({message:'login error: ${error.message}'})

    }
}

export const logOut = async(req , res) => {
    try{
        res.clearCookie("token")
        return res.status(200).json({message:"Logout successful"})
    
    }catch(error){
                return res.status(500).json({message:'logout error: ${error.message}'})
            }
}

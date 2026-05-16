import jwt from "jsonwebtoken"
//mongodb jab koi new user create krta hai tab uski ek unique id generate krta hai...to us id ke help se hum token generate krenge with the help of json webtoken(which we installed in starting)
const genToken = async(userId) => {
    try{
        let token = await jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"7d"} )//jo id generate hogi usme JWT_SECRET(created in .env file) laga ke hume token mil jaayega
        return token
    }catch(error){
        console.log("token error")
    }
}

export default genToken
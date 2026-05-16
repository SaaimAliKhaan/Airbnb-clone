//isme pehle humne server ko create kiya hai
import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config()
console.log(process.env.MONGODB_URL); 
let port = process.env.PORT || 6000

let app = express()//express ko app me daal diya...jahan jahan express likhna hoga vahan vahan mai app likhunga

app.use(express.json())//jo data hum body se lenge vo json format me hoga to vo undefined dikhai na de isliye ek middleware yaani express laga diya humne
app.use(cookieParser())//token ko cookie ke andar pass krna h
        //(request,response)
// app.get("/",(req,res) => { //ye call back function hai
//     res.send("hello from server") //response ko send kr denge
// })

app.use("/api/auth", authRouter) //ye vo hai jo url me dikhega.../api/auth ke baad vo aayega  jo hum us time krre honge jaise signup ya login 

app.listen(port/*is port pe get request krne wale hain*/ , ()=>{//get request to krre h to use kahin na kahin to karana padega yani server to banana padega 
    connectDb()
    console.log("server started")
})
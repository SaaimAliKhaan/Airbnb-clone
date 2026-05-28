//isme pehle humne server ko create kiya hai
import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
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
app.use(cors({
    origin: "http://localhost:5173", //ye vo url hai jahan se hum request bhejenge yani frontend ka url...ye isliye hai taki backend sirf frontend se hi request accept kare aur kisi aur url se na kare...ye security ke liye bhi hai
    credentials: true //ye isliye hai taki backend frontend ko response bhej sake...agar ye false hota to backend frontend ko response nahi bhej pata...ye isliye bhi hai taki backend frontend ke cookies ko access kar sake...cookies me token store hoga to backend us token ko access kar sakega aur uske basis pe user ko authenticate kar sakega
}))
app.use("/api/auth", authRouter) //ye vo hai jo url me dikhega.../api/auth ke baad vo aayega  jo hum us time krre honge jaise signup ya login 

app.listen(port/*is port pe get request krne wale hain*/ , ()=>{//get request to krre h to use kahin na kahin to karana padega yani server to banana padega 
    connectDb()
    console.log("server started")
})
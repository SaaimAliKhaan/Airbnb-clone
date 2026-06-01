import multer from "multer";
//multer ek middleware hai jo file upload ke liye use hota hai...ye file ko handle karta hai jo hum frontend se bhejte hai...ye file ko store karne ke liye storage engine ka use karta hai...ye storage engine hume ye batata hai ki file ko kaha store karna hai aur file ka naam kya rakhna hai...ye humare case me local storage me file ko store karega...ye humare case me file ka naam uska original naam hoga jise hum frontend se bhejenge

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"/public")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage}) 

export default upload;
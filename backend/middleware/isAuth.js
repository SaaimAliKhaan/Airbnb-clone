//ye middleware hai jo user ko authenticate karega...iske andar hum token ko verify karenge ki authentic hai aur agar token valid hoga to user ko next middleware pe bhej denge aur agar token invalid hoga to user ko error message bhej denge
import jwt from "jsonwebtoken"
const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies
        if (!token) {
            res.status(400).json({ message: "user does not have token" })
        }
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!verifyToken) {
            res.status(400).json({ message: "user does not have valid token" })
        }
        req.userId = verifyToken.userId
        next()
    }catch (error) {
        res.status(500).json({ message: `isAuth error ${error}` }) //agar token verify karne me koi error aata hai to usko catch block me handle karenge aur user ko error message bhej denge...ye dollar sign ke sath error message bhejenge taki user ko pata chale ki error kya hai
    }
}
export default isAuth
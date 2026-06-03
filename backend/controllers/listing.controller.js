//jo houses ki listing karni hai uske liye ye controller banaya hai
import uploadOnCloudinary from '../config/cloudinary.js';
import Listing from '../models/listing.model.js';
import User from '../models/user.model.js';


export const addListing = async (req, res) => {
    try {
        let host = req.userId; //host hume req.userId se milega kyunki isAuth middleware me humne token verify karne ke baad userId ko request ke andar daal diya hai...to hume yahan se userId mil jayega jise hum host ke roop me use karenge 
        let { title, description, rent, city, landMark, category } = req.body
        let image1 = await uploadOnCloudinary(res.files.image1[0].path) //ye 3 images cloudinary pe jo url generate hua  hai vahan se aari hain
        let image2 = await uploadOnCloudinary(res.files.image2[0].path)
        let image3 = await uploadOnCloudinary(res.files.image3[0].path)

        let listing = await Listing.create({
            title,
            description,
            rent,
            city,
            landMark,
            category,
            image1,
            image2,
            image3,
            host
        })
        let user = await User.findByIdAndUpdate(host, { $push: { listing: listing._id } }, { new: true }) //host ke andar userId hai...to hum us userId se user ko find karenge
        if(!user){
            res.status(404).json({ message: "User not found" })
        }
        res.status(201).json(listing)

        }catch (error) {
            res.status(500).json({ message: `AddListing error ${error}` })
         }
    }
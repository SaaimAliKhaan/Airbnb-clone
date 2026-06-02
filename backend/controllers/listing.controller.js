//jo houses ki listing karni hai uske liye ye controller banaya hai
import uploadOnCloudinary from '../config/cloudinary.js';



export const addListing = async (req, res) => {
    try{
        let host = req.user.id;
        let { title, description, rent, city, landMark, category} = req.body
        let image1 = await uploadOnCloudinary(res.files.image1[0].path)
        let image2 = await uploadOnCloudinary(res.files.image2[0].path)
        let image3 = await uploadOnCloudinary(res.files.image3[0].path)
    }catch(error){}
}
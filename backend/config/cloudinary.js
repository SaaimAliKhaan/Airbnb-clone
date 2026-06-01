import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const uploadOnCloudinary = async (filepath) => {
    
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    try{
        if(!filepath){
            return null}
         const uploadResult = await cloudinary.uploader
       .upload(filepath)
        fs.unlinkSync(filepath) //ye file ko delete kar dega local storage se jise humne upload kiya hai cloudinary pe...ye isliye hai taki local storage me unnecessary files na rahe jise humne upload kar diya hai cloudinary pe
        return uploadResult.secure_url //ye hum upload result me se secure url return karenge jise hum frontend me use karenge image ko show karne ke liye
       
    }catch(error){
        fs.unlinkSync(filepath) 
        console.log(error)
    }
}
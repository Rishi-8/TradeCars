import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || 'doep9wkmz',
    api_key: process.env.CLOUDINARY_API_KEY || 461483456347722,
    api_secret: process.env.CLOUDINARY_API_SECRET || '_sdWUcqQVUC5TKAXvjUhOJML5Fk'
})

export default cloudinary
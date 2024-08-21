import cloudinary from "../utils/cloudinary.js"

const imageUpload = async (req, res, next) => {
    try {
        if (!req.file.path) {
            const error = new Error('Image has no path')
            error.statusCode(404)
            throw error
        }
        const result = await cloudinary.uploader.upload(req.file.path)
        console.log(result.public_id)
        req.image = {
            cloudinaryId: result.public_id,
            secureURL: result.secure_url
        }
        next()
    } catch (error) {
        res.status(error.statusCode || 500).json({ "error": error.message })
        console.log(error)
    }
}

export default imageUpload 
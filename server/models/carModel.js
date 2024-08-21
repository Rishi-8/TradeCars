import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    image: {
        type: String,
        required: (true, "Car image is mandatory")
    },
    make: {
        type: String,
        required: (true, "car make is mandatory")
    },
    model: {
        type: String,
        required: (true, "car brand is mandatory")
    },
    usedPeriod: {
        type: Number,
        required: (true, "car used period is mandatory")
    },
    usedDistance: {
        type: Number,
        required: (true, "car used distance is mandatory")
    },
    fuelType: {
        type: String,
        required: (true, "car fuel type is mandatory")
    },
    gearType: {
        type: String,
        required: (true, "car gear type is mandatory")
    },
    location: {
        type: String,
        required: (true, "car location is mandatory")
    },
    price: {
        type: Number,
        required: (true, "car price is mandatory")
    },
    tag: {
        type: String
    },
    cloudinaryId: {
        type: String,
        required: (true, "cloudinary id is mandatory")
    }
}, {
    timestamps: true
})

export const Car = mongoose.model('Car', carSchema)
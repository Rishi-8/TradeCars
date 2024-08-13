import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
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
    location: {
        type: String,
        required: (true, "car location is mandatory")
    },
    price: {
        type: Number,
        required: (true, "car price is mandatory")
    },
}, {
    timestamps: true
})

export const Car = mongoose.model('Car', carSchema)
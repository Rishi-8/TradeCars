import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    car_id: {
        type: String,
        required: (true, "car make is mandatory")
    },
    paymentIntent_id: {
        type: String,
        required: (true, "payment id is mandatory")
    },
    status: {
        type: String,
        required: (true, "status is required")
    }
}, {
    timestamps: true
})

export const Order = mongoose.model('Order', orderSchema)
import { stripe } from "../index.js"
import { Car } from "../models/carModel.js"
import { Order } from "../models/orderModel.js"

const createOrder = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id).select('price')
        const price = car.price

        const paymentIntent = await stripe.paymentIntents.create({
            amount: price,
            currency: 'inr'
        })

        const order = await Order.create({
            user_id: req.user.id,
            car_id: car.id,
            paymentIntent_id: paymentIntent.id,
            status: "pending"
        })
        res.status(200).json({ "order": order, "clientSecret": paymentIntent.client_secret })
    } catch (error) {
        console.error(error.message);
        res.status(error.statuscode || 500).json({ response: "An error occured", message: error })
    }
}

const getOrders = async (req, res) => {
    try{
        const orders = await Order.find({user_id: req.user.id})
        res.status(200).json(orders)
    }
    catch(error){
        console.error(error);
        res.status(error.statuscode || 500).json({response: "An error occured", message: error.message})
    }
}

export { createOrder, getOrders }
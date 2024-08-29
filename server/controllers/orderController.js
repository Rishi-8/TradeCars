import { response } from "express"
import { stripe } from "../index.js"
import { Car } from "../models/carModel.js"
import { Order } from "../models/orderModel.js"
import cloudinary from "../utils/cloudinary.js"

const createOrderPaymentIntent = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id)
        const price = car.price

        const paymentIntent = await stripe.paymentIntents.create({
            amount: price,
            currency: 'inr',
            description: "Payment for a car",
            metadata: {
                carId: car.id,
                userId: req.user.id
            }
        })
        res.status(200).json({
            "clientSecret": paymentIntent.client_secret,
            "car": car
        })
    } catch (error) {
        console.error(error.message);
        res.status(error.statuscode || 500).json({ response: "An error occured", message: error })
    }
}

const createOrder = async (req, res) => {
    const { paymentIntentId } = req.body
    try {
        console.log(paymentIntentId)
        const paymentIntent = await stripe.paymentIntents.retrieve(
            paymentIntentId
        )
        const order = await Order.create({
            user_id: req.user.id,
            car_id: paymentIntent.metadata.carId,
            paymentIntentId: paymentIntent.id,
            status: "complete"
        })
        const car = await Car.findById(paymentIntent.metadata.carId)
        res.status(200).json({ "order": order, "car": car })
    } catch (error) {
        console.error(error);
        res.status(error.statuscode || 500).json({ response: "An error occured", message: error.message })
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user_id: req.user.id }).populate('car_id')
        res.status(200).json(orders)
    }
    catch (error) {
        console.error(error);
        res.status(error.statuscode || 500).json({ response: "An error occured", message: error.message })
    }
}

const getOrderByPaymentId = async (req, res) => {
    const paymentIntentId = req.params.paymentIntentId
    console.log(paymentIntentId)

    try {
        const orderAndCar = await Order.findOne({ paymentIntentId }).populate('car_id')
        res.status(200).json(orderAndCar)
    } catch (error) {
        console.error(error);
        res.status(error.statuscode || 500).json({ response: "An error occured", message: error.message })
    }
}

const webhookCreateOrder = async (req, res) => {
    const endpointSecret = 'whsec_c0184c3858f83e21cbf9e1ae376fa273c9e7c66fcc0c21c7cca4a578420313c0'
    const sig = req.headers['stripe-signature']
    try {
        const body = req.body

        let event = null;

        try {
            event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "signature invalid", error: error })
        }

        let intent = null

        if (event.type === 'payment_intent.succeeded') {
            intent = event.data.object
            try {
                const order = await Order.create({
                    user_id: intent.metadata.userId,
                    car_id: intent.metadata.carId,
                    paymentIntentId: intent.id,
                    status: "complete"
                })
                console.log({ 'order created successfully': order })
            } catch (error) {
                console.error({ 'error': error })
            }
        }
        res.status(200).json("done").end()
    } catch (error) {
        res.status(400).json({ message: error.message })
        console.log(error)
    }
}

//testing image upload
const imageUploadCloud = async (req, res) => {
    try {
        res.status(200).json(req.image.id)
    } catch (error) {
        console.log(error)
        res.status(error.statusCode || 500).json({ 'respone': 'an error occured', 'message': error.message })
    }
}

export { createOrderPaymentIntent, createOrder, getOrders, webhookCreateOrder, getOrderByPaymentId, imageUploadCloud }
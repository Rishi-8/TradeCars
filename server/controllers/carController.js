import { Car } from "../models/carModel.js"

const getCars = async (req, res) => {
    try{
        const cars = await Car.find({user_id: req.user.id})
        res.status(200).json(cars)
    }
    catch(error){
        console.error(error);
        res.status(error.statuscode || 500).json({response: "An error occured", message: error.message})
    }
}

const getCar = async(req, res) => {
    try{
        const car = await Car.findById(req.params.id)
        if(!car) {
            const error = new Error("car not found")
            error.statuscode = 404
            throw error
        }
        res.status(200).json(car)
    }
    catch(error){
        console.error(error);
        res.status(error.statuscode || 500).json({response: "An error occured", message: error.message})
    }
}

const createCar = async(req, res) => {
    const { make, model, usedPeriod, location, price } = req.body
    try{
        if(!make || !model || !usedPeriod || !location || !price) {
            const error = new Error("some data is missing")
            error.statuscode = 400
            throw error
        }
        const car = await Car.create({
            user_id : req.user.id,
            make,
            model,
            usedPeriod,
            location,
            price
        })
        res.status(200).json(car)
    }
    catch(error){
        console.error(error);
        res.status(error.statuscode || 500).json({response: "An error occured", message: error.message})
    }
}

const updateCar = async(req, res) => {
    try{
        const car = await Car.findById(req.params.id)
        if(!car) {
            const error = new Error("car not found")
            error.statuscode = 404
            throw error
        }

        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json(updatedCar)
    }
    catch(error){
        console.error(error);
        res.status(error.statuscode || 500).json({response: "An error occured", message: error.message})
    }
}

const deleteCar = async(req, res) => {
    try{
        const car = await Car.findById(req.params.id)
        if(!car) {
            const error = new Error("car not found")
            error.statuscode = 404
            throw error
        }

        await Car.findByIdAndDelete(req.params.id)
        res.status(200).json(car)
    }
    catch(error){
        console.error(error);
        res.status(error.statuscode || 500).json({response: "An error occured", message: error.message})
    }
}

export {getCars, getCar, createCar, updateCar, deleteCar}
const getCars = (req, res) => {
    res.json({message: "all cars are fetched"})
}
const getCar = (req, res) => {
    res.status(200).json({message: `car is fetched with an id ${req.params.id}`})
}
const createCar = (req, res) => {
    res.status(200).json({message: "car is created"})
}
const updateCar = (req, res) => {
    res.status(200).json({message: `car is updated with an id ${req.params.id}`})
}
const deleteCar = (req, res) => {
    res.status(200).json({message: `car is deleted with an id ${req.params.id}`})
}

export {getCars, getCar, createCar, updateCar, deleteCar}
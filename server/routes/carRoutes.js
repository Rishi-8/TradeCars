import express from "express";
import { createCar, deleteCar, getCar, getCars, getNewCars, getUsedCars, updateCar } from "../controllers/carController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router()

router.use(protect)
router.route("/").get(protect, getCars).post(protect, createCar)
router.route("/new").get(getNewCars)
router.route("/used").get(getUsedCars)
router.route("/:id").get(protect, getCar).put(protect, updateCar).delete(protect, deleteCar)

export default router

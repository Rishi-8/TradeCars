import express from "express";
import { createCar, deleteCar, getCar, getCars, updateCar } from "../controllers/carController.js";
const router = express.Router()

router.route("/").get(getCars).post(createCar)
router.route("/:id").get(getCar).put(updateCar).delete(deleteCar)

export default router

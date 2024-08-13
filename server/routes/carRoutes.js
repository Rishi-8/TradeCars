import express from "express";
import { createCar, deleteCar, getCar, getCars, updateCar } from "../controllers/carController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router()

router.use(protect)
router.route("/").get(getCars).post(createCar)
router.route("/:id").get(getCar).put(updateCar).delete(deleteCar)

export default router

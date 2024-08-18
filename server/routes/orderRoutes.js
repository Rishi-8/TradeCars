import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createOrder, getOrders } from "../controllers/orderController.js";
const router = express.Router()

router.route("/").get(protect, getOrders)
router.route("/:id").post(protect, createOrder)

export default router
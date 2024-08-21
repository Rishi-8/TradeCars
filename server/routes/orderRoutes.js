import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createOrder, createOrderPaymentIntent, getOrderByPaymentId, getOrders, imageUploadCloud, webhookCreateOrder } from "../controllers/orderController.js";
import upload from "../utils/multer.js";
import imageUpload from "../middlewares/imageMiddleware.js";
const router = express.Router()

router.route("/").get(protect, getOrders).post(protect, createOrder)
router.route("/stripe_webhooks").post(webhookCreateOrder)
router.route("/payment/:paymentIntentId").get(protect, getOrderByPaymentId)
router.route("/image").post(protect, upload.single("image"), imageUpload, imageUploadCloud)
router.route("/:id").post(protect, createOrderPaymentIntent)

export default router
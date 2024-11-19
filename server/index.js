import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import carRoutes from './routes/carRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import connectDB from './config/db.js';
import Stripe from 'stripe';

await connectDB()
const port = process.env.PORT || 5000;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const app = express();

app.use(cors())

app.use('/api/orders/stripe_webhooks', express.raw({ type: 'application/json' }));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes)
app.use('/api/orders', orderRoutes)

app.get('/', (req, res) => res.send('Server is ready'))

app.listen(port, () => console.log(`Server started on port ${port}`))

export {stripe}
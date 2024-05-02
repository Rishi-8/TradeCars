import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js';

connectDB()
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'))

app.listen(port, () => console.log(`Server started on port ${port}`))
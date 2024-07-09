import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './config/database.js';
import adminRoutes from './routes/adminRoutes.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import ErrorHandler from './utils/ErrorHandler.js';
import { generatedError } from './middleware/error.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Logger
app.use(logger('tiny'));

// Network access
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create session
app.use(cookieParser());

// Routes handling
app.use('/admins', adminRoutes);

// Error handling
app.all('*', (req, res, next) => {
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404));
});
app.use(generatedError);

// Connect to the database and start the server
connectDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server listening at port ${port}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database:', error);
});

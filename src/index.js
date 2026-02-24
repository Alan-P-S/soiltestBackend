import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import testRoute from './routes/test.route.js'
import authRoute from './routes/auth.route.js'
import plotRoute from './routes/plot.route.js'
import testResultRoute from './routes/testResult.route.js'

import { syncDatabase } from './lib/db.js';
import { connectDB } from './lib/db.js';
import { associate } from './lib/Associations.js';
import './models/AllModels.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use('/api/auth',authRoute);
app.use('/api/test',testRoute);
app.use('/api/plot',plotRoute);
app.use('/api/testresult',testResultRoute);
app.listen(5000,async ()=>{
    await connectDB();
    syncDatabase();
    associate();
    console.log("server is running port 5000")
})

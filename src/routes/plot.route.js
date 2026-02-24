import express from 'express'
import { addPlot } from '../controller/plot.controller.js';
const router = express.Router();


router.post('/addplot',addPlot);


export default router;
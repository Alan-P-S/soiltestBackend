import express from 'express'
import { addPlot,plotsByPhone,addPlotCrop, getPlotCrops} from '../controller/plot.controller.js';
const router = express.Router();


router.post('/addplot',addPlot);

router.post("/by-phone", plotsByPhone);
router.post("/plot-crop",addPlotCrop);
router.get('/plot-crop/:PlotId',getPlotCrops);
export default router;
import express from "express";
import { updateTest,alltests } from "../controller/test.controller.js";
const router = new express.Router();

router.get('/alltests',alltests);
router.post('/add',updateTest);
router.get('/result',(req,res)=>{
    return res.status(200).json({
  "farmerName": "Vilasini",
  "village": "Thalikulam",
  "sampleNo": 298,
  "date": "03/05/2025",
  "ph": 5.56,
  "organicCarbon": 0.03,
  "nitrogen": 35,
  "phosphorus": 22,
  "potassium": 18,
  "tss": 0.180,
  "recommendations": [
    { "name": "Rice", "N": 80, "P": 40, "K": 60 },
    { "name": "Coconut", "N": 500, "P": 320, "K": 1200 }
  ]
})
});

export default router;
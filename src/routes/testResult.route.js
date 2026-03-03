import express from "express";
import { addTestResult,getAllTest,TestCalculation } from "../controller/testResult.controller.js";
const router = new express.Router();

router.post('/add',addTestResult);
router.post('/recommend',TestCalculation);
router.post('/get-results',getAllTest);
export default router;
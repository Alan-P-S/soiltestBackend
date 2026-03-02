import express from "express";
import { addTestResult,TestCalculation } from "../controller/testResult.controller.js";
const router = new express.Router();

router.post('/add',addTestResult);
router.post('/recommend',TestCalculation);

export default router;
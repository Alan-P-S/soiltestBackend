import express from "express";
import { addTestResult } from "../controller/testResult.controller.js";
const router = new express.Router();

router.post('/add',addTestResult);


export default router;
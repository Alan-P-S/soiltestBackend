import express from "express";
import {addReport,getReportByPhone, getRecommendation } from "../controller/report.controller.js";

const router = express.Router();


router.post("/add", addReport);
router.post("/reports-by-phone",getReportByPhone);
router.post("/reports/pdf",getRecommendation);
export default router;
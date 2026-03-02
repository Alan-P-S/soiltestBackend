import express from "express";
import { generateSoilReportPDF,addReport } from "../controller/report.controller.js";

const router = express.Router();

router.get("/generate/:id/pdf", generateSoilReportPDF);
router.post("/add", addReport);

export default router;
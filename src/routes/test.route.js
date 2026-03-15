import express from "express";
import { addTest,alltests,updateTestStatus } from "../controller/test.controller.js";
const router = new express.Router();

router.get('/alltests',alltests);
router.post('/add',addTest);
router.patch('/update-test-status/:testId',updateTestStatus);

export default router;
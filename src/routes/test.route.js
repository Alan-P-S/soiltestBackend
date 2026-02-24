import express from "express";
import { updateTest,alltests } from "../controller/test.controller.js";
const router = new express.Router();

router.get('/alltests',alltests);
router.post('/add',updateTest);
export default router;
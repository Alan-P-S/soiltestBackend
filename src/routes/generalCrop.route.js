import {Router} from "express";
import { generalcropAdd, getAllCrops } from "../controller/generalcrop.controller.js";
const router = Router();

router.post("/add",generalcropAdd);
router.get("/all-crops",getAllCrops);
export default router;
import {Router} from "express";
import { generalcropAdd } from "../controller/generalcrop.controller.js";
const router = Router();

router.post("/add",generalcropAdd);

export default router;
import { Router } from "express";
import { addEvent } from "../controller/event.controller.js";

const router = Router();

router.post('/addevent',addEvent);

export default router;
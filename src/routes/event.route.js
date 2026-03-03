import { Router } from "express";
import { addEvent } from "../controller/event.controller.js";

const router = Router();

router.post('/addevent',addEvent);
router.get('/get-events',getAllEvent);

export default router;
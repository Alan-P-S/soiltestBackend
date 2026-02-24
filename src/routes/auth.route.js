import express from 'express'
import { signup,allusers,userByPhone } from '../controller/auth.controller.js';
const router = express.Router();

router.get('/signup',(req,res)=>{res.send('hello')});
router.post ('/signup',signup);
router.get('/allusers',allusers);
router.post('/user/search',userByPhone);
export default router;
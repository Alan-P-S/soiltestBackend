import { raw } from 'express';
import User from '../models/user.model.js';
import Plot from '../models/plot.model.js';
export const signup = async(req,res)=>{
    try{
        const data = req.body;
        await User.create(data);
        return res.status(201).json({message:`User Created:`});
    }catch(err){
        console.log(err);
        return res.status(201).json({message:err.message});
    }
    
}

export const allusers = async(req,res)=>{
    try{
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User));
        console.log(JSON.stringify(users, null, 2));
        return res.status(201).json(users[0]);
    }catch(err){
        console.log(err);
        return res.status(401).json({message:err.message});
    }
}

export const userByPhone = async (req,res)=>{
    const {phone} = req.body;
    try{
        const data = await User.findOne({ where: { phone: phone },include:[{model:Plot}] });
        return res.status(201).json(data);
    }catch(error){
        console.log(error);
        return res.status(401).json(error);
    }
}
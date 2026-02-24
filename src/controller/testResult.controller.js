
import TestResult from "../models/testResult.model.js"


export const addTestResult = async (req,res)=>{
    const data = req.body;
    try
    {
        const result = await TestResult.create(data);
        return res.status(201).json({data:result});
    }catch(error){
        console.log('Error',error.name);
        return res.status(401).json({error:error.name});
    }
}
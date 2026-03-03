import { NutrientCalculator } from "../lib/NutrientCalculator.js";
import TestResult from "../models/testResult.model.js"
import GeneralCrop from "../models/generalCrop.model.js";
import { FertilizerCalculator } from "../lib/FertilizerCalculator.js";
import User from "../models/user.model.js";

export const addTestResult = async (req,res)=>{
    const data = req.body;
    const result = {Nvalue:data.organicCarbon,Pvalue:data.phosphorus,Kvalue:data.potassium,Tssvalue:data.tss,Phvalue:data.ph,UserId:data.UserId};
    console.log(result);
    try
    {
        const r = await TestResult.create(result);
        return res.status(201).json({data:r});
    }catch(error){
        console.log('Error',error.name);
        return res.status(401).json({error:error.name});
    }
}

export const getAllTest  = async(req,res)=>{
    const data = req.body;
    
    const phone = data.phone;
    try{
        const user = await User.findOne({where:{phone}});
        const results = await TestResult.findAll({where:{UserId:user.id}});
        return res.status(200).json(results);
    }catch(error){
        return res.status(501).json({error});
    }
}

export const TestCalculation = async (req,res)=>{
    const data = req.body
    const ids = data.crops.map(c => c.id);
    let cropMap = {};
    const crops = await GeneralCrop.findAll({
        where: { id: ids }
    });
    console.log(crops);
    crops.forEach(crop=>{
        cropMap[crop.dataValues.id] = crop.dataValues;
    })
    console.log(cropMap);
    const recommend = NutrientCalculator(cropMap,{soiltype:"sandy",nitrogen:0.03,phosphorus:35,potassium:22});
    const fertilizer = FertilizerCalculator(recommend);
    return res.status(200).json({recommend,fertilizer});
    
}
import GeneralCrop from "../models/generalCrop.model.js";



export const generalcropAdd = async (req,res)=>{
    const data = req.body;
    try{
        const result = await GeneralCrop.create(data);
        return res.status(200).json({message:"crop added sucessfully"+result});
    }catch(error){
        return res.status(501).json({error:"Error in adding Crops"+error});
    }
}

export const getAllCrops = async(req,res)=>{
    try{
        const result = await GeneralCrop.findAll();
        res.status(200).json(result);
    }
    catch(error){
        console.log(error);
        return res.status(501).json({error:"Error in fetching crops"+error});
    }
}
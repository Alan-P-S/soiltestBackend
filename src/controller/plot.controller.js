import Plot from "../models/plot.model.js";
import User from "../models/user.model.js";
import GeneralCrop from "../models/generalCrop.model.js";
import PlotCrops from "../models/PlotCrops.js";
export const addPlot  = async (req,res)=>{
    const data = req.body;

    try{
        const result = await Plot.create(data);
        return res.status(201).json({message:"Ploat added",result});
    }catch(error){
        console.log("error");
        console.log(error);
        return res.status(501).json({error:error.error});
    }
}

export const plotsByPhone = async (req,res)=>{
    
const { phone } = req.body;

const farmer = await User.findOne({ where:{ phone } });

if(!farmer){
 return res.status(404).json({message:"Farmer not found"});
}

const plots = await Plot.findAll({
 where:{ UserId: farmer.id }
});

res.status(200).json(plots);
}


export const addPlotCrop = async (req,res)=>{
    const data = req.body;
    console.log("Frontend Data"+data)
    try{
        const result = await PlotCrops.create(data);
        
        return res.status(200).json({message:"Crop added to plot",data:result});
    }catch(error){
        console.log("error");
        console.log(error);
        return res.status(501).json({error:error.error});
    }
}

export const getPlotCrops = async (req,res)=>{
    const PlotId = req.params.PlotId;
    console.log("Plot id"+PlotId)
    try{
        const result = await Plot.findByPk(PlotId,{include:{model:GeneralCrop,attributes:["id","name"]}});
        return res.status(200).json(result.GeneralCrops);
    }
    catch(error){
        console.log(error);
        res.status(501).json({message:"Internal Server Error"});
    }
}
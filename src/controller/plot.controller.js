import Plot from "../models/plot.model.js";

export const addPlot  = async (req,res)=>{
    const data = req.body;

    try{
        const result = await Plot.create(data);
        return res.status(201).json({message:"Ploat added",result});
    }catch(error){
        console.log("error");
        return res.status(401).json({error:error.error});
    }

}

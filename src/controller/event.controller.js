import  Event from "../models/event.model.js"


export const addEvent = async (req,res)=>{
    const data = req.body;
    try
    {
        const result = await Event.create(data);
        return res.status(201).json("Event Added"+result);

    }catch(error){
        console.log(error);
        return res.status(401).json("Error"+error);
    }
    
}
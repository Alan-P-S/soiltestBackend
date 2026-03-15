import Test from "../models/test.model.js"
import User from "../models/user.model.js";
import Plot from "../models/plot.model.js";
export const addTest = async (req, res) => {
    const data = req.body;
    try {
        await Test.create(data);
        return res.status(201).json({ message: "Test Created" });
    } catch (error) {
        return res.status(401).json({ message: "Error", error });
    }
}
export const alltests = async (req, res) => {
    try {
        const tests = await Test.findAll({ where: { status: "pending" },include:[{model:User},{model:Plot}] });
        return res.status(201).json(tests);
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: "Error", error });
    }
}

export const updateTestStatus = async (req,res)=>{
    const testId = req.params.testId;
    console.log("TestID", testId);
    const updates = {status:'completed'}
    try{
        const test = await Test.findByPk(testId);
        if(test){
            const updatedTest = await test.update(updates);
            console.log("Test Status Updated");
            return res.status(200).json(updatedTest);
        }else{
            console.log("Cannot find Test");
            return res.status(401).json({message:"Cannot Find Test"})
        }
    }catch(error){
        console.log("Internal Server Error");
        return res.status(501).json({message:"Internal Server Error"})
    }
}
import Test from "../models/test.model.js"
import User from "../models/user.model.js";

export const updateTest = async (req, res) => {
    const data = req.body;
    try {
        await Test.create(data);
        return res.status(201).json({ message: "Test Created" });
    } catch (error) {
        return res.status(401).json({ message: "Error", error });
    }
}


export const allprograms = async (req, res) => {
    try {
        const tests = await Test.findAll({ where: { status: "pending" },include:[{model:User}] });
        return res.status(201).json({ data: tests });
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: "Error", error });
    }
}
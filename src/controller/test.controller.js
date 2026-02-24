import Test from "../models/test.model.js"
import User from "../models/user.model.js";

export const updateTest = async (req, res) => {
    const { userId } = req.body;
    try {
        await Test.create({ UserId: userId });
        return res.status(201).json({ message: "Test Created" });
    } catch (error) {
        return res.status(401).json({ message: "Error", error });
    }
}

export const alltests = async (req, res) => {
    const { userId } = req.body;
    try {
        const tests = await User.findByPk(userId, {
            include: [Test]
        });
        return res.status(201).json({ data: tests });
    } catch (error) {
        return res.status(401).json({ error: "Error", error });
    }
}
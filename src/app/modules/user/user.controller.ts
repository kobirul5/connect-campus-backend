import { Request, Response } from "express";
import { User } from "./user.model";

export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;

        if (!email) {
            res.status(400).json({ message: "Email is required" });
            return
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return
        }

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        console.error("Error fetching user by email:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
        return
    }
};

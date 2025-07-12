import { Request, Response } from "express";
import { User } from "./user.model";
import { Role } from "./user.intrface";

const createUser = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const { name, email, password, phone, picture, } = body;
        // basic validation
        if (!name || !email) {
            res.status(400).json({ message: "Name and Email are required" });
            return
        }

        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).json({ message: "User already exists" });
            return
        }

        const newUser = new User({
            name,
            email,
            password: password || "",
            phone: phone || "",
            picture: picture || "",
            address:"",
            role:Role.USER,
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};



const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;

        if (!email) {
            res.status(400).json({ message: "Email is required" });
            return
        }

        const user = await User.findOne({ email: email }).select('-password');

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


const updateUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const updateData = req.body;

    if (!email) {
       res.status(400).json({ message: "Email is required" });
      return
    }

    const user = await User.findOneAndUpdate(
      { email: email },
      { $set: updateData },
      { new: true, runValidators: true, fields: "-password" }
    );

    if (!user) {
       res.status(404).json({ message: "User not found" });
      return
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { getUserByEmail, createUser, updateUser }

import { Request, Response } from "express";
import { College } from "./college.model";


// Create a new college
export const createCollege = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const savedCollege = await College.create(data);
    res.status(201).json({success: true, savedCollege});
  } catch (error) {
    res.status(500).json({ message: "Failed to create college", error });
  }
};

// Get all colleges
export const getAllColleges = async (req: Request, res: Response) => {
  try {
    const colleges = await College.find();
    res.status(200).json({success: true, data:colleges});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch colleges", error });
  }
};

// Get a single college by id
export const getCollegeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const college = await College.findById(id);
    if (!college) {
       res.status(404).json({ message: "College not found" });
       return
    }
    res.status(200).json({success: true, data:college});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch college", error });
  }
};

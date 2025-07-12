import express from "express";
import { createCollege, getAllColleges, getCollegeById } from "./college.controller";


export const collageRouter = express.Router();

collageRouter.post("/", createCollege);

collageRouter.get("/", getAllColleges);

collageRouter.get("/:id", getCollegeById);



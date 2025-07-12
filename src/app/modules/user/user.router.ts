import express from "express";
import { createUser, getUserByEmail, updateUser } from "./user.controller";

export const userRouter = express.Router();

userRouter.get("/:email", getUserByEmail);
userRouter.post("/", createUser);
userRouter.put("/:email", updateUser);



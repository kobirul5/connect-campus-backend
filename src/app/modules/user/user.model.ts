import { model, Schema } from "mongoose";
import { IUser, Role } from "./user.intrface";

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
        },
        picture: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
        },
        role: {
            type: String,
            enum: Object.values(Role),
            default: Role.USER,
        },
    },
    {
        timestamps: true,
    }
);

export const User = model<IUser>("User", userSchema);

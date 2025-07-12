import { Types } from "mongoose";

export enum Role {
    SURER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    USER = "USER",
}


export interface IUser {
    name: string;
    email: string;
    password?: string;
    phone?: string;
    picture?: string;
    address?: string;
    university?:Types.ObjectId
    role: Role;
}
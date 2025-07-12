"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_intrface_1 = require("./user.intrface");
const userSchema = new mongoose_1.Schema({
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
    university: String,
    address: {
        type: String,
        default: "",
    },
    role: {
        type: String,
        enum: Object.values(user_intrface_1.Role),
        default: user_intrface_1.Role.USER,
    },
}, {
    timestamps: true,
});
exports.User = (0, mongoose_1.model)("User", userSchema);

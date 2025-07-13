"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admission = void 0;
const mongoose_1 = require("mongoose");
const AdmissionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.Admission = (0, mongoose_1.model)('Admission', AdmissionSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.College = void 0;
const mongoose_1 = require("mongoose");
const collegeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    admissionDates: {
        type: String,
        required: true,
    },
    events: [
        {
            name: { type: String, required: true },
            date: { type: String, required: true },
        },
    ],
    researchHistory: [
        {
            title: { type: String, required: true },
            year: { type: Number, required: true },
        },
    ],
    sports: [
        {
            type: String,
            required: true,
        },
    ],
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.College = (0, mongoose_1.model)("College", collegeSchema);

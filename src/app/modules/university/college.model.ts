import { Schema, model } from "mongoose";
import { ICollege } from "./college.interface";

const collegeSchema = new Schema<ICollege>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const College = model<ICollege>("College", collegeSchema);

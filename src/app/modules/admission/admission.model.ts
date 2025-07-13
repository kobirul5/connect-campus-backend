import { Schema, model } from 'mongoose';
import { IAdmission } from './admission.interface';

const AdmissionSchema = new Schema<IAdmission>({
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


export const Admission = model<IAdmission>('Admission', AdmissionSchema);



import { Document, Schema, model, models } from "mongoose";

const EmailSchema = new Schema({
    address: {
        type: String,
        required: true,
        unique: true,
    },
    isDefault: {
        type: Boolean,
        default: false,
    }
}, { _id: false });

const UserSchema = new Schema({
    clerkId: {
        type: String, 
        required: true,
        unique: true
    },
    emails: [EmailSchema],
    username: {
        type: String, 
        required: true,
        unique: true
    },
    photo: {
        type: String, 
        required: true,
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    planId: {
        type: Number,
        default: 1,
    },
});

const User = models?.User || model("User", UserSchema);

export default User;

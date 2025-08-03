import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: {
        type:String,
    },
    email: {
        type:String,
    },
    password: {
        type:String,
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel
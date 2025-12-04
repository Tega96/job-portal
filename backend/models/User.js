import { Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["jobseekder", 'employer'], required: true},
    avatar: String,
    resume: String,
    // for employer
    companyName: String,
    companyDescripton: String,
    companyLogo, String,
}, {timestamps: true});

// Encrypt password before save
userSchema.pre("save", async (next) => {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Match the entered password
userSchema.method.matchPassword = () => {
    return bcrypt.compare(enteredPassword, this.password);
}
const User = model("User", userSchema)
export default User;
import { Schema } from 'mongoose'

const applicationSchema = new Schema({
    job: {type: Schema.Types.ObjectId, ref: "Job", required: true},
    application: {type: Schema.Types.ObjectId, ref: "User", required: true},
    resume: {type: String},
    status: {
        type: String,
        enum: ["Applied", "In Review", "Rejected", "Accepted"],
        default: "Applied",
    },
}, { timestamps: true }
);

const Application = model("Application", applicationSchema);

export default Application;
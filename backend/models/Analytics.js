import { Schema } from 'mongoose'

const analyticsSchema = new Schema({
    employer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalJobsPosted: { type: Number, default: 0 },
    totalApplicationsReceived: { type: Number, default: 0 },
    totalHired: { type: Number, default: 0 },
}, {timestamps: true}
);

const Analytics = model("Analytics", analyticsSchema)

export default Analytics;
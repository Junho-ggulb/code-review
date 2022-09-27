import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    createdAt: Date,
    useAt: String,
    hashtags: [{ type: String }],
    meta: {
        views: Number
    }
})

const Topic = mongoose.model("Topic", TopicSchema)

export default Topic;
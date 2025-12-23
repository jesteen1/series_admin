import mongoose from "mongoose";

const postsScehma = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const PostModel = mongoose.models.Post || mongoose.model("Post", postsScehma)  

export default PostModel 
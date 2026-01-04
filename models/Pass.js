import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    // _id: { type: String, required: false },
    pass: { type: String, required: true },
    expiresAfter:{ type: String, required: true },
    createdAt:{ type: String, required: true },
    
})


const PassModel = mongoose.models.Pass || mongoose.model("Pass", movieSchema)


export default PassModel    
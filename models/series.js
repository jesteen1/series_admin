import mongoose from "mongoose";
import { describe } from "node:test";
import { type } from "os";

const movieSchema = new mongoose.Schema({
    // _id: { type: String, required: false },
    seriesName: { type: String, required: true },
    episodename: { type: String, required: true },
    season: { type: String, required: true },
    year: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    MovieLink: { type: String, required: true },
    describe:{type:String },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    type: { type: String, required: true },
})


const MovieModel = mongoose.models.Series || mongoose.model("Series", movieSchema)


export default MovieModel 
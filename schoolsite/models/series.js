import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    // _id: { type: String, required: false },
    seriesName: { type: String, required: true },
    episodename: { type: String, required: true },
    season: { type: String, required: true },
    year: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    MovieLink: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    type: { type: String, required: true },
})


const MovieModel = mongoose.models.Series || mongoose.model("Series", movieSchema)


export default MovieModel 
import { NextResponse } from "next/server"; import connect from "./../.././../db";
import PostModel from "../../../models/post";
import MovieModel from "../../../models/series";
import { Console } from "console";

export const GET = async (req, res) => {
    try {
        await connect()

        // Get query parameters
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");



        const Movie = await MovieModel.find({ "_id": id })
        console.log(Movie)

        return new Response(JSON.stringify(Movie), { status: 200 })

    } catch (e) {
        return new NextResponse("Internal Server Error1" + e, { status: 404 })
    }
}
export const PUT = async (request) => {
    try {
        await connect()

        // Get query parameters


const data = await request.json()
console.log(data,"data1")
const id = data._id
console.log(id,"id")
        const Movie = await MovieModel.findByIdAndUpdate(id, data)
        console.log(Movie)


        return new Response(JSON.stringify(Movie), { status: 200 })
      

    } catch (e) {
        console.log(e,"error")
        return new NextResponse("Internal Server Error1" + e, { status: 405 })
    }
}


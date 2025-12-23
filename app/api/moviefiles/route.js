import { NextResponse } from "next/server";
import connect from "./../.././../db";
import PostModel from "../../../models/post";
import MovieModel from "../../../models/series";
import { Console } from "console";
import { NextRequest } from "next/server";
export const GET = async (req) => {
    try {

        await connect()
        const { searchParams } = new URL(req.url);
        
        // console.log(searchParams)
       
       
        const Movie = await MovieModel.find({seriesName:searchParams.get("name"),type:"File"})
       
        console.log(Movie)
        return new NextResponse(JSON.stringify(Movie), { status: 200 })
    } catch (e) {
        console.log(e,"error")
        return new NextResponse("Internal Server Error1" + e, { status: 404 })
    }
}


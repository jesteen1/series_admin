import mongoose from "mongoose";
const connect=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewURLParser:true,
            useUnifiedTopology:true
        } )
        console.log("Connected to mongodb")

    }catch(e){
        throw new Error("Connection error in mongodb")
    }
}
export default connect
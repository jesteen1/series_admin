
import { NextResponse } from "next/server"
import connect from "./../.././../db";
import { cookies } from "next/headers"
import PassModel from "../../../models/Pass"
function makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export const POST= async(req) =>{
    try{

        await connect()
        const data=await req.json()
         const cookieStore = await cookies()
    var datas=""
        console.log(data)
        if (process.env.SECRET_KEY==data){
            datas="okay"
           var randdata={"pass":JSON.stringify(makeid(18))}
          //  console.log(randdata)
            const data= await PassModel.create(randdata)
            
             cookieStore.set('pass',randdata.pass,{maxAge:"86400"})
        }
        else{
            var cookiedata=cookieStore.get("pass").value
            console.log(cookiedata,"ddd")
            var servedata=await PassModel.findOne({pass:cookiedata})
            if(servedata){
                datas="okay"
            }
            else{
                datas="no"
            }
        }


        return new NextResponse(datas,{status:200})
    }
    catch(e){

        console.log(e,"error")
        return new NextResponse("Internal Server Error1" + e, { status: 405 })
    }
}
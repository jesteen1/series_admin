
"use client"

import { useRouter } from "next/navigation"

import Card from "../components/Card"
import { use, useEffect, useState } from "react"


import Movie from "../components/Movie"
import { NextResponse } from "next/server"
import Form from "../components/Form"

import Link from "next/link"

import Boxpass from "../components/Boxpass"
import { json } from "stream/consumers"
import { getCookie, setCookie, deleteCookie } from 'cookies-next'
import { hash } from "crypto"
import Loading from "../components/Loading"
const PostPage = () => {
    const router = useRouter()
    const [data, setData] = useState([])
    const [data_id, setData_id] = useState(null)
    const [moviedata, setMoviedata] = useState([])
    const [confirmation, setConfirmation] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [error, setError] = useState(10);
    const [delstate, setDelstate] = useState(false)
    const [seriesname, setSeriesname] = useState([])
    const [pasword, setpassword] = useState(false)
    const [note,Setnote]=useState("")
    const [load,setload]=useState(true)

    const seepost = async () => {

        try {
            const data = await fetch("/api/posts", { method: "GET", cache: "no-cache", headers: { secret: "peterparker" } })
            const res = await data.json()
            // console.log(res, "fetching data")
            setData(res)


        }

        catch (e) {
            console.log(e, "fetching data error")
        }
    }
    const movepost = async () => {

        try {
            const data = await fetch("/api/moviepost", { method: "GET", cache: "no-cache" })
            const res = await data.json()
            // console.log(res, "fetching data")
            setMoviedata(res)
            const series = res.map((data: any) => { return data.seriesName })
            setSeriesname(series)
            //  console.log(series,"seriesname")

            handler()
        }

        catch (e) {
            console.log(e, "fetching data error")
        }
    }
const testpass=async(notes:any)=>{
    var datas=await fetch("/api/Password",{method: "POST",cache:"no-cache",headers:{"Content-Type": "application/json"},body:JSON.stringify(notes)})
    var text=await datas.text()
    console.log(text)
    if(text=="okay"){
        setpassword(true)
    }
}
    const handler=()=>{
            setload(false)
    }
    
    useEffect(() => {
        testpass(note)
        seepost()
        movepost()
        
    }, [note])



    // console.log(data) adding data
    const getdata = async (datas: any) => {
        //    console.log(datas, "data")
        try {
            setDelstate(true)
            const data1 = await fetch("/api/moviepost", { method: "POST", cache: "no-cache", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datas) })

            //    console.log(data1, "fetching data")
            setError(data1.status)
            movepost()


        }

        catch (e) {

            console.log(e, "error fetching data error")

        }
    }
    const getdatas = async (data: any) => {
        setDelstate(true)
        //  console.log(data, "data")
        setConfirmation(true)
        setData_id(data)


        return data
    }
    const updatedata = (updatedatas: any) => {
        setDelstate(false)
        //  console.log(updatedatas,"updatedata")
        setConfirmation(true)
        setData_id(updatedatas)
    }
    const yes = async () => {
        if (delstate) {

            var datas = await fetch("/api/moviepost", { method: "Delete", cache: "no-cache", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data_id) })
            movepost()
        }
        else {

            router.push(`updates/id=${data_id}`)
        }
        setConfirmation(false)

    }
    const no = () => {
        setConfirm(false)
        setConfirmation(false)

    }

 const datas= (data:any) =>{
    Setnote(data)
    console.log(data) 
    testpass(data)
}

    return (
       
<section>

   { pasword ? <section className="bg-black">

        {error == 404 ? <div className="bg-red-500 p-5 text-4xl  text-white text-center"> <p> server issue</p></div> : error == 200 ? <div className="bg-green-500 p-5 text-4xl  text-white text-center"> <p>updated sucessfull</p></div> : null}






        <div className="flex justify-center mb-3" >


            <Form senddata={getdata} seriesname={[...new Set(seriesname)]} />
        </div>
        {/* <div className="flex flex-wrap gap-5 p-5">
       
        {data.map((des) => {
            return <Card key={des._id} title={des.title} description={des.description} imageUrl={des.imageUrl} linkHref={""} />
        })}

    </div> */}
        <div className="text-center text-2xl font-bold text-4xl lg:text-3xl xl:text-6xl mt-10 text-white"><p>The series </p></div>
        <div className="flex flex-wrap gap-5 p-5 border">

            {moviedata.map((desp: any) => {
                return <Movie link={`movie/${desp.seriesName}`} updatedatas={updatedata} deldata={getdatas} key={desp._id} data_id={desp._id} uploadTimeAgo={desp.createdAt} seriesName={desp.seriesName} releaseYear={desp.year} imageUrl={desp.imageUrl} linkHref={desp.MovieLink} type={desp.type} description={desp.episodename} />
            })}

        </div>
        {confirmation ? <div>    <div id="confirmationModal"
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
            <div
                className="w-full max-w-sm p-8 bg-gray-800 border border-white/10 rounded-2xl shadow-2xl text-center transform transition-all">
                <div className="mb-6">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100/10 mb-4">
                        <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Are you sure?</h3>
                    {delstate ? <p className="text-gray-400">Do you really want to delete  this entry? This action cannot be undone.</p> : <p className="text-gray-400">Do you really want to update   this entry? This action can be undone.</p>}
                </div>

                <div className="flex flex-col space-y-3">
                    <button type="button" onClick={() => yes()}

                        className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors duration-200">
                        Yes, Create it
                    </button>

                    <button type="button" onClick={() => no()}
                        className="w-full py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-colors duration-200">
                        Cancel
                    </button>
                </div>
            </div>
        </div>  </div> : null}
    </section> : <Boxpass getdata={datas} />}

                {load?<Loading />:null}
</section>


    )
}
export default PostPage
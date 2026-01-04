"use client"
import Movie from "../../components/Movie"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation";
import EpisodeCard from "../../components/Episodecard";
import SeasonCard from "../../components/Seasonselect";
import Video from "../../components/Video";
import { useRouter } from "next/navigation";
import { ifError } from "assert";
import ScrollToTop from "../../components/Scroll";
import Boxpass from "../../components/Boxpass" 
import Loading from "@/app/components/Loading";
function movies() {
    const router=useRouter()
    const [moviedata, setMoviedata] = useState([])
    const params = useParams();
    const [chSeries, Setcheries] = useState("")
    const [data_id, setData_id] = useState(null)
    const [movieurl, setMovieurl] = useState("")
    const [episodeName, setEpisodeName] = useState("")
    const decoded = decodeURIComponent(String(params.slug) );
    const encoded = encodeURIComponent(decoded);
    const [confirmation, setConfirmation] = useState(false);
    const [delstate, setDelstate] = useState(false);
    const [Password,setpassword]=useState(false)
    const [note,Setnote]=useState("")
    const [load,setload]=useState(true)
   // console.log(encoded, "encoded")
    const movepost = async () => {

        try {
            const data = await fetch(`/api/moviefiles/?name=${encoded}`, { method: "GET", cache: "no-cache" })
            const res = await data.json()
            // console.log(res, "fetching data")
            const filteredData = res.filter((data: any) => data.season == "SEASON 1")
            setMoviedata(res)
handler()
        }


        catch (e) {
            console.log(e, "fetching data error")
        }
    }
    const testpass=async(noted)=>{
    var datas=await fetch("/api/Password",{method: "POST",cache:"no-cache",headers:{"Content-Type": "application/json"},body:JSON.stringify(noted)})
    var text=await datas.text()
   // console.log(text)
    if(text=="okay"){
        setpassword(true)
    }
}
 const handler=()=>{
            setload(false)
    }
    useEffect(() => {
        testpass(note)
        Setcheries("SEASON 1")
        movepost()
        
    }, [])
    const selectedSeason = (season: any) => {
      //  console.log(season, "season")
        const filteredData = moviedata.filter((data: any) => data.season == season)
      //  console.log(filteredData, "moviedata")
        Setcheries(season)
    }
    const getdata = (url:any,episodeName:string) => {
    
      //  console.log(url, "data[0]")
      //  console.log(episodeName, "data[1]")
        setMovieurl(url)
        setEpisodeName(episodeName)
    }
    const editdata = (id:any) => {
     setDelstate(false)
       // console.log(id,"updatedata")
        setConfirmation(true)
        setData_id(id)
    }
    const deletedata = (id:any) => {
       // console.log(id, "deletedata")
        setConfirmation(true)
        setDelstate(true)
      
       // console.log(id, "data")
        setConfirmation(true)
        setData_id(id)
    }
    const yes = async() => {
         if(delstate){

             var datas = await fetch("/api/moviefiles", { method: "Delete", cache: "no-cache", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data_id) })
             movepost()
         }
         else{
            
           router.push(`/updates/id=${data_id}`)
         }
             setConfirmation(false)
       
    }
    const no = () => {
         
        setConfirmation(false)
      
    }
     const datas= async(data:any) =>{
  //  console.log(data)

    Setnote(data)
    testpass(data)
}
    return (
        <section>

            { Password?<section className="bg-black">
                 <div className="p-5 bg-black text-red-600    w-full text-center text-captialize text-4xl font-bold tezt-glow font-stretch-90%">
     
                    <p>SERIES NAME: {decoded}</p> 
                 </div>
                         
                 <div>
                     <Video MovieLink={movieurl} episodename={episodeName} />
                 </div>
                
     
                 {/* Season Selector - Extract unique seasons */}
                 <div className="bg-black">
                     <SeasonCard
                         season={[...new Set(moviedata.map((data: any) => data.season))]} //doubt in that
                         onSeasonChange={selectedSeason} 
                     />
                 </div>
     
                 <div className="text-center text-2xl bg-black p-5 font-bold text-4xl lg:text-3xl xl:text-6xl  text-white"><p>The episodes </p></div>
                 <div className="flex flex-wrap gap-5 p-5">
                     {moviedata.map((desp: any) => {
                         return <EpisodeCard  key={desp._id} createdAt={desp.createdAt} editdata={editdata} deletedata={deletedata} id={desp._id}  senddata={getdata} selectseries={chSeries} series={desp.season} episodeName={desp.episodename} imageUrl={desp.imageUrl} movieurl={desp.MovieLink} />
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
                             {delstate?<p className="text-gray-400">Do you really want to delete  this entry? This action cannot be undone.</p>:<p className="text-gray-400">Do you really want to update   this entry? This action can be undone.</p>}
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
             </section>:<Boxpass getdata={datas} />}
            {load?<Loading />:null} 
        </section>
    )
}
export default movies

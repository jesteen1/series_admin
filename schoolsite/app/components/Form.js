import { useState } from "react"

function Form({ senddata }) {
    const [seriesname, SetSeriesname] = useState("")
    const [EpisodeName, SetEpisodeName] = useState("")
    const [movieurl, Setmovieurl] = useState("")
    const [Year, SetYear] = useState("")
    const [Imageurl, SetImageurl] = useState("")
    const [Type, SetType] = useState("")
    const [season, SetSeason] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (seriesname && Year && Imageurl && Type && EpisodeName && movieurl && season) {
            senddata({ seriesName: seriesname, episodename: EpisodeName, year: Year, imageUrl: Imageurl, MovieLink: movieurl, type: Type, season: season });
        }
        else {

            window.alert("Please fill all the fields")
        }
    };
    return (
        <section className="">
            <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
                <h2
                    className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 text-center">
                    Add New Series
                </h2>

                <form className="text-white" onSubmit={handleSubmit}>

                    <div >
                        <label className="block text-sm font-medium  mb-1" htmlFor="name">
                            Series Name
                        </label>

                        <input type="text" id="names" name="names"
                            className="all-caps w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500"
                            placeholder="Enter series name" required value={seriesname} onChange={(e) => SetSeriesname(e.target.value.toUpperCase())} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-1" htmlFor="name">
                            Name of episode
                        </label>

                        <input type="text" id="names" name="names"
                            className="all-caps  w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500"
                            placeholder="Enter episode name" required value={EpisodeName} onChange={(e) => SetEpisodeName(e.target.value.toUpperCase())} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-1" htmlFor="name">
                            Name of season
                        </label>

                        <input type="text" id="names" name="names"
                            className="all-caps  w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500"
                            placeholder="Enter season name" required value={season} onChange={(e) => SetSeason(e.target.value.toUpperCase())} />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-white mb-1" htmlFor="year">
                            Release Year
                        </label>
                        <input type="number" id="year" name="year"
                            className="all-caps  w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="e.g. 2024" required value={Year} onChange={(e) => SetYear(e.target.value)} />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-white mb-1" htmlFor="imageUrl">
                            Cover Image URL
                        </label>
                        <input type="url" id="imageUrl" name="imageUrl"
                            className="all-caps  w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="https://example.com/image.jpg" required value={Imageurl} onChange={(e) => SetImageurl(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-1" htmlFor="movieurl">
                            Cover movie URL
                        </label>
                        <input type="url" id="imageUrl" name="imageUrl"
                            className="all-caps w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="movie url" required value={movieurl} onChange={(e) => Setmovieurl(e.target.value)} />
                    </div>
                    <p className=" text-white">file type</p>
                    <select name="" id="" className="bg-gray-800 border  focus-within::bg-gray-800 text-white  m-5 p-5 m-5 focus:outline-none focus:border-transparent transition duration-200" value={Type} onChange={(e) => SetType(e.target.value)}>
                        <option value="" className="bg-gray-800 focus::bg-gray-800" >.....</option>
                        <option value="File" className="bg-gray-800 focus::bg-gray-800" >File</option>
                        <option value="Folder" className="bg-gray-800 focus-within::bg-gray-800" >Folder</option>
                    </select>




                    <button type="submit"



                        className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 mt-4">
                        Create Entry
                    </button>
                </form>
            </div>
        </section>

    )
}
export default Form
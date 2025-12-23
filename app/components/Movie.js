import Link from "next/link";
function timeAgo(date) {
    const seconds = Math.floor((Date.now() - new Date(date)) / 1000);

    if (seconds < 60) return "just now";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return minutes + " minutes ago";

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return hours + " hours ago";

    const days = Math.floor(hours / 24);
    if (days < 7) return days + " days ago";

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return weeks + " weeks ago";

    const months = Math.floor(days / 30);
    if (months < 12) return months + " months ago";

    const years = Math.floor(days / 365);
    return years + " years ago";
}
const Movie = ({
    seriesName = "",
    releaseYear = "2024",
    imageUrl = "data:image/webp;base64,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",
    uploadTimeAgo = "2025-12-20T16:19:28.266Z",
    data_id = "",
    deldata,
    updatedatas,
    type = "",
    link="",
    linkHref=""
}) => {

    var confirmation = false
    return (
        <div className="text-caps w-80 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
<Link href={link} >
            <div className="relative aspect-square w-full bg-zinc-800">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={seriesName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600">
                        <span className="text-sm">No Image</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            
            <div className="p-4" >
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-caps text-lg font-bold text-white truncate pr-2" title={seriesName}>
                        {seriesName}
                    </h2>

                    <span className="text-caps text-sm font-medium text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                        {releaseYear}
                    </span>
                </div>
                </div>
                </Link>

                {/* Latest Uploads Time Ago */}
                <div className="mb-4 text-xs flex text-zinc-500 font-medium  ">
                    <div>Uploaded :{timeAgo(uploadTimeAgo)} </div> <p className="ml-auto">{type=="Folder"?<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M64 448l384 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64L298.7 80c-6.9 0-13.7-2.2-19.2-6.4L241.1 44.8C230 36.5 216.5 32 202.7 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64z"/></svg>:type}</p>
                </div>
               
                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                    <button data-id={data_id} onClick={(e) => updatedatas(e.target.dataset.id)} className="flex-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">
                        Edit
                    </button>
                    {/* e.target.dataset.id */}
                    <button data-id={data_id} onClick={(e) => deldata(e.target.dataset.id)} className="flex-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors">
                        Delete
                    </button>


                </div>
            </div>
       
        
    );
}

export default Movie;
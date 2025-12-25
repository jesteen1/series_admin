
const EpisodeCard = ({
    episodeName = "",
    id = "",
    imageUrl = "data:image/webp;base64,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",
    series = "Series 1",
    selectseries = "Series 1",
    movieurl = "fff",
    senddata,
    editdata,
    deletedata,
    createdAt,
}) => {
    // Helper function to calculate time ago
    const getTimeAgo = (dateString) => {
        if (!dateString) return "";
        const now = new Date();
        const past = new Date(dateString);
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const elapsed = now - past;

        if (elapsed < msPerMinute) return Math.round(elapsed / 1000) + ' seconds ago';
        else if (elapsed < msPerHour) return Math.round(elapsed / msPerMinute) + ' minutes ago';
        else if (elapsed < msPerDay) return Math.round(elapsed / msPerHour) + ' hours ago';
        else if (elapsed < msPerDay * 30) return Math.round(elapsed / msPerDay) + ' days ago';
        else return past.toLocaleDateString();
    };

    // Check if the episode is "NEW" (created within 4 days)
    const isNew = () => {
        if (!createdAt) return false;
        const now = new Date();
        const past = new Date(createdAt);
        const fourDaysInMs = 4 * 24 * 60 * 60 * 1000;
        return (now - past) < fourDaysInMs;
    };
const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  
};
    return (
        <section>
            {selectseries == series ? (
                <div className="w-80 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 cursor-pointer">

                    {/* Image Section */}
                    <div onClick={(e) =>{ senddata(movieurl, episodeName) , ScrollToTop()}} className="relative aspect-square w-full bg-zinc-800">
                        {isNew() && (
                            <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded shadow-[0_0_15px_rgba(220,38,38,0.5)] animate-pulse border border-red-500/50 scale-110">
                                NEW
                            </div>
                        )}
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={episodeName}
                                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-600">
                                <span className="text-sm">No Image</span>
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/60 to-transparent">
                            <p className="text-white text-xs font-bold tracking-tight opacity-70">{series}</p>
                        </div>
                    </div>

                    {/* Episode Name Section */}
                    <div className="p-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
                        <h3 className="text-lg font-bold w-full text-white  group-hover:text-red-500 transition-colors duration-300" title={episodeName}>
                            {episodeName || "Unnamed Episode"}
                        </h3>
                        {createdAt && (
                            <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mt-1 flex items-center gap-1.5">
                                <span className="w-1 h-1 bg-red-600 rounded-full shadow-[0_0_5px_rgba(220,38,38,1)]"></span>
                                {getTimeAgo(createdAt)}
                            </p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="text-zinc-400 flex gap-2 p-4 pt-0 justify-between items-center">
                        <button
                          
                            onClick={(e) => {
                                
                                editdata(id);
                            }}
                            className="flex-1 bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest py-2.5 rounded-lg border border-white/5 transition-all active:scale-95"
                        >
                            Edit
                        </button>
                        <button
                            
                            onClick={(e) => {
                              
                                deletedata(id);
                            }}
                            className="bg-red-950/30 hover:bg-red-600 text-red-500 hover:text-white p-2.5 rounded-lg border border-red-500/20 transition-all active:scale-95 group/del"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default EpisodeCard;

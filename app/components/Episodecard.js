const EpisodeCard = ({
    episodeName = "",
    id = "",
    imageUrl = "",
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

    return (
        <section>
            {selectseries == series ? (
                <div className="w-80 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 cursor-pointer">

                    {/* Image Section */}
                    <div onClick={(e) => senddata(movieurl?.toString().replace(/^\s+|\s+$/g, ''), episodeName)} className="relative aspect-square w-full bg-zinc-800">
                        {isNew() && (
                            <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded shadow-[0_0_15px_rgba(220,38,38,0.5)] animate-pulse border border-red-500/50 scale-110">
                                NEW
                            </div>
                        )}
                        {imageUrl?.toString().replace(/^\s+|\s+$/g, '') ? (
                            <img
                                src={imageUrl.toString().replace(/^\s+|\s+$/g, '')}
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
                        <h3 className="text-lg font-bold text-white truncate group-hover:text-red-500 transition-colors duration-300" title={episodeName}>
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
                            data-id={id}
                            onClick={(e) => {
                                e.stopPropagation();
                                editdata(e.target.dataset.id);
                            }}
                            className="flex-1 bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest py-2.5 rounded-lg border border-white/5 transition-all active:scale-95"
                        >
                            Edit
                        </button>
                        <button
                            data-id={id}
                            onClick={(e) => {
                                e.stopPropagation();
                                deletedata(e.target.dataset.id);
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

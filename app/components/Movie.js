import Link from "next/link";

function timeAgo(date) {
    if (!date) return "";
    const seconds = Math.floor((Date.now() - new Date(date)) / 1000);

    const getUnit = (value, unit) => {
        return `${value} ${unit}${value === 1 ? "" : "s"} ago`;
    };

    if (seconds < 60) return "just now";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return getUnit(minutes, "minute");

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return getUnit(hours, "hour");

    const days = Math.floor(hours / 24);
    if (days < 7) return getUnit(days, "day");

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return getUnit(weeks, "week");

    const months = Math.floor(days / 30);
    if (months < 12) return getUnit(months, "month");

    const years = Math.floor(days / 365);
    return getUnit(years, "year");
}

const Movie = ({
    seriesName = "",
    releaseYear = "2024",
    imageUrl = "",
    uploadTimeAgo = "2025-12-20T16:19:28.266Z",
    data_id = "",
    deldata,
    updatedatas,
    type = "",
    link = "",
    description = "",
    linkHref = ""
}) => {
    // Check if the movie is "NEW" (created within 4 days)
    const isNew = () => {
        if (!uploadTimeAgo) return false;
        const now = new Date();
        const past = new Date(uploadTimeAgo);
        const fourDaysInMs = 4 * 24 * 60 * 60 * 1000;
        return (now - past) < fourDaysInMs;
    };

    return (
        <div className="relative w-80 min-h-[480px] z-0 hover:z-50 transition-all duration-300 group">
            <div className="absolute top-0 left-0 w-80 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-[0_0_50px_rgba(220,38,38,0.25)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.06] group-hover:bg-zinc-800/90 backdrop-blur-md">
                <Link href={link}>
                    <div className="relative aspect-square w-full bg-zinc-800 overflow-hidden">
                        {isNew() && (
                            <div className="absolute top-3 left-3 z-20 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded shadow-[0_0_15px_rgba(220,38,38,0.5)] animate-pulse border border-red-500/50">
                                NEW
                            </div>
                        )}
                        {imageUrl ? (
                            <img
                                src={imageUrl.toString().trim()}
                                alt={seriesName}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-600">
                                <span className="text-sm">No Image</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Content Section */}
                    <div className="p-5 relative">
                        <div className="flex items-start justify-between gap-3 mb-3">
                            <h2 className="text-caps text-lg font-black text-white leading-tight line-clamp-2 group-hover:text-red-500 transition-colors uppercase" title={seriesName}>
                                {seriesName}
                            </h2>
                            <span className="shrink-0 text-[10px] font-black text-zinc-400 border border-zinc-700 bg-zinc-800/50 px-2 py-1 rounded-md tracking-tighter">
                                {releaseYear}
                            </span>
                        </div>

                        {/* Latest Uploads Time Ago */}
                        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.15em] mb-4">
                            <div className="flex items-center gap-1.5 text-zinc-500">
                                <span className="w-1 h-1 bg-red-600 rounded-full shadow-[0_0_5px_rgba(220,38,38,1)]" />
                                {timeAgo(uploadTimeAgo)}
                            </div>
                            <div className="text-blue-500 flex items-center gap-1">
                                {type === "Folder" ? (
                                    <>
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 512 512"><path d="M64 448l384 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64L298.7 80c-6.9 0-13.7-2.2-19.2-6.4L241.1 44.8C230 36.5 216.5 32 202.7 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64z" /></svg>
                                        <span>SERIES</span>
                                    </>
                                ) : (
                                    <span>{type}</span>
                                )}
                            </div>
                        </div>

                        {/* Description Section (Animated Reveal) */}
                        {description && (
                            <div className="grid grid-rows-[0fr] opacity-0 invisible group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out">
                                <div className="overflow-hidden">
                                    <div className="pt-4 border-t border-zinc-700/50 mt-4 relative">
                                        <div className="absolute left-0 top-4 w-[2.5px] h-3 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
                                        <p className="text-[11px] font-bold text-zinc-400 leading-relaxed pl-4 tracking-wide uppercase">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Link>

                {/* Action Buttons */}
                <div className="flex gap-2 p-4 pt-0">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            updatedatas(data_id);
                        }}
                        className="flex-1 px-4 py-2.5 bg-zinc-800 hover:bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg border border-white/5 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn"
                    >
                        <span>Edit</span>
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            deldata(data_id);
                        }}
                        className="px-4 py-2.5 bg-red-950/20 hover:bg-red-600 group/del transition-all active:scale-95 rounded-lg border border-red-500/10 hover:border-red-500"
                    >
                        <svg className="w-4 h-4 text-red-600 group-hover/del:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Movie;
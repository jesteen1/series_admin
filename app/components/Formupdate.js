"use client";

import { useState, createContext, useContext, useEffect } from "react";

const FormContext = createContext();

function Formupdate({ senddata, initialData, children = null }) {
    const [seriesname, SetSeriesname] = useState("");
    const [EpisodeName, SetEpisodeName] = useState("");
    const [movieurl, Setmovieurl] = useState("");
    const [Year, SetYear] = useState("");
    const [Imageurl, SetImageurl] = useState("");
    const [Type, SetType] = useState("");
    const [Id, SetId] = useState("");
    const [season, SetSeason] = useState("");
    useEffect(() => {
        if (initialData) {
            SetId(initialData._id || "");
            SetSeriesname(initialData.seriesName || "");
            SetEpisodeName(initialData.episodename || "");
            Setmovieurl(initialData.MovieLink || "");
            SetYear(initialData.year || "");
            SetImageurl(initialData.imageUrl || "");
            SetType(initialData.type || "");
            SetSeason(initialData.season || "");
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (seriesname && Year && Imageurl && Type && EpisodeName && movieurl) {
            senddata({
                _id: Id,
                seriesName: seriesname.toUpperCase(),
                episodename: EpisodeName.toUpperCase(),
                year: Year,
                imageUrl: Imageurl,
                MovieLink: movieurl,
                type: Type
            });
        } else {
            window.alert("Please fill all the fields");
        }
    };

    const value = {
        Id, SetId,
        seriesname, SetSeriesname,
        EpisodeName, SetEpisodeName,
        movieurl, Setmovieurl,
        Year, SetYear,
        Imageurl, SetImageurl,
        Type, SetType,
        season, SetSeason
    };

    return (
        <FormContext.Provider value={value}>
            <section className="flex justify-center items-center py-10 px-4">
                <div className="w-full max-w-lg p-10 bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5 relative overflow-hidden group">
                    {/* Glowing Orbs */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-1000"></div>
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] group-hover:bg-purple-600/20 transition-all duration-1000"></div>

                    <form onSubmit={handleSubmit} className="relative z-10 space-y-7">
                        {children || (
                            <>
                                <Formupdate.Title>Update Series</Formupdate.Title>
                                <Formupdate.Input
                                    label=""
                                    id="series"
                                    type="hidden"
                                    className="hidden"
                                    valueKey="Id"
                                    placeholder="Enter series name"
                                />
                                <Formupdate.Input
                                    label="Series Name"
                                    id="series"
                                    valueKey="seriesname"
                                    placeholder="Enter series name"
                                />
                                <Formupdate.Input
                                    label="Season Name"
                                    id="season"
                                    valueKey="season"
                                    placeholder="Enter season name"
                                />

                                <Formupdate.Input
                                    label="Episode Name"
                                    id="episode"
                                    valueKey="EpisodeName"
                                    placeholder="Enter episode name"
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Formupdate.Input
                                        label="Release Year"
                                        id="year"
                                        type="number"
                                        valueKey="Year"
                                        placeholder="e.g. 2024"
                                    />
                                    <Formupdate.Select
                                        label="Type"
                                        valueKey="Type"
                                        options={[
                                            { label: "File", value: "File" },
                                            { label: "Folder", value: "Folder" }
                                        ]}
                                    />
                                </div>

                                <Formupdate.Input
                                    label="Cover Image URL"
                                    id="image"
                                    type="url"
                                    valueKey="Imageurl"
                                    placeholder="https://example.com/image.jpg"
                                />

                                <Formupdate.Input
                                    label="Video URL"
                                    id="video"
                                    type="url"
                                    valueKey="movieurl"
                                    placeholder="Enter movie link"
                                />

                                <Formupdate.Submit>Update Entry</Formupdate.Submit>
                            </>
                        )}
                    </form>
                </div>
            </section>
        </FormContext.Provider>
    );
}

// Sub-components
Formupdate.Title = function FormTitle({ children }) {
    return (
        <h2 className="text-4xl font-black text-white mb-8 text-center tracking-tight">
            {children}
            <div className="h-1.5 w-24 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </h2>
    );
};

Formupdate.Input = function FormInput({ label, id, type = "text", placeholder, valueKey, required = true }) {
    const context = useContext(FormContext);
    const value = context[valueKey];
    const setter = context[`Set${valueKey.charAt(0).toUpperCase() + valueKey.slice(1)}`];

    return (
        <div className="space-y-2 group/input">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within/input:text-blue-400 transition-colors duration-300" htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="w-full px-6 py-4 bg-black border border-white/10 rounded-2xl text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all duration-300 hover:border-white/20"
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={(e) => setter(e.target.value.toUpperCase())}
            />
        </div>
    );
};

Formupdate.Select = function FormSelect({ label, valueKey, options }) {
    const context = useContext(FormContext);
    const value = context[valueKey];
    const setter = context[`Set${valueKey.charAt(0).toUpperCase() + valueKey.slice(1)}`];

    return (
        <div className="space-y-2 group/select">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within/select:text-blue-400 transition-colors duration-300">
                {label}
            </label>
            <div className="relative">
                <select
                    className="w-full px-6 py-4 bg-black border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 appearance-none cursor-pointer hover:border-white/20"
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                >
                    <option value="" className="bg-black">Select {label}</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-black">
                            {opt.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

Formupdate.Submit = function FormSubmit({ children }) {
    return (
        <button
            type="submit"
            className="w-full py-5 px-8 bg-white text-black font-black uppercase tracking-widest rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:bg-gray-200 transform active:scale-[0.98] transition-all duration-300 mt-6 relative overflow-hidden group/btn"
        >
            {children}
        </button>
    );
};

export default Formupdate;

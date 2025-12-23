'use client';

import { useState } from 'react';

export default function SeasonSelect({ onSeasonChange, defaultSeason = '', season }) {
    const [selectedSeason, setSelectedSeason] = useState(defaultSeason);

    const handleChange = (e) => {
        const seasonValue = e.target.value;
        setSelectedSeason(seasonValue);
        if (onSeasonChange) {
            onSeasonChange(seasonValue);
        }
    };

    // Check if season is an array or a single value
    const isArray = Array.isArray(season);

    return (
        <div className="inline-block">
            <select 
                value={selectedSeason}
                onChange={handleChange}
                className="bg-gray-800 px-4 py-2 rounded-lg border-2 border-gray-300  text-white 
                   text-sm font-medium shadow-sm hover:border-blue-400 focus:outline-none 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                   transition-all duration-200 cursor-pointer
                   min-w-[150px] max-w-[200px]">

               
                {isArray ? (
                    season.map((item, index) => (
                        <option  key={index} value={item}>
                            {item}
                        </option>
                    ))
                ) : (
                    <option value={season}>{season}</option>
                )}

            </select>

        </div>
    );
}


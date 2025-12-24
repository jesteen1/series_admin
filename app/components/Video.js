"use client";
import React, { useState, useEffect } from 'react';

const Video = ({ MovieLink, episodename }) => {
    const [playerMode, setPlayerMode] = useState('video'); // 'video', 'iframe', 'failed'

    // Reset player mode whenever the movie link changes
    useEffect(() => {
        setPlayerMode('video');
    }, [MovieLink]);

    if (!MovieLink) return null;
   

    const handleVideoError = () => {
        console.log("Video tag failed, switching to iframe...");
        setPlayerMode('iframe');
    };

    const handleIframeError = () => {
        console.log("Iframe failed as well, showing failure message...");
        setPlayerMode('failed');
    };

    return (
        
        <div className="w-full max-w-6xl mx-auto p-4 lg:p-10">

            <div className="relative group overflow-hidden rounded-[2rem] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/5 transition-all duration-700">

                {/* Subtle Animated Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0%,transparent_70%)] animate-pulse"></div>

                <div className="relative">
                    {/* Video Player Section */}
                    <div className="aspect-video w-full bg-[#030303] flex items-center justify-center overflow-hidden">
                        {!MovieLink ? (
                            <div className="flex flex-col items-center gap-6 text-zinc-800">
                                <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.01] backdrop-blur-sm">
                                    <svg className="w-12 h-12 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-center">
                                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">Playback Engine Ready</p>
                                    <p className="text-xs font-medium text-zinc-700 mt-2">Waiting for episode selection...</p>
                                </div>
                            </div>
                        ) : playerMode === 'video' ? (
                            <video
                                key={`video-${MovieLink}`}
                                className="w-full h-full object-contain shadow-2xl"
                                src={MovieLink}
                                controls
                                autoPlay
                                onError={handleVideoError}
                                controlsList="nodownload"
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : playerMode === 'iframe' ? (
                            <div className="w-full h-full relative group/iframe">
                                <iframe
                                    key={`iframe-${MovieLink}`}
                                    src={MovieLink}
                                    className="w-full h-full border-0 shadow-2xl"
                                    allowFullScreen
                                    onError={handleIframeError}
                                    title={episodename}
                                    allow="autoplay; encrypted-media"
                                />
                                {/* External Error Trigger for Iframe since browser security might block automated error detection */}
                                <button
                                    onClick={handleIframeError}
                                    className="absolute bottom-4 right-4 px-4 py-2 bg-black/50 hover:bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/10 opacity-0 group-hover/iframe:opacity-100 transition-all duration-300 backdrop-blur-md"
                                >
                                    Report Playback Error
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-6 text-center px-10">
                                <div className="w-20 h-20 rounded-2xl bg-red-600/10 border border-red-600/30 flex items-center justify-center animate-bounce">
                                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Server Error</h3>
                                    <p className="text-zinc-400 text-sm mt-2 max-w-sm">
                                        The requested media could not be loaded via standard or secondary protocols. The source link might be broken or restricted.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setPlayerMode('video')}
                                    className="px-6 py-2 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all active:scale-95"
                                >
                                    Retry Primary Node
                                </button>
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Video;

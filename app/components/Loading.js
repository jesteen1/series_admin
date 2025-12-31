import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
            <div className="relative flex flex-col items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-red-600/20 blur-xl rounded-full animate-pulse"></div>

                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-zinc-800 border-t-red-600 rounded-full animate-spin shadow-2xl shadow-red-900/50"></div>

                {/* Text */}
                <div className="mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 animate-pulse tracking-[0.2em] text-sm">
                    LOADING
                </div>
            </div>
        </div>
    )
}

export default Loading

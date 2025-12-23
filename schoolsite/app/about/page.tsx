export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden selection:bg-red-500/30">
            {/* Cinematic Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-red-600/15 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-700/10 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-20 invert pointer-events-none" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-[0.4em] animate-fade-in">
                        Inside the Multiverse
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6">
                        <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500">About</span><br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-red-500 to-blue-700 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">SERIESFLIX</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
                        Where cinema meets legend. We are more than a streaming service; we are a web of stories connecting the heroes of today with the blockbusters of tomorrow.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Mission Card */}
                    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl hover:bg-white/10 transition-all duration-500">
                        <div className="absolute -inset-0.5 bg-linear-to-r from-red-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
                        <div className="relative">
                            <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6 border border-red-500/30">
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 italic">Our Mission</h3>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                To unleash the ultimate entertainment experience by curating a multiverse of high-fidelity series and movies. We believe every viewer deserves to feel like a hero in their own story.
                            </p>
                        </div>
                    </div>

                    {/* Innovation Card */}
                    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl hover:bg-white/10 transition-all duration-500">
                        <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-red-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
                        <div className="relative">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 italic">The Technology</h3>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                Powered by next-gen glassmorphism and lightning-fast streams. Our platform is engineered for visual excellence, ensuring every frame is a masterpiece delivered straight to your screen.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Closing Theme Text */}
                <div className="mt-32 text-center">
                    <div className="inline-flex items-center gap-4 text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs">
                        <div className="h-px w-12 bg-zinc-800" />
                        Web-Swung to Perfection
                        <div className="h-px w-12 bg-zinc-800" />
                    </div>
                </div>
            </main>

            {/* Decorative Grain */}
            <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        </div>
    );
}

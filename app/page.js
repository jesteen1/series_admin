"use client";

import Image from "next/image";
import Card from "./components/Card";
import { useState } from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden selection:bg-red-500/30">
      {/* Background Cinematic Elements - Spiderman Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
        {/* Spider Web Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-30 invert" />
      </div>

      {/* Navigation - SERIESFLIX Branding */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-red-600 rounded-xl rotate-0 flex items-center justify-center font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:rotate-12 transition-transform duration-500">S</div>
          <span className="text-2xl font-black tracking-tighter uppercase italic group-hover:text-red-500 transition-colors">SERIESFLIX</span>
        </div>

        <button className="px-6 py-2 bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all active:scale-95 shadow-[0_0_25px_rgba(185,28,28,0.3)]">
          Login
        </button>
      </nav>

      {/* Hero Section - Spiderman Aesthetic */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center group">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-red-500/40 bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-lg animate-pulse">
            Heroic Entertainment
          </div>

          <h1 className="relative text-8xl md:text-[11rem] font-black italic tracking-tighter uppercase leading-none mb-4">
            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-b from-white via-white to-zinc-500">SERIES</span><br />
            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-red-600 via-red-500 to-blue-700 drop-shadow-[0_0_40px_rgba(220,38,38,0.4)]">FLIX</span>

            {/* Decorative Spider Icon Text */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[1.2em] text-white/5 font-black select-none pointer-events-none blur-sm uppercase tracking-[0.5em]">Marvelious</span>
          </h1>

          <p className="max-w-xl mx-auto text-zinc-400 text-lg md:text-xl font-medium tracking-wide mb-12 leading-relaxed">
            Unleash the hero within. Experience the web of limitless movies and series curated for the ultimate fan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="/academics" className="group/btn relative px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-full overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] active:scale-95">
              <span className="relative z-10">Web-Swing Into Series</span>
              <div className="absolute inset-0 bg-blue-700 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 origin-left" />
            </a>

            <a href="https://movies-client-three.vercel.app" target="black" className="px-12 py-5 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all active:scale-95 hover:border-red-500/30">
              Join The movies website
            </a>
          </div>
        </div>


        <div className="absolute bottom-20 right-10 md:right-24 hidden md:flex items-center gap-5 group">
          <span className="text-xs font-bold text-zinc-500 group-hover:text-red-500 transition-colors uppercase tracking-[0.2em]">Scroll to Discover</span>
          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-red-600 transition-all duration-300">
            <div className="w-1.5 h-4 bg-red-600 animate-bounce rounded-full shadow-[0_0_10px_rgba(220,38,38,1)]" />
          </div>
        </div>
      </main>

      {/* Footer Grain/Noise effect */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />
    </div>
  );
}

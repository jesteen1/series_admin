"use client";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simple simulation of form submission
        setTimeout(() => {
            alert("Thank you! Your message has been sent.");
            setIsSubmitting(false);
            setName("");
            setEmail("");
            setMessage("");
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]"></div>
            </div>

            <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="text-center mb-20 space-y-4">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Touch</span>
                    </h1>
                    <div className="h-1.5 w-32 bg-red-600 mx-auto rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
                    <p className="text-zinc-500 font-medium tracking-widest uppercase text-sm max-w-md mx-auto pt-4">
                        Have a question or proposal? Drop us a message and we'll get back to you shortly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {[
                            {
                                title: "Email Support",
                                value: "applejjbro@gmail.com",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                ),
                                color: "bg-red-500",
                            },
                            {
                                title: "Telegram Channel",
                                value: "@cofounder",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                ),
                                color: "bg-blue-500",
                            },
                            {
                                title: "Global Office",
                                value: "Digital Nomad ",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                ),
                                color: "bg-zinc-500",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500 group backdrop-blur-xl">
                                <div className={`w-12 h-12 ${item.color}/20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">{item.title}</h3>
                                <p className="text-xl font-bold tracking-tight">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="p-10 md:p-14 bg-zinc-900/50 border border-white/5 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden group">
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3 group/input">
                                        <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 ml-1 group-focus-within/input:text-red-500 transition-colors">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full bg-black/50 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/30 transition-all placeholder:text-zinc-800"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-3 group/input">
                                        <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 ml-1 group-focus-within/input:text-red-500 transition-colors">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full bg-black/50 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/30 transition-all placeholder:text-zinc-800"
                                            placeholder="hello@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3 group/input">
                                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 ml-1 group-focus-within/input:text-red-500 transition-colors">
                                        Your Message
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        rows={6}
                                        className="w-full bg-black/50 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/30 transition-all placeholder:text-zinc-800 resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-zinc-200 transition-all transform active:scale-[0.98] shadow-[0_20px_40px_rgba(255,255,255,0.05)] disabled:opacity-50 disabled:cursor-not-allowed group/btn overflow-hidden relative"
                                >
                                    <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 opacity-0 group-hover/btn:opacity-10 transition-opacity"></div>
                                </button>
                            </form>

                            {/* Decorative form circles */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/5 rounded-full blur-[60px]"></div>
                            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-600/5 rounded-full blur-[60px]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Text */}
            <footer className="py-12 text-center text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">
                &copy; 2025 SeriesFLIX Media Admin &bull; Built For High Performance
            </footer>
        </main>
    );
}

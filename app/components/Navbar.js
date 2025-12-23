"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "TV Shows", href: "/academics" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/95 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        {/* Logo Area */}
                        <Link href="/" className="shrink-0 flex items-center gap-2 group">
                            <span className="text-3xl font-extrabold tracking-tighter text-red-600 transition-colors group-hover:text-red-500">
                                SERIESFLIX
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive
                                            ? "text-white font-bold"
                                            : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                                
                            })}
                   
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-800 hover:text-white focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-white/5" id="mobile-menu">
                    <div className="space-y-1 px-4 pb-3 pt-2 sm:px-3">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`block rounded-md px-3 py-2 text-base font-medium ${isActive
                                        ? "bg-zinc-800 text-white"
                                        : "text-gray-400 hover:bg-zinc-800 hover:text-white"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                    </div>
                </div>
            )}
        </nav>
    );
}

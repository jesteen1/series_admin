"use client"
import Image from "next/image";
import Link from "next/link";



const Card = ({ title, description, imageUrl, linkText = "Learn More", linkHref }) => {
    return (
        <div className="group flex flex-col overflow-hidden  w-72 rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            {imageUrl ? (
                <div className="relative h-48 w-72  overflow-hidden shadow-orange-500">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105 w-5xl"
                        sizes=" (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            
               
            ) : (
                <div className="h-48 w-full bg-linear-to-r from-blue-500 to-indigo-500 opacity-20"></div>
            )}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {title}
                </h3>
                <p className="mb-4 flex-1 text-zinc-600 dark:text-zinc-400">
                    {description}
                </p>
                <div className="mt-auto">
                    {linkHref && (
                        <Link
                            href={linkHref}
                            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            {linkText}
                            <svg
                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;

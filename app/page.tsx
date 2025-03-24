"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { useAudio } from "./context/AudioContext";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <button
        onClick={togglePlay}
        className="fixed top-4 right-4 px-4 py-2 text-sm text-zinc-500 hover:text-zinc-300 bg-zinc-900/50 rounded-full"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Purple
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl md:text-2xl font-bold text-zinc-200 mb-4">
        Welcome to my portfolio
        </h2>
        <p className="text-sm text-zinc-500">
          Hello, my name is Fadi, I'm a future student at{" "}
          <Link
            target="_blank"
            href="https://42.fr"
            className="underline duration-500 hover:text-zinc-300"
          >
            School 42
          </Link>
          , currently learning C++.
        </p>
      </div>
    </div>
  );
}

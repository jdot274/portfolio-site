'use client';

import { Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-white/[0.08] bg-[#0d0d0d] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">Joey Walter</h1>
          <p className="text-sm text-white/50">App Portfolio</p>
        </div>
        <a
          href="https://github.com/jdot274"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-white/80"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </header>
  );
}


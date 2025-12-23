'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function FilterBar() {
  const [search, setSearch] = useState('');
  
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="relative flex-1 max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-[#212121] border border-white/[0.08] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/20"
        />
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm">All</button>
        <button className="px-4 py-2 rounded-lg bg-transparent text-white/50 hover:bg-white/5 text-sm">TypeScript</button>
        <button className="px-4 py-2 rounded-lg bg-transparent text-white/50 hover:bg-white/5 text-sm">Swift</button>
        <button className="px-4 py-2 rounded-lg bg-transparent text-white/50 hover:bg-white/5 text-sm">Python</button>
      </div>
    </div>
  );
}


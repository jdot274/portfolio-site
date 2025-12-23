import { Suspense } from 'react';
import AppGrid from '@/components/AppGrid';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';

export const revalidate = 3600; // Revalidate every hour

async function getGitHubRepos() {
  const res = await fetch('https://api.github.com/users/jdot274/repos?per_page=100&sort=updated', {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch repos');
  }
  
  return res.json();
}

export default async function Home() {
  const repos = await getGitHubRepos();
  
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <FilterBar />
        <Suspense fallback={<div className="text-white/50">Loading apps...</div>}>
          <AppGrid repos={repos} />
        </Suspense>
      </div>
    </main>
  );
}

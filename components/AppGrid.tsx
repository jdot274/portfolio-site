'use client';

import AppCard from './AppCard';
import appsConfig from '@/data/apps.json';

interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

interface AppConfig {
  displayName?: string;
  description?: string;
  screenshot?: string;
  featured?: boolean;
  liveDemo?: string;
  downloadUrl?: string;
  hidden?: boolean;
}

interface AppsConfig {
  [key: string]: AppConfig;
}

export default function AppGrid({ repos }: { repos: Repo[] }) {
  const config = appsConfig as AppsConfig;
  
  // Filter out hidden repos and sort by featured first, then by update date
  const sortedRepos = repos
    .filter(repo => !config[repo.name]?.hidden)
    .sort((a, b) => {
      const aFeatured = config[a.name]?.featured ? 1 : 0;
      const bFeatured = config[b.name]?.featured ? 1 : 0;
      if (bFeatured !== aFeatured) return bFeatured - aFeatured;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedRepos.map((repo) => (
        <AppCard 
          key={repo.id} 
          repo={repo} 
          config={config[repo.name]}
        />
      ))}
    </div>
  );
}


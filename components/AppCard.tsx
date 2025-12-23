'use client';

import { ExternalLink, Github, Download, Star, GitFork } from 'lucide-react';
import Image from 'next/image';

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
}

function getLanguageClass(language: string | null): string {
  if (!language) return 'lang-default';
  const lang = language.toLowerCase();
  if (lang === 'typescript') return 'lang-typescript';
  if (lang === 'javascript') return 'lang-javascript';
  if (lang === 'python') return 'lang-python';
  if (lang === 'swift') return 'lang-swift';
  if (lang === 'rust') return 'lang-rust';
  if (lang === 'html') return 'lang-html';
  if (lang === 'css') return 'lang-css';
  if (lang === 'dart') return 'lang-dart';
  return 'lang-default';
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function AppCard({ repo, config }: { repo: Repo; config?: AppConfig }) {
  const displayName = config?.displayName || repo.name;
  const description = config?.description || repo.description || 'No description';
  const screenshot = config?.screenshot;
  const liveDemo = config?.liveDemo || repo.homepage;
  const downloadUrl = config?.downloadUrl;
  const featured = config?.featured;

  return (
    <div className={`app-card bg-[#171717] border border-white/[0.08] rounded-xl overflow-hidden ${featured ? 'ring-1 ring-[#10a37f]/50' : ''}`}>
      {/* Screenshot */}
      {screenshot ? (
        <div className="aspect-video bg-[#212121] relative">
          <Image
            src={`/screenshots/${screenshot}`}
            alt={displayName}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-[#212121] to-[#171717] flex items-center justify-center">
          <span className="text-4xl opacity-20">{displayName.charAt(0).toUpperCase()}</span>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-white flex items-center gap-2">
              {displayName}
              {featured && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#10a37f]/20 text-[#10a37f]">
                  Featured
                </span>
              )}
            </h3>
            {repo.language && (
              <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full ${getLanguageClass(repo.language)}`}>
                {repo.language}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-white/40 text-xs">
            {repo.stargazers_count > 0 && (
              <span className="flex items-center gap-1">
                <Star size={12} />
                {repo.stargazers_count}
              </span>
            )}
            {repo.forks_count > 0 && (
              <span className="flex items-center gap-1">
                <GitFork size={12} />
                {repo.forks_count}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-white/60 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="text-xs text-white/30 mb-4">
          Updated {formatDate(repo.updated_at)}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/70 text-xs transition-colors"
          >
            <Github size={14} />
            Code
          </a>
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#10a37f] hover:bg-[#0d8a6a] text-white text-xs transition-colors"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
          {downloadUrl && (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/70 text-xs transition-colors"
            >
              <Download size={14} />
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


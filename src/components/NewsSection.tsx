import React from 'react';
import { newsItems } from '../data/consortiumData';
import { Calendar, ChevronRight, FileText, ExternalLink } from 'lucide-react';

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-200 pb-6">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              05 — News & Project Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Announcements & Milestone Updates
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal">
            Consortium progress meetings, provisional resolution notices, and upcoming project milestones.
          </p>
        </div>

        {/* News Grid */}
        <div className={`grid grid-cols-1 ${newsItems.length === 1 ? 'max-w-2xl' : newsItems.length === 2 ? 'md:grid-cols-2 max-w-5xl' : 'md:grid-cols-3'} gap-6`}>
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all shadow-sm"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{item.date}</span>
                  </div>
                  <span
                    className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md uppercase border"
                    style={{
                      backgroundColor: `${item.badgeColor || '#4F46E5'}12`,
                      color: item.badgeColor || '#4F46E5',
                      borderColor: `${item.badgeColor || '#4F46E5'}25`
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.summary}
                </p>

                {item.linkUrl && (
                  <div className="pt-2">
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{item.linkText || 'Official Resolution PDF'}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-indigo-600">
                <span>WIDE Consortium · PID-2025</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

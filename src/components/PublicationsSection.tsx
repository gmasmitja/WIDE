import React, { useState } from 'react';
import { publications } from '../data/consortiumData';
import { Publication } from '../types';
import { Copy, Check, ExternalLink, BookOpen, Presentation, Sparkles, Info } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'journal' | 'conference'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const journalCount = publications.filter(p => p.type === 'journal').length;
  const conferenceCount = publications.filter(p => p.type === 'conference').length;

  const filteredPubs = activeFilter === 'all'
    ? publications
    : publications.filter(p => p.type === activeFilter);

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.venue}. DOI: ${pub.doi || 'N/A'}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="publications" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-200 pb-6">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              04 — Scientific Dissemination & Publications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Articles & Conference Proceedings
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal">
            Scientific output, peer-reviewed publications, and conference presentations produced jointly by the WIDE research consortium.
          </p>
        </div>

        {/* Project Inception Notice Banner */}
        <div className="mb-8 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
            <Info className="w-5 h-5" />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900 block sm:inline mr-1">Project Phase Notice:</span>
            The WIDE coordinated project is currently in its initial startup phase (2026–2029). Peer-reviewed journal articles, conference papers, and open datasets will be indexed here in Open Access as they become available.
          </div>
        </div>

        {/* Category Filters: Articles vs Conferences */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Scientific Output ({publications.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('journal')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
              activeFilter === 'journal'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Journal Articles ({journalCount})</span>
          </button>

          <button
            onClick={() => setActiveFilter('conference')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
              activeFilter === 'conference'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Conferences & Proceedings ({conferenceCount})</span>
          </button>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPubs.map((pub) => {
            const isJournal = pub.type === 'journal';
            return (
              <div
                key={pub.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-slate-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-start justify-between gap-6 shadow-xs"
              >
                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-extrabold text-slate-900 font-mono">
                      {pub.year}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md border inline-flex items-center gap-1.5 ${
                        isJournal
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}
                    >
                      {isJournal ? <BookOpen className="w-3 h-3" /> : <Presentation className="w-3 h-3" />}
                      <span>{isJournal ? 'Journal Article' : 'Conference Contribution'}</span>
                    </span>
                    <span className="text-[10px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      WIDE Consortium
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug tracking-tight">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-mono">
                    {pub.authors}
                  </p>

                  <p className="text-xs text-indigo-800 font-medium italic">
                    {pub.venue}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col items-center md:items-end gap-2.5 shrink-0 border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                  <button
                    onClick={() => handleCopyCitation(pub)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 px-3.5 py-2 rounded-xl transition-all shadow-2xs"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Citation copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Citation</span>
                      </>
                    )}
                  </button>

                  {pub.doi && (
                    <div className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                      <span>DOI: {pub.doi}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

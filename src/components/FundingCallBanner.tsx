import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ShieldCheck, FileText } from 'lucide-react';
import { GrantInfo } from '../types';
import { LogoOfficialFundingBanner, LogoPID2025 } from './InstitutionalLogos';

interface FundingCallBannerProps {
  grantInfo: GrantInfo;
}

export const FundingCallBanner: React.FC<FundingCallBannerProps> = ({ grantInfo }) => {
  const [copiedClause, setCopiedClause] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  const handleCopyClause = () => {
    navigator.clipboard.writeText(grantInfo.officialFundingClause);
    setCopiedClause(true);
    setTimeout(() => setCopiedClause(false), 2500);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(grantInfo.reference);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  return (
    <section className="bg-slate-50 border-b border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
          
          {/* Top heading */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full w-fit mb-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Official Grant Funding & Research Call</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Call for Knowledge Generation Projects 2025 (PID-2025)
              </h2>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href={grantInfo.callUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-sm"
              >
                <span>View Call on AEI Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Institutional & Funding Logos Grid */}
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
              <LogoOfficialFundingBanner className="h-10 sm:h-12" />
              <div className="border-l border-slate-200 pl-6 hidden sm:block">
                <LogoPID2025 href={grantInfo.callUrl} />
              </div>
              <div className="sm:hidden w-full flex justify-center pt-2 border-t border-slate-200">
                <LogoPID2025 href={grantInfo.callUrl} />
              </div>
            </div>
          </div>

          {/* Grant metadata pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Funding Agency</span>
              <span className="text-xs font-bold text-slate-900 mt-1 block">
                State Research Agency (AEI)
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Competent Ministry</span>
              <span className="text-xs font-bold text-slate-900 mt-1 block truncate">
                MICIU · Govt. of Spain
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">State Framework</span>
              <span className="text-xs font-bold text-slate-900 mt-1 block truncate">
                PEICTI 2024-2027 / EU (ESF+)
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Grant Reference</span>
                <span className="text-xs font-mono font-bold text-indigo-600 mt-1 block">
                  {grantInfo.reference}
                </span>
              </div>
              <button
                onClick={handleCopyRef}
                className="p-1.5 hover:bg-indigo-50 rounded text-slate-500 hover:text-indigo-600 transition-colors"
                title="Copy reference code"
              >
                {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Official Acknowledgment Citation Clause */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>Official Funding Acknowledgment Clause for Publications & Conferences (MICIU/AEI)</span>
              </div>
              <button
                onClick={handleCopyClause}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-white hover:bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors shadow-2xs"
              >
                {copiedClause ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy clause</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs font-mono text-slate-700 bg-white p-3.5 rounded-lg border border-slate-200 leading-relaxed shadow-2xs">
              "{grantInfo.officialFundingClause}"
            </p>
            <p className="text-[11px] text-slate-500 mt-2.5 italic">
              * Mandatory compliance: All scientific journal articles, conference proceedings, posters, presentations, and dissemination activities stemming from the WIDE consortium must incorporate this statement and reference the PID-2025 grant.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

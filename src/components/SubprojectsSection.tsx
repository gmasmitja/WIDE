import React from 'react';
import { subprojects } from '../data/consortiumData';
import { LogoUPC, LogoIREC, LogoUB, LogoUPM } from './InstitutionalLogos';
import { Layers, UserCheck, ChevronRight, Bookmark } from 'lucide-react';
import { PageTab } from '../types';

interface SubprojectsSectionProps {
  onSelectTab?: (tab: PageTab) => void;
}

export const SubprojectsSection: React.FC<SubprojectsSectionProps> = ({ onSelectTab }) => {
  const getInstitutionLogo = (inst: string) => {
    switch (inst) {
      case 'UPC': return <LogoUPC className="h-8" compact={true} />;
      case 'IREC': return <LogoIREC className="h-8" compact={true} />;
      case 'UB': return <LogoUB className="h-8" compact={true} />;
      case 'CL-UPM': return <LogoUPM className="h-8" compact={true} />;
      default: return null;
    }
  };

  return (
    <section id="subprojects" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-6">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              02 — Consortium Structure
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Research Subprojects
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-lg leading-relaxed font-normal">
            Each research subproject is led by one participating institution, covering a strategic stage of the wide-bandgap value chain: epitaxial synthesis, microfabrication, spectroscopic diagnostics, and ultrafast laser processing.
          </p>
        </div>

        {/* Subprojects Detailed Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {subprojects.map((sp) => (
            <div
              key={sp.id}
              id={`subproject-${sp.id}`}
              className="rounded-xl border border-slate-200 transition-all duration-200 overflow-hidden flex flex-col justify-between bg-white shadow-2xs hover:shadow-sm"
              style={{
                borderLeftWidth: '5px',
                borderLeftColor: sp.color
              }}
            >
              <div className="p-6 sm:p-8 space-y-5">
                {/* Top bar with Tag + Reference + Funding + Institution Logo */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="font-mono text-xs font-bold px-3 py-1 rounded-md text-white"
                      style={{ backgroundColor: sp.color }}
                    >
                      {sp.code}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {sp.referenceCode}
                    </span>
                    {sp.id === 'sp1' && (
                      <span className="text-[11px] font-mono font-bold text-indigo-700 bg-indigo-100 border border-indigo-200 px-2.5 py-1 rounded-md">
                        COORDINATOR
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {sp.fundingAmount}
                    </span>
                    <div className="shrink-0 flex items-center">
                      {getInstitutionLogo(sp.institution)}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug tracking-tight">
                    {sp.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-1 font-mono">
                    {sp.institutionFull}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {sp.summary}
                </p>

                {/* Objectives list */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5" style={{ color: sp.color }} />
                    <span>Specific Objectives:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {sp.objectives.map((obj, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: sp.color }} />
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Work packages */}
                <div className="pt-2">
                  <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" style={{ color: sp.color }} />
                    <span>Work Packages (WPs):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sp.workPackages.map((wp) => (
                      <div key={wp.code} className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-xs flex items-center justify-between">
                        <div>
                          <span className="font-mono font-bold text-slate-900">{wp.code}: </span>
                          <span className="text-slate-600">{wp.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 font-bold uppercase mr-1">Key Materials:</span>
                  {sp.keyMaterials.map((mat) => (
                    <span key={mat} className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom PI Strip with Dual IPs */}
              <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5" style={{ color: sp.color }} />
                    <span className="font-mono text-[10px] text-slate-400 font-bold">PI1:</span>
                    <strong className="text-slate-900 font-semibold">{sp.pi1}</strong>
                  </div>
                  <span className="text-slate-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] text-slate-400 font-bold">PI2:</span>
                    <strong className="text-slate-800 font-semibold">{sp.pi2}</strong>
                  </div>
                </div>

                <button
                  onClick={() => onSelectTab ? onSelectTab('consortium') : undefined}
                  className="font-mono text-xs font-bold hover:underline flex items-center gap-1 ml-auto cursor-pointer"
                  style={{ color: sp.color }}
                >
                  <span>View team</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

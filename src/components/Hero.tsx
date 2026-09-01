import React from 'react';
import { ExternalLink, Award, ArrowRight, Building2, UserCheck, Euro, Calendar, ShieldCheck, CheckCircle, FileText, Landmark, ChevronRight } from 'lucide-react';
import { GrantInfo, PageTab } from '../types';
import { subprojects } from '../data/consortiumData';
import { LogoUPC, LogoIREC, LogoUB, LogoUPM, LogoOfficialFundingBanner } from './InstitutionalLogos';

interface HeroProps {
  grantInfo: GrantInfo;
  onOpenEditModal: () => void;
  onSelectTab?: (tab: PageTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ grantInfo, onOpenEditModal, onSelectTab }) => {
  const getInstitutionLogo = (inst: string) => {
    switch (inst) {
      case 'UPC': return <LogoUPC className="h-7" compact={true} />;
      case 'IREC': return <LogoIREC className="h-7" compact={true} />;
      case 'UB': return <LogoUB className="h-7" compact={true} />;
      case 'CL-UPM': return <LogoUPM className="h-7" compact={true} />;
      default: return null;
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 border-b border-slate-200 bg-slate-50">
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Call & Ministry Badge */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <a
            href={grantInfo.callUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 hover:border-indigo-500 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-600 hover:text-slate-900 transition-all shadow-2xs"
          >
            <span className="font-bold text-indigo-600">{grantInfo.callCode}</span>
            <span>·</span>
            <span>{grantInfo.callName}</span>
            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-indigo-600 ml-0.5" />
          </a>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-200/70 text-slate-700 border border-slate-300/60">
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            <span>MICIU / AEI / EU (ESF+)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-emerald-50 text-emerald-800 border border-emerald-200">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Coordinated Research Project (4 Subprojects)</span>
          </div>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Project Identity & Key Description (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold tracking-wider uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block">
                Coordinated Research Project · Call PID-2025
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                {grantInfo.fullTitle}
              </h1>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              An interuniversity research consortium coordinated by the <strong className="text-slate-900 font-semibold">Universitat Politècnica de Catalunya (UPC)</strong>, in partnership with the <strong className="text-sky-700 font-semibold">Catalonia Institute for Energy Research (IREC)</strong>, the <strong className="text-amber-700 font-semibold">Universitat de Barcelona (UB)</strong>, and the <strong className="text-purple-700 font-semibold">Laser Centre of the Universidad Politécnica de Madrid (CL-UPM)</strong>.
            </p>

            {/* Key Project Highlights Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-2xs">
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  <FileText className="w-3 h-3 text-indigo-600" />
                  <span>Reference</span>
                </div>
                <div className="text-xs font-mono font-bold text-slate-900 mt-1 truncate" title={grantInfo.reference}>
                  {grantInfo.reference}
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-2xs">
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  <Calendar className="w-3 h-3 text-indigo-600" />
                  <span>Duration</span>
                </div>
                <div className="text-xs font-mono font-bold text-slate-900 mt-1">
                  {grantInfo.durationMonths} months ({grantInfo.startDate.slice(-4)}–{grantInfo.endDate.slice(-4)})
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-2xs col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  <Euro className="w-3 h-3 text-emerald-600" />
                  <span>Total Funding</span>
                </div>
                <div className="text-xs font-mono font-bold text-emerald-700 mt-1">
                  {grantInfo.totalFunding || '650,000 €'}
                </div>
              </div>
            </div>

            {/* Funding Entities & Framework Logos Banner */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Official Funding Agencies</span>
                </span>
                <span className="text-[10px] font-mono text-indigo-600 font-semibold">PID-2025</span>
              </div>
              <div className="flex items-center justify-center py-2">
                <LogoOfficialFundingBanner className="h-9 sm:h-11" />
              </div>
              <p className="text-[11px] text-slate-500 font-mono leading-tight pt-1">
                {grantInfo.officialFundingClause}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onSelectTab ? onSelectTab('subprojects') : undefined}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-bold text-xs transition-all shadow-sm cursor-pointer"
              >
                <span>View Subprojects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectTab ? onSelectTab('consortium') : undefined}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-4 py-2.5 rounded-lg font-semibold text-xs transition-colors shadow-2xs cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-slate-600" />
                <span>Research Team</span>
              </button>

              <button
                onClick={onOpenEditModal}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-indigo-600 underline underline-offset-4 px-2 py-2 cursor-pointer"
              >
                Edit Metadata
              </button>
            </div>
          </div>

          {/* Right Column: Subprojects Listing (SP code, PID reference, Coordinator tag, Funding, Logo, and Title only) */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
              
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                    <h3 className="text-base font-bold text-slate-900">
                      Consortium & Subprojects
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Coordinated Research Subprojects & Funding Breakdown (PID-2025)
                  </p>
                </div>

                <button
                  onClick={() => onSelectTab ? onSelectTab('subprojects') : undefined}
                  className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explore Details</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* Subprojects Breakdown: SP code, PID, Coordinator tag, funding, logo, and title only */}
              <div className="space-y-3">
                {subprojects.map((sp) => (
                  <div
                    key={sp.id}
                    onClick={() => onSelectTab ? onSelectTab('subprojects') : undefined}
                    className="p-4 rounded-xl border transition-all hover:shadow-xs bg-white cursor-pointer hover:border-slate-300"
                    style={{
                      borderColor: `${sp.color}35`,
                      borderLeftWidth: '4px',
                      borderLeftColor: sp.color
                    }}
                  >
                    {/* Top Row: Subproject Code, Reference, Coordinator Status, Funding, and Institutional Logo */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="font-mono text-xs font-bold px-2.5 py-0.5 rounded text-white"
                          style={{ backgroundColor: sp.color }}
                        >
                          {sp.code}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                          {sp.referenceCode}
                        </span>
                        {sp.id === 'sp1' && (
                          <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-100 border border-indigo-200 px-2 py-0.5 rounded">
                            COORDINATOR
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                          {sp.fundingAmount}
                        </span>
                        <div className="shrink-0 flex items-center">
                          {getInstitutionLogo(sp.institution)}
                        </div>
                      </div>
                    </div>

                    {/* Subproject Title Only */}
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {sp.title}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Bottom Summary Bar: Duration, Period & Consolidated Consortium */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2 text-xs font-mono">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-2">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span><strong>Project Period:</strong> {grantInfo.startDate} – {grantInfo.endDate} ({grantInfo.durationMonths} months)</span>
                  </div>
                  <div className="text-emerald-700 font-bold">
                    <span>Total Budget: <strong>{grantInfo.totalFunding || '1,006,250.00 €'}</strong></span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span><strong>Consortium:</strong> UPC · IREC · UB · CL-UPM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span><strong>Funding:</strong> MICIU / AEI / EU (ESF+)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

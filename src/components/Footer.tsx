import React from 'react';
import { LogoOfficialFundingBanner, LogoPID2025, LogoUPC, LogoIREC, LogoUB, LogoUPM } from './InstitutionalLogos';
import { GrantInfo } from '../types';
import { ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  grantInfo: GrantInfo;
}

export const Footer: React.FC<FooterProps> = ({ grantInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top summary row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-baseline gap-2.5">
              <span className="text-2xl font-extrabold text-white tracking-tight">WIDE</span>
              <span className="text-xs font-mono text-indigo-400 font-bold">· PID2025 RESEARCH CONSORTIUM</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-normal">
              <strong className="text-slate-200">Wide-bandgap materials for Integrated Development of green Energy systems</strong>. Coordinated research project funded by the Ministerio de Ciencia, Innovación y Universidades MICIU/AEI/10.13039/501100011033 and the Fondo Social Europeo Plus (FSE+) under the call Proyectos de Generación de Conocimiento 2025.
            </p>
            <div className="text-[11px] font-mono text-slate-400">
              Coordinated by <strong className="text-slate-200">Universitat Politècnica de Catalunya · BarcelonaTech (UPC)</strong>.
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2 rounded-xl transition-all shadow-xs"
            >
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
              <span>Back to top</span>
            </button>

            <div className="text-xs font-mono text-slate-400 space-y-1 text-left lg:text-right">
              <div>Reference: <strong className="text-white">{grantInfo.reference}</strong></div>
              <div>Funding Call: <strong className="text-slate-300">{grantInfo.callName} ({grantInfo.callCode})</strong></div>
            </div>
          </div>
        </div>

        {/* Institutional Logos Showcase - Structured layout */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
              
              {/* Consortium 4 Research Centers */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full xl:w-auto justify-center xl:justify-start">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 shrink-0">
                  Consortium:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                  <LogoUPC className="h-8 hover:opacity-80 transition-opacity" />
                  <LogoIREC className="h-8 hover:opacity-80 transition-opacity" />
                  <LogoUB className="h-8 hover:opacity-80 transition-opacity" />
                  <LogoUPM className="h-8 hover:opacity-80 transition-opacity" />
                </div>
              </div>

              {/* Dividing Line on XL */}
              <div className="hidden xl:block h-8 w-px bg-slate-200" />

              {/* Funding Agencies & Framework */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full xl:w-auto justify-center xl:justify-end">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 shrink-0">
                  Official Funding:
                </span>
                <div className="flex items-center justify-center">
                  <LogoOfficialFundingBanner className="h-9 sm:h-11 hover:opacity-90 transition-opacity" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Legal acknowledgment footer */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} WIDE Research Consortium. Call PID-2025.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={grantInfo.callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white underline flex items-center gap-1 font-medium transition-colors"
            >
              <span>PID-2025 Call Guidelines & Regulations</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <span>Universitat Politècnica de Catalunya</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

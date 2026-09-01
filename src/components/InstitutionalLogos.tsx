import React from 'react';

interface LogoProps {
  className?: string;
  compact?: boolean;
}

/**
 * Universitat Politècnica de Catalunya · BarcelonaTech (UPC)
 * Uses official /logo-UPC.png
 */
export const LogoUPC: React.FC<LogoProps> = ({ className = "h-8", compact = false }) => {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/logo-UPC.png"
        alt="Universitat Politècnica de Catalunya · BarcelonaTech (UPC)"
        className="h-full w-auto max-h-full object-contain select-none"
        loading="eager"
      />
    </div>
  );
};

/**
 * Institut de Recerca en Energia de Catalunya (IREC)
 * Uses official /Logo-IREC.png
 */
export const LogoIREC: React.FC<LogoProps> = ({ className = "h-8", compact = false }) => {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/Logo-IREC.png"
        alt="Institut de Recerca en Energia de Catalunya (IREC)"
        className="h-full w-auto max-h-full object-contain select-none"
        loading="eager"
      />
    </div>
  );
};

/**
 * Universitat de Barcelona (UB)
 * Uses official /Logo_UB.png
 */
export const LogoUB: React.FC<LogoProps> = ({ className = "h-8", compact = false }) => {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/Logo_UB.png"
        alt="Universitat de Barcelona (UB)"
        className="h-full w-auto max-h-full object-contain select-none"
        loading="eager"
      />
    </div>
  );
};

/**
 * Centro Láser UPM (Universidad Politécnica de Madrid)
 * Uses official /Logo-CLUPM.png
 */
export const LogoUPM: React.FC<LogoProps> = ({ className = "h-8", compact = false }) => {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/Logo-CLUPM.png"
        alt="Centro Láser UPM - Universidad Politécnica de Madrid"
        className="h-full w-auto max-h-full object-contain select-none"
        loading="eager"
      />
    </div>
  );
};

/**
 * Official Mandatory Joint Funding Tripartite Banner (MICIU - UE/FSE+ - AEI)
 * Uses official /miciu-UEfse-aei.png
 */
export const LogoOfficialFundingBanner: React.FC<LogoProps> = ({ className = "h-10 sm:h-12", compact = false }) => {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/miciu-UEfse-aei.png"
        alt="Ministerio de Ciencia, Innovación y Universidades · Unión Europea Fondo Social Europeo · Agencia Estatal de Investigación"
        className="h-full w-auto max-h-full object-contain select-none"
        loading="eager"
      />
    </div>
  );
};

/**
 * Convocatòria PID-2025 Official Link Badge (Clean, flat, seamless)
 */
export const LogoPID2025: React.FC<{ href?: string; className?: string }> = ({ 
  href = "https://www.aei.gob.es/convocatorias/buscador-convocatorias/proyectos-generacion-conocimiento-2025",
  className = "" 
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 transition-colors ${className}`}
      title="Access official PID-2025 call portal (State Research Agency - AEI)"
    >
      <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover:scale-125 transition-transform shrink-0" />
      <div className="flex flex-col text-left leading-tight">
        <span className="text-xs font-mono font-bold group-hover:underline">
          PID-2025
        </span>
        <span className="text-[10px] text-slate-500 font-mono">
          Knowledge Generation
        </span>
      </div>
    </a>
  );
};

/**
 * Combined Institutional & Funding Grid Bar
 * Seamless showcase of all consortium and funding entities
 */
export const InstitutionalBar: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section className={`bg-white border-y border-slate-200/80 py-6 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
        
        {/* Consortium 4 Research Centers */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full xl:w-auto justify-center xl:justify-start">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 shrink-0">
            Consortium:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
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
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 shrink-0">
            Official Funding:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <LogoOfficialFundingBanner className="h-9 sm:h-11 hover:opacity-90 transition-opacity" />
          </div>
        </div>

      </div>
    </section>
  );
};

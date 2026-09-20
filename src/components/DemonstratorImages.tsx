import React from 'react';
import { Sparkles } from 'lucide-react';

interface DemonstratorImageProps {
  className?: string;
  alt?: string;
}

// Helper to resolve public assets correctly on both root domain and subpaths (like GitHub Pages /WIDE/)
const getAssetUrl = (filename: string) => {
  const meta = import.meta as unknown as { env?: { BASE_URL?: string } };
  const base = meta.env?.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanFile = filename.startsWith('/') ? filename.slice(1) : filename;
  return `${cleanBase}${encodeURIComponent(cleanFile)}`;
};

/**
 * 1. Semi-Transparent Photovoltaics (STPV)
 * Uses /public/PV semitransparent.jpg
 */
export const DemonstratorPVSemitransparent: React.FC<DemonstratorImageProps> = ({
  className = "w-full h-full object-cover object-center",
  alt = "Semi-Transparent Photovoltaic (STPV)"
}) => {
  return (
    <img
      src={getAssetUrl('PV semitransparent.jpg')}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
      loading="eager"
    />
  );
};

/**
 * 2. Photoelectrochemical Water Splitting (PEC)
 * Uses /public/watersplitting.jpg
 */
export const DemonstratorWaterSplitting: React.FC<DemonstratorImageProps> = ({
  className = "w-full h-full object-cover object-center",
  alt = "Photoelectrochemical Water Splitting for Green Hydrogen"
}) => {
  return (
    <img
      src={getAssetUrl('watersplitting.jpg')}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
      loading="eager"
    />
  );
};

/**
 * 3. UV Photodetector
 * Uses /public/UV.jpg (Placed as the last one)
 */
export const DemonstratorUV: React.FC<DemonstratorImageProps> = ({
  className = "w-full h-full object-cover object-center",
  alt = "UV Photodetector Sensor"
}) => {
  return (
    <img
      src={getAssetUrl('UV.jpg')}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
      loading="eager"
    />
  );
};

/**
 * Demonstrators Gallery Box
 * Displays the three images side by side:
 * 1. Semi-Transparent PV
 * 2. Water Splitting PEC
 * 3. UV Photodetector (Last)
 */
export const DemonstratorsGallery: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-2xs space-y-3">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Target Applications</span>
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
        {/* 1. PV semitransparent */}
        <div className="group flex flex-col rounded-lg border border-slate-100 bg-slate-50/60 p-2 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all">
          <div className="aspect-[3/4] w-full rounded-md overflow-hidden bg-white border border-slate-200/80 flex items-center justify-center relative">
            <DemonstratorPVSemitransparent className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
              Semi-Transparent PV
            </p>
            <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5 leading-snug">
              Agrivoltaic & Windows
            </p>
          </div>
        </div>

        {/* 2. Water Splitting */}
        <div className="group flex flex-col rounded-lg border border-slate-100 bg-slate-50/60 p-2 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all">
          <div className="aspect-[3/4] w-full rounded-md overflow-hidden bg-white border border-slate-200/80 flex items-center justify-center relative">
            <DemonstratorWaterSplitting className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
              Water Splitting PEC
            </p>
            <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5 leading-snug">
              Green Hydrogen Fuel
            </p>
          </div>
        </div>

        {/* 3. UV Photodetector (Last one) */}
        <div className="group flex flex-col rounded-lg border border-slate-100 bg-slate-50/60 p-2 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all">
          <div className="aspect-[3/4] w-full rounded-md overflow-hidden bg-white border border-slate-200/80 flex items-center justify-center relative">
            <DemonstratorUV className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
              UV Photodetector
            </p>
            <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5 leading-snug">
              Optical Radiation Sensor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

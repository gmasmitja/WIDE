import React, { useState } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { PageTab } from '../types';

interface HeaderProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; tab: PageTab }[] = [
    { label: "Overview", tab: "overview" },
    { label: "Subprojects", tab: "subprojects" },
    { label: "Consortium", tab: "consortium" },
    { label: "Publications", tab: "publications" },
    { label: "News", tab: "news" },
    { label: "Equipment", tab: "equipment" },
    { label: "Contact", tab: "contact" }
  ];

  const handleTabClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-2xs">
      {/* Top micro status bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 font-mono flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-slate-400">Call:</span>
            <span className="font-semibold text-white">PID-2025 Knowledge Generation Projects</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">MICIU / AEI / EU (ESF+)</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.aei.gob.es/convocatorias/buscador-convocatorias/proyectos-generacion-conocimiento-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 hover:underline"
            >
              <span>AEI Electronic Portal</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand */}
        <button
          onClick={() => handleTabClick('overview')}
          className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer focus:outline-none min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-sm shrink-0 group-hover:bg-indigo-700 transition-colors">
            W
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-none group-hover:text-indigo-600 transition-colors">
              WIDE - project
            </span>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 leading-snug">
              <div className="whitespace-nowrap">Wide-bandgap materials for Integrated</div>
              <div className="whitespace-nowrap">Development of green Energy systems</div>
            </div>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4 text-sm font-semibold text-slate-600">
          {navLinks.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleTabClick(item.tab)}
                className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-xs xl:text-sm font-bold flex items-center ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 shadow-2xs border border-indigo-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-2xs cursor-pointer"
            aria-label="Main menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => handleTabClick(item.tab)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-indigo-600" />}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

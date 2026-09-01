import React, { useState } from 'react';
import { equipments, subprojects } from '../data/consortiumData';
import { Wrench, CheckCircle2, Building2, MapPin, Layers, ChevronDown, ChevronUp, ExternalLink, Sparkles } from 'lucide-react';

export const EquipmentSection: React.FC = () => {
  const [selectedSubproject, setSelectedSubproject] = useState<string>('all');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'eq-upc': true,
    'eq-irec': true,
    'eq-ub': true,
    'eq-cl-upm': true
  });

  const toggleExpand = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredEquipments = selectedSubproject === 'all'
    ? equipments
    : equipments.filter(eq => eq.subproject === selectedSubproject);

  return (
    <section id="equipment" className="py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-200 pb-6">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              06 — Experimental Infrastructure & Labs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Major Research Equipment & Facilities
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal">
            Verified equipment resources and specialized laboratories distributed across the four consortium institutions (UPC, IREC, UB, CL-UPM).
          </p>
        </div>

        {/* Filter by Partner Institution */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          <button
            onClick={() => setSelectedSubproject('all')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
              selectedSubproject === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Consortium Infrastructure (4 Institutions)</span>
          </button>

          {subprojects.map((sp) => (
            <button
              key={sp.id}
              onClick={() => setSelectedSubproject(sp.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedSubproject === sp.id
                  ? 'text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
              style={{
                backgroundColor: selectedSubproject === sp.id ? sp.color : undefined
              }}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{sp.code} · {sp.institution}</span>
            </button>
          ))}
        </div>

        {/* Structured Infrastructure Cards */}
        <div className="space-y-8">
          {filteredEquipments.map((eq) => {
            const sp = subprojects.find(s => s.id === eq.subproject);
            const isExpanded = !!expandedSections[eq.id];

            return (
              <div
                key={eq.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all"
              >
                {/* Institution Header Banner */}
                <div
                  className="p-6 sm:p-7 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  style={{ borderLeft: `6px solid ${sp?.color || '#4F46E5'}` }}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg text-white"
                        style={{ backgroundColor: sp?.color }}
                      >
                        Subproject {sp?.code}
                      </span>
                      <span className="text-sm font-bold text-slate-800">
                        {eq.institutionFull || eq.institution} ({eq.institution})
                      </span>
                      <span className="text-[11px] font-mono font-bold uppercase bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md text-slate-600">
                        {eq.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      {eq.name}
                    </h3>

                    {eq.locationInfo && (
                      <div className="flex items-start gap-1.5 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                        <span>{eq.locationInfo}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => toggleExpand(eq.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all self-start md:self-auto shrink-0"
                  >
                    <span>{isExpanded ? 'Collapse Details' : 'View Full Inventory'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Summary Intro */}
                <div className="px-6 py-4 bg-slate-50/70 border-b border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {eq.description}
                </div>

                {/* Facilities & Equipment Breakdown */}
                {isExpanded && eq.facilities && (
                  <div className="p-6 sm:p-7 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {eq.facilities.map((fac, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3 mb-3">
                              <div className="flex items-center gap-2">
                                <Layers className="w-4 h-4" style={{ color: sp?.color }} />
                                <h4 className="text-sm font-bold text-slate-900">
                                  {fac.facilityTitle}
                                </h4>
                              </div>
                            </div>

                            {fac.facilityDescription && (
                              <p className="text-xs text-slate-500 italic mb-3 font-normal">
                                {fac.facilityDescription}
                              </p>
                            )}

                            <ul className="space-y-2.5">
                              {fac.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                                  <CheckCircle2
                                    className="w-3.5 h-3.5 mt-0.5 shrink-0"
                                    style={{ color: sp?.color || '#4F46E5' }}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer summary bar */}
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono gap-2">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5" style={{ color: sp?.color }} />
                    <span className="font-bold text-slate-800">{eq.institution} Subproject Equipment</span>
                  </div>
                  <span>Operational Status: Active / Available for WIDE Consortium</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

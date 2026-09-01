import React, { useState } from 'react';
import { Target, Cpu, CheckCircle2, TrendingUp, Activity, Award } from 'lucide-react';
import { grantInfo } from '../data/consortiumData';

export const ProjectOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'motivation' | 'objectives' | 'impact'>('motivation');

  return (
    <section id="project" className="py-20 border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-6">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              01 — Scientific Vision & Objectives
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Wide-Bandgap Materials for Green Energy Systems
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-lg leading-relaxed font-normal">
            The <strong className="text-slate-900 font-bold">WIDE</strong> project advances novel wide-bandgap semiconductor materials and scalable processing routes for high-efficiency semi-transparent photovoltaics, UV photodetectors, and photoelectrochemical solar fuel cells.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 border-b border-slate-200 mb-8 pb-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('motivation')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 font-mono flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'motivation'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Scientific Motivation & State of the Art</span>
          </button>

          <button
            onClick={() => setActiveTab('objectives')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 font-mono flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'objectives'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Consortium Objectives (WP1–WP5)</span>
          </button>

          <button
            onClick={() => setActiveTab('impact')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 font-mono flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'impact'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Impact & Green Transition</span>
          </button>
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main narrative (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            {activeTab === 'motivation' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Next-Generation Optoelectronic Materials for Clean Energy Conversion
                </h3>
                <p className="text-slate-600 leading-relaxed font-normal">
                  Wide-bandgap (WBG) semiconductors offer unique optical transparency, deep carrier selectivity, and high chemical stability. These physical properties make them prime candidates for building-integrated photovoltaics (BIPV), agrivoltaic canopies, solar-blind UV sensing, and clean solar hydrogen generation.
                </p>
                <p className="text-slate-600 leading-relaxed font-normal">
                  The <strong className="text-slate-900 font-bold">WIDE</strong> consortium creates an integrated multi-institutional pipeline connecting automated combinatorial synthesis (IREC), advanced multimodal spectroscopy and modelling (UB), ultrafast laser micro-processing (CL-UPM), and final optoelectronic device integration (UPC).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-100">
                    <span className="text-[11px] font-mono text-indigo-700 font-bold block uppercase tracking-wider">Demonstrator 1</span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">Semi-Transparent PV (STPV)</h4>
                    <p className="text-xs text-slate-600 mt-1">High average visible transmittance (AVT) and colour rendering index (CRI) for BIPV and agrivoltaics.</p>
                  </div>
                  <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-100">
                    <span className="text-[11px] font-mono text-sky-700 font-bold block uppercase tracking-wider">Demonstrator 2</span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">UV Photodetectors</h4>
                    <p className="text-xs text-slate-600 mt-1">Visible-blind and solar-blind high-responsivity sensors with fast response times.</p>
                  </div>
                  <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-100">
                    <span className="text-[11px] font-mono text-amber-700 font-bold block uppercase tracking-wider">Demonstrator 3</span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">Photoelectrochemical (PEC) Cells</h4>
                    <p className="text-xs text-slate-600 mt-1">Direct solar-driven water splitting and green hydrogen production with high stability.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'objectives' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Work Packages & Specific Consortium Objectives
                </h3>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">WP1 — Development of Wide-Bandgap Materials (Lead: IREC · SP2)</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">Automated combinatorial synthesis of wide-bandgap absorbers (CZGS, CZTS, Sb₂S₃, ZnOₓSₓ₋₁) and selective contacts (V₂Oₓ, MoOₓ, a-SiCₓ:H) with high-throughput characterisation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">WP2 — Advanced Modelling and Characterisation (Lead: UB · SP3)</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">Establish a multimodal diagnostic platform integrating PL/PLE, Photothermal Deflection Spectroscopy (PDS), HR-TEM/XRD microstructural analysis, and aesthetic optical metrics (AVT, CRI, LUE).</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">WP3 — Laser-Processing of Wide-Bandgap Materials (Lead: CL-UPM · SP4)</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">Develop dry laser ablation and Laser-Induced-Forward-Transfer (LIFT) of metallic contacts, transparent grids, and catalysts for maskless device patterning.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">WP4 — Integration in Optoelectronic Devices (Lead: UPC · SP1)</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">Fabricate and benchmark demonstrator devices: semi-transparent solar cells (STPV), high-gain UV photodetectors, and efficient photoelectrochemical (PEC) water-splitting anodes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">WP5 — Dissemination, Communication & Management (Lead: UPC · SP1)</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">Consortium governance, Open Science data repository, peer-reviewed publications, technology transfer, and public outreach across scientific and industrial stakeholders.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'impact' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Alignment with European Green Deal & Energy Transition Roadmaps
                </h3>
                <p className="text-slate-600 leading-relaxed font-normal">
                  The wide-bandgap materials and manufacturing methods pioneered in WIDE directly contribute to carbon neutrality goals by enabling clean building energy harvesting, high-value agricultural dual land use (agrivoltaics), and zero-emission solar hydrogen production.
                </p>
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-4">
                  <Activity className="w-8 h-8 text-emerald-600 shrink-0" />
                  <div className="text-xs text-slate-800 leading-relaxed">
                    <strong className="text-emerald-900 font-semibold">Open Science & Technology Transfer:</strong> All scientific publications, open datasets, and demonstrator benchmarks will be shared through FAIR-compliant public repositories and collaborative workshops.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Side statistics and consortium metrics (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                Consortium Key Indicators
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="border-b border-slate-100 pb-3">
                  <div className="text-3xl font-extrabold text-slate-900">4</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Coordinated Subprojects</div>
                </div>

                <div className="border-b border-slate-100 pb-3">
                  <div className="text-3xl font-extrabold text-indigo-600">4</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Leading Institutions</div>
                </div>

                <div className="border-b border-slate-100 pb-3">
                  <div className="text-3xl font-extrabold text-sky-600 font-mono">{grantInfo.durationMonths}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Months Duration ({grantInfo.startDate} – {grantInfo.endDate})</div>
                </div>

                <div className="border-b border-slate-100 pb-3">
                  <div className="text-3xl font-extrabold text-amber-600 font-mono">5</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Work Packages (WP1–WP5)</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-2">Partner Institutions</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2.5 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-lg border border-indigo-200">UPC (Coord.)</span>
                  <span className="text-xs px-2.5 py-1 bg-sky-50 text-sky-700 font-bold rounded-lg border border-sky-200">IREC</span>
                  <span className="text-xs px-2.5 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg border border-amber-200">UB</span>
                  <span className="text-xs px-2.5 py-1 bg-purple-50 text-purple-700 font-bold rounded-lg border border-purple-200">CL-UPM</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Total Approved Budget</span>
                <span className="text-base font-bold text-emerald-700 mt-0.5 block">{grantInfo.totalFunding || '1,006,250.00 €'}</span>
              </div>
            </div>

            {/* Funding program badge */}
            <div className="bg-slate-100/90 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-slate-900">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>Knowledge Generation Framework</span>
              </div>
              <p className="leading-relaxed">
                Competitively selected project within the <strong className="text-slate-900">{grantInfo.callCode}</strong> Call for Knowledge Generation Projects, funded by the Spanish State Research Agency (AEI / MICIU / EU ESF+).
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { institutions } from '../data/consortiumData';
import { MapPin, Navigation, Mail, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { LogoUPC, LogoIREC, LogoUB, LogoUPM } from './InstitutionalLogos';

export const ContactSection: React.FC = () => {
  const [activeInstId, setActiveInstId] = useState<string>('upc');
  const [formSent, setFormSent] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', message: '' });

  const activeInstitution = institutions.find(i => i.id === activeInstId) || institutions[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email subject and body
    const subject = encodeURIComponent(
      `[WIDE Project Inquiry] from ${formData.name || 'Researcher'}${formData.institution ? ` (${formData.institution})` : ''}`
    );
    
    const body = encodeURIComponent(
      `Dear Gerard Masmitja (WIDE Coordinator),\n\n` +
      `You have received an inquiry regarding the WIDE project (PID-2025):\n\n` +
      `--- SENDER DETAILS ---\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Institution / Organization: ${formData.institution || 'Not specified'}\n\n` +
      `--- MESSAGE ---\n` +
      `${formData.message}\n\n` +
      `----------------------------------------\n` +
      `Sent via WIDE Consortium Web Portal (https://wide.upc.edu)`
    );

    const mailtoUrl = `mailto:gerard.masmitja@upc.edu?subject=${subject}&body=${body}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;
    setFormSent(true);
  };

  const getInstitutionLogo = (code: string) => {
    switch (code) {
      case 'UPC': return <LogoUPC className="py-1 px-2" />;
      case 'IREC': return <LogoIREC className="py-1 px-2" />;
      case 'UB': return <LogoUB className="py-1 px-2" />;
      case 'CL-UPM': return <LogoUPM className="py-1 px-2" />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-200 pb-6">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              07 — Locations & Consortium Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Institutional Locations & Contact
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal">
            Research facilities and departments across Barcelona, Sant Adrià de Besòs, and Madrid participating in the WIDE project.
          </p>
        </div>

        {/* Interactive Location Tabs & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Institution Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Select institutional venue:
            </span>

            {institutions.map((inst) => {
              const isSelected = activeInstId === inst.id;
              return (
                <button
                  key={inst.id}
                  onClick={() => setActiveInstId(inst.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-600/10'
                      : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg border"
                        style={{
                          backgroundColor: `${inst.accentColor}12`,
                          color: inst.accentColor,
                          borderColor: `${inst.accentColor}30`
                        }}
                      >
                        {inst.code}
                      </span>
                      <span className="text-xs font-medium text-slate-500">{inst.role}</span>
                    </div>

                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-indigo-600 p-1 transition-colors"
                      title="Visit official website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {inst.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1.5 flex items-start gap-1.5 font-sans leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{inst.address}</span>
                  </p>
                </button>
              );
            })}
          </div>

          {/* Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-indigo-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  {activeInstitution.name}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 font-medium">{activeInstitution.city}</span>
            </div>

            {/* Google Maps iFrame */}
            <div className="w-full h-80 rounded-xl border border-slate-200 overflow-hidden relative bg-slate-100">
              <iframe
                title={`Map of ${activeInstitution.name}`}
                className="w-full h-full border-0 contrast-105"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeInstitution.mapQuery)}&z=15&output=embed`}
                allowFullScreen
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1 font-mono text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>{activeInstitution.address}</span>
              </div>
              <a
                href={`https://maps.google.com/maps?q=${encodeURIComponent(activeInstitution.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline font-bold flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form / Info Grid */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm">
          
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Consortium Central Coordination
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              For scientific inquiries, doctoral and postdoctoral fellowship opportunities (FPI / FPU associated with PID-2025), or access requests to consortium experimental infrastructure:
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase font-bold">Coordinator Email:</span>
                  <a href="mailto:gerard.masmitja@upc.edu" className="font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    gerard.masmitja@upc.edu
                  </a>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <Navigation className="w-4 h-4 text-sky-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase font-bold">Coordinator Campus:</span>
                  <span className="font-bold text-slate-900">
                    Universitat Politècnica de Catalunya · Campus Diagonal Nord (Building C4)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Send an Inquiry to the Consortium
            </h3>

            {formSent ? (
              <div className="p-6 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600 text-white rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email inquiry prepared for coordinator</h4>
                    <p className="text-xs text-slate-600">
                      Destination: <strong className="text-indigo-900 font-mono">gerard.masmitja@upc.edu</strong>
                    </p>
                  </div>
                </div>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your default email client should open with your message addressed directly to Gerard Masmitja (Consortium Coordinator). If it did not open automatically, you can send it directly:
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={`mailto:gerard.masmitja@upc.edu?subject=${encodeURIComponent(`[WIDE Project Inquiry] from ${formData.name || 'Researcher'}`)}&body=${encodeURIComponent(`Dear Gerard Masmitja,\n\n${formData.message}\n\n---\nFrom: ${formData.name} (${formData.institution || ''})\nEmail: ${formData.email}`)}`}
                    className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Email Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSent(false);
                      setFormData({ name: '', email: '', institution: '', message: '' });
                    }}
                    className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Write Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <p className="text-xs text-slate-500 mb-2">
                  Messages submitted here are routed exclusively to <strong>Gerard Masmitja</strong> (Consortium General Coordinator, UPC).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold text-slate-700 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Prof. / Researcher Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-slate-700 block mb-1">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@institution.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-1">Affiliated Institution / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. University, Research Institute, or Enterprise"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-1">Subject & Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Inquiry regarding WIDE subprojects, collaborations, data access, or open positions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry to Coordinator</span>
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">
                    To: gerard.masmitja@upc.edu
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

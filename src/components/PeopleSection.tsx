import React, { useState } from 'react';
import { teamMembers, participatingMembers, subprojects } from '../data/consortiumData';
import { SubprojectId, ParticipatingMember, TeamMember } from '../types';
import { Mail, Plus, Users, Award, Globe, GraduationCap, Wrench, Sparkles, Building2, UserPlus, Briefcase } from 'lucide-react';

interface PeopleSectionProps {
  onOpenEditModal: () => void;
}

export const PeopleSection: React.FC<PeopleSectionProps> = ({ onOpenEditModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredPis = selectedFilter === 'all'
    ? teamMembers
    : teamMembers.filter(m => m.subproject === selectedFilter);

  const displayedSubprojects = selectedFilter === 'all'
    ? subprojects
    : subprojects.filter(sp => sp.id === selectedFilter);

  const getSubprojectBadge = (spId: SubprojectId) => {
    const sp = subprojects.find(s => s.id === spId);
    if (!sp) return null;
    return (
      <span
        className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md border inline-flex items-center gap-1"
        style={{
          backgroundColor: `${sp.color}10`,
          color: sp.color,
          borderColor: `${sp.color}30`
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sp.color }} />
        {sp.code} · {sp.institution}
      </span>
    );
  };

  const getCategoryIcon = (category: ParticipatingMember['category']) => {
    switch (category) {
      case 'International Experts':
        return <Globe className="w-3 h-3 text-indigo-600" />;
      case 'Senior Faculty':
        return <Award className="w-3 h-3 text-amber-600" />;
      case 'Research Personnel':
        return <Briefcase className="w-3 h-3 text-sky-600" />;
      case 'Predoctoral Researchers':
        return <GraduationCap className="w-3 h-3 text-emerald-600" />;
      case 'Technical & Cleanroom Staff':
        return <Wrench className="w-3 h-3 text-purple-600" />;
      case 'Planned Recruitments':
        return <UserPlus className="w-3 h-3 text-teal-600" />;
      default:
        return <Users className="w-3 h-3 text-slate-600" />;
    }
  };

  const getCategoryBadgeClass = (category: ParticipatingMember['category']) => {
    switch (category) {
      case 'International Experts':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200';
      case 'Senior Faculty':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Research Personnel':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'Predoctoral Researchers':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Technical & Cleanroom Staff':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'Planned Recruitments':
        return 'bg-teal-50 text-teal-800 border-teal-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="people" className="py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-200 pb-6">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              03 — Consortium Research Personnel
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Researchers & Institutional Teams
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEditModal}
              className="text-xs font-mono font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-4 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5 text-indigo-600" />
              <span>Grant & Team Info</span>
            </button>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
              selectedFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Consortium Personnel ({teamMembers.length + participatingMembers.length})</span>
          </button>

          {subprojects.map((sp) => {
            const count = teamMembers.filter(m => m.subproject === sp.id).length +
              participatingMembers.filter(p => p.subproject === sp.id).length;
            return (
              <button
                key={sp.id}
                onClick={() => setSelectedFilter(sp.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedFilter === sp.id
                    ? 'text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
                style={{
                  backgroundColor: selectedFilter === sp.id ? sp.color : undefined
                }}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{sp.code} · {sp.institution} ({count})</span>
              </button>
            );
          })}
        </div>

        {/* 1. PRINCIPAL INVESTIGATORS (PIs) SECTION */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Principal Investigators & Leadership
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Scientific direction and subproject coordination leads ({filteredPis.length} PIs)
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredPis.map((member) => {
              const sp = subprojects.find(s => s.id === member.subproject);
              return (
                <div
                  key={member.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-base text-white shrink-0 shadow-2xs"
                          style={{ backgroundColor: sp?.color || '#4F46E5' }}
                        >
                          {member.avatarInitials}
                        </div>
                        <div>
                          <h4 className="font-bold text-[15px] text-slate-900 leading-tight">
                            {member.name}
                          </h4>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">
                            {member.institution}
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-extrabold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md border border-amber-200 shrink-0">
                        PI
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <div className="text-xs font-semibold text-slate-900">
                        {member.role}
                      </div>
                      {member.specialty && (
                        <div className="text-xs text-slate-600 font-normal leading-relaxed">
                          <strong className="text-slate-700">Expertise:</strong> {member.specialty}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* PI Footer with Subproject and Contact Email */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      {getSubprojectBadge(member.subproject)}
                    </div>

                    <div className="flex items-center gap-2">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors border border-indigo-100"
                          title={`Email ${member.name}`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Contact</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. SUBPROJECT RESEARCH TEAMS & COLLABORATORS */}
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-800">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Subproject Research Personnel & Collaborators
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-medium ml-11">
              Participating faculty, international specialists, postdoctoral and predoctoral researchers, technical staff, and project recruitments.
            </p>
          </div>

          {displayedSubprojects.map((sp) => {
            const participants = participatingMembers.filter(p => p.subproject === sp.id);
            if (participants.length === 0) return null;

            return (
              <div
                key={sp.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs"
              >
                {/* Institution Sub-Header */}
                <div
                  className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/70"
                  style={{ borderLeft: `6px solid ${sp.color}` }}
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <span
                        className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-md text-white"
                        style={{ backgroundColor: sp.color }}
                      >
                        Subproject {sp.code}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-600">
                        {sp.referenceCode}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      {sp.institutionFull} ({sp.institution})
                    </h4>
                  </div>

                  <div className="text-xs font-mono font-semibold text-slate-500 self-start sm:self-auto bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                    {participants.length} Team Members &amp; Collaborators
                  </div>
                </div>

                {/* Participants Grid (No email shown) */}
                <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {participants.map((person) => (
                    <div
                      key={person.id}
                      className="bg-slate-50/60 border border-slate-200 rounded-xl p-4.5 hover:bg-slate-50 hover:border-slate-300 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        {/* Header with avatar, name & category */}
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs text-white shrink-0"
                              style={{ backgroundColor: sp.color }}
                            >
                              {person.avatarInitials || person.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <h5 className="font-bold text-sm text-slate-900 leading-snug">
                                {person.name}
                              </h5>
                              <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                {person.institution}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div>
                          <span
                            className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border inline-flex items-center gap-1 ${getCategoryBadgeClass(person.category)}`}
                          >
                            {getCategoryIcon(person.category)}
                            <span>{person.category}</span>
                          </span>
                        </div>

                        {/* Role & Affiliation */}
                        <div className="text-xs font-semibold text-slate-800 pt-0.5 leading-snug">
                          {person.role}
                        </div>

                        {person.affiliation && (
                          <div className="text-[11px] text-slate-500 font-normal leading-relaxed">
                            {person.affiliation}
                          </div>
                        )}
                      </div>

                      {/* Footer subproject indicator */}
                      <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>WIDE Project Team</span>
                        <span className="font-bold" style={{ color: sp.color }}>{sp.code} · {sp.institution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

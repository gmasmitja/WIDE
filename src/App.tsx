import React, { useState, useEffect } from 'react';
import { grantInfo } from './data/consortiumData';
import { PageTab } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectOverview } from './components/ProjectOverview';
import { SubprojectsSection } from './components/SubprojectsSection';
import { PeopleSection } from './components/PeopleSection';
import { PublicationsSection } from './components/PublicationsSection';
import { NewsSection } from './components/NewsSection';
import { EquipmentSection } from './components/EquipmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  // Helper to parse hash to PageTab
  const getTabFromHash = (): PageTab => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'subprojects') return 'subprojects';
    if (hash === 'consortium' || hash === 'people' || hash === 'team') return 'consortium';
    if (hash === 'publications') return 'publications';
    if (hash === 'news') return 'news';
    if (hash === 'equipment' || hash === 'facilities') return 'equipment';
    if (hash === 'contact') return 'contact';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState<PageTab>(getTabFromHash);

  // Synchronize with browser history / hashchange
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getTabFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setActiveTab(tab);
    window.location.hash = tab === 'overview' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-600/15 selection:text-indigo-900 font-sans">
      {/* Persistent Sticky Header with PID-2025 status and tab navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Main Dynamic View Content */}
      <main id="top" className="grow">
        {activeTab === 'overview' && (
          <div className="animate-fadeIn">
            {/* Hero with interactive bandgap simulator & project intro */}
            <Hero
              grantInfo={grantInfo}
              onSelectTab={handleSelectTab}
            />

            {/* 01: Project Overview & Objectives */}
            <ProjectOverview />
          </div>
        )}

        {activeTab === 'subprojects' && (
          <div className="animate-fadeIn">
            {/* 02: 4 Subprojects Breakdown (UPC, IREC, UB, CL-UPM) */}
            <SubprojectsSection onSelectTab={handleSelectTab} />
          </div>
        )}

        {activeTab === 'consortium' && (
          <div className="animate-fadeIn">
            {/* 03: Consortium Team & Principal Investigators */}
            <PeopleSection />
          </div>
        )}

        {activeTab === 'publications' && (
          <div className="animate-fadeIn">
            {/* 04: Scientific Publications & Dissemination */}
            <PublicationsSection />
          </div>
        )}

        {activeTab === 'news' && (
          <div className="animate-fadeIn">
            {/* 05: Milestones & News */}
            <NewsSection />
          </div>
        )}

        {activeTab === 'equipment' && (
          <div className="animate-fadeIn">
            {/* 06: Experimental Equipment & Facilities */}
            <EquipmentSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            {/* 07: How to find us & Consortium Contact */}
            <ContactSection />
          </div>
        )}
      </main>

      {/* Persistent Comprehensive Footer with institutional logos & legal clause on ALL views */}
      <Footer grantInfo={grantInfo} />
    </div>
  );
}

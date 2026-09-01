import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, Sliders } from 'lucide-react';
import { GrantInfo } from '../types';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  grantInfo: GrantInfo;
  onSaveGrantInfo: (newInfo: GrantInfo) => void;
  onResetDefaults: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  grantInfo,
  onSaveGrantInfo,
  onResetDefaults
}) => {
  const [formData, setFormData] = useState<GrantInfo>(grantInfo);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveGrantInfo(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Customize PID-2025 Grant Metadata
              </h3>
              <p className="text-xs text-slate-500 font-mono">WIDE Consortium · Project Metadata Manager</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs font-mono">
          
          <div className="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl text-slate-800 leading-relaxed font-sans text-xs">
            <span className="font-bold text-indigo-900">Note:</span> Adjust provisional parameters (such as the grant reference code, coordinator institution, or duration) to update metadata across the platform.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Project Acronym</label>
              <input
                type="text"
                value={formData.projectAcronym}
                onChange={(e) => setFormData({ ...formData, projectAcronym: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Grant Reference</label>
              <input
                type="text"
                value={formData.reference}
                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600 font-bold text-indigo-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Total Consortium Funding</label>
              <input
                type="text"
                value={formData.totalFunding || '1,006,250.00 €'}
                onChange={(e) => setFormData({ ...formData, totalFunding: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600 font-bold text-emerald-700"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Coordinating Institution</label>
              <input
                type="text"
                value={formData.coordinatorInstitution}
                onChange={(e) => setFormData({ ...formData, coordinatorInstitution: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Full Project Title (English)</label>
            <input
              type="text"
              value={formData.fullTitle}
              onChange={(e) => setFormData({ ...formData, fullTitle: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600 font-sans text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Call Code</label>
              <input
                type="text"
                value={formData.callCode}
                onChange={(e) => setFormData({ ...formData, callCode: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Duration (Months)</label>
              <input
                type="number"
                value={formData.durationMonths}
                onChange={(e) => setFormData({ ...formData, durationMonths: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Start Date</label>
              <input
                type="text"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">End Date</label>
              <input
                type="text"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Official PID-2025 Call URL</label>
            <input
              type="url"
              value={formData.callUrl}
              onChange={(e) => setFormData({ ...formData, callUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600 text-xs"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Official Funding Acknowledgment Clause (MICIU / AEI)</label>
            <textarea
              rows={3}
              value={formData.officialFundingClause}
              onChange={(e) => setFormData({ ...formData, officialFundingClause: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-600 text-xs leading-relaxed font-sans"
            />
          </div>

          {/* Footer controls */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              onClick={onResetDefaults}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-bold transition-colors shadow-sm"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

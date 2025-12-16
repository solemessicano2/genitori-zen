import React from 'react';
import { Trigger, TriggerAdviceResponse } from '../types';
import { X, HeartHandshake, Eye, ArrowRightCircle } from 'lucide-react';

interface TriggerModalProps {
  trigger: Trigger | null;
  advice: TriggerAdviceResponse | null;
  isLoading: boolean;
  onClose: () => void;
  error: string | null;
}

export const TriggerModal: React.FC<TriggerModalProps> = ({ trigger, advice, isLoading, onClose, error }) => {
  if (!trigger) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200 border-t-8 border-rose-500">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-rose-50">
          <div>
            <h3 className="text-sm font-bold text-rose-600 mb-1 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Trigger Identificato
            </h3>
            <h2 className="text-2xl font-bold text-gray-900 serif leading-tight">"{trigger.title}"</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm border border-gray-100 flex-shrink-0"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-600 rounded-full animate-spin"></div>
              <p className="text-gray-500 animate-pulse">Analisi del conflitto in corso...</p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-100">
              <p>Errore: {error}</p>
            </div>
          )}

          {!isLoading && advice && (
            <div className="space-y-6">
              
              {/* Perspective Block */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                 <div className="flex items-center gap-2 mb-2 text-slate-700 font-bold uppercase text-xs tracking-wider">
                    <Eye className="w-4 h-4" />
                    Prospettiva dell'adolescente
                 </div>
                 <p className="text-slate-800 italic font-serif text-lg leading-relaxed">
                   "{advice.perspective}"
                 </p>
              </div>

              {/* Validation Block */}
              <div className="space-y-2">
                <h4 className="flex items-center text-rose-600 font-bold text-lg">
                  <HeartHandshake className="w-5 h-5 mr-2" />
                  Validazione: Perché si arrabbia?
                </h4>
                <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100 text-gray-700 leading-relaxed">
                  {advice.validation}
                </div>
              </div>

              {/* Way Forward Block */}
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 shadow-sm">
                <h4 className="flex items-center text-emerald-700 font-bold text-lg mb-3">
                  <ArrowRightCircle className="w-5 h-5 mr-2" />
                  Il Giusto Proseguio
                </h4>
                <p className="text-emerald-900 leading-relaxed font-medium">
                  {advice.betterApproach}
                </p>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { AdviceResponse, Situation } from '../types';
import { X, CheckCircle2, XCircle, MessageCircle, BrainCircuit } from 'lucide-react';

interface AdviceModalProps {
  situation: Situation | null;
  advice: AdviceResponse | null;
  isLoading: boolean;
  onClose: () => void;
  error: string | null;
}

export const AdviceModal: React.FC<AdviceModalProps> = ({ situation, advice, isLoading, onClose, error }) => {
  if (!situation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-emerald-50/50">
          <div>
            <h3 className="text-sm font-medium text-emerald-600 mb-1 tracking-wider uppercase">{situation.category}</h3>
            <h2 className="text-2xl font-bold text-gray-800 serif leading-tight">{situation.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm border border-gray-100"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
              <p className="text-gray-500 animate-pulse">L'esperto sta analizzando la situazione...</p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-100">
              <p>Si è verificato un errore durante la generazione dei consigli. Riprova più tardi.</p>
              <p className="text-xs mt-2 opacity-75">{error}</p>
            </div>
          )}

          {!isLoading && advice && (
            <>
              {/* Analysis */}
              <section className="space-y-3">
                <div className="flex items-center space-x-2 text-indigo-600">
                  <BrainCircuit className="w-6 h-6" />
                  <h3 className="text-lg font-bold uppercase tracking-wide">Cosa succede nella sua testa</h3>
                </div>
                <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 text-gray-700 leading-relaxed">
                  {advice.analysis}
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-6">
                {/* DOs */}
                <section className="space-y-4">
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <CheckCircle2 className="w-6 h-6" />
                    <h3 className="text-lg font-bold uppercase tracking-wide">Cosa Fare</h3>
                  </div>
                  <ul className="space-y-3">
                    {advice.dos.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                         <span className="text-emerald-600 mt-1">•</span>
                         <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* DONTs */}
                <section className="space-y-4">
                  <div className="flex items-center space-x-2 text-rose-600">
                    <XCircle className="w-6 h-6" />
                    <h3 className="text-lg font-bold uppercase tracking-wide">Cosa Evitare</h3>
                  </div>
                  <ul className="space-y-3">
                    {advice.donts.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 bg-rose-50/50 p-3 rounded-lg border border-rose-100">
                         <span className="text-rose-600 mt-1">•</span>
                         <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Conversation Starters */}
              <section className="space-y-3 pt-2">
                <div className="flex items-center space-x-2 text-amber-600">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="text-lg font-bold uppercase tracking-wide">Frasi per aprire il dialogo</h3>
                </div>
                <div className="grid gap-3">
                  {advice.conversationStarters.map((item, idx) => (
                    <div key={idx} className="bg-amber-50 border border-amber-100 p-4 rounded-xl relative group">
                      <div className="absolute -left-1 top-4 w-2 h-8 bg-amber-400 rounded-r-full"></div>
                      <p className="text-gray-800 font-medium italic pl-2">"{item}"</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

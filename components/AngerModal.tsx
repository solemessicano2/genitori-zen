import React, { useState } from 'react';
import { AngerAdviceResponse } from '../types';
import { X, Flame, ShieldAlert, Zap, Thermometer, Wind, AlertTriangle } from 'lucide-react';
import { getAngerAdvice } from '../services/geminiService';

interface AngerModalProps {
  onClose: () => void;
}

export const AngerModal: React.FC<AngerModalProps> = ({ onClose }) => {
  const [level, setLevel] = useState<string | null>(null);
  const [advice, setAdvice] = useState<AngerAdviceResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLevelSelect = async (selectedLevel: string) => {
    setLevel(selectedLevel);
    setLoading(true);
    try {
      const result = await getAngerAdvice(selectedLevel);
      setAdvice(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const levels = [
    {
      id: "bassa",
      label: "Irritazione",
      desc: "Sbuffi, occhi al cielo, risposte secche.",
      color: "bg-yellow-100 border-yellow-300 text-yellow-800 hover:bg-yellow-200",
      icon: Wind
    },
    {
      id: "media",
      label: "Rabbia Accesa",
      desc: "Voce alta, porte sbattute, provocazioni.",
      color: "bg-orange-100 border-orange-300 text-orange-800 hover:bg-orange-200",
      icon: Flame
    },
    {
      id: "alta",
      label: "Fuori Controllo",
      desc: "Aggressività verbale estrema, minacce, lancio oggetti.",
      color: "bg-red-100 border-red-300 text-red-800 hover:bg-red-200",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
        
        {/* Header Red for Anger */}
        <div className="p-6 border-b border-red-100 flex justify-between items-center bg-red-50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-full">
               <Thermometer className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 serif">SOS Rabbia</h2>
              <p className="text-sm text-red-600 font-medium">Pronto intervento per genitori Zen</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm border border-gray-100"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6">
          
          {!advice && !loading && (
            <div className="text-center space-y-8 py-4">
              <h3 className="text-xl text-gray-700 font-medium">Qual è il livello di tensione in questo momento?</h3>
              
              <div className="grid gap-4">
                {levels.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => handleLevelSelect(lvl.label)}
                    className={`flex items-center p-6 rounded-xl border-2 transition-all duration-200 text-left group ${lvl.color}`}
                  >
                    <div className="bg-white/50 p-3 rounded-full mr-5 group-hover:scale-110 transition-transform">
                      <lvl.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-wide">{lvl.label}</h4>
                      <p className="opacity-90 text-sm mt-1">{lvl.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center py-20 space-y-6">
              <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
              <div className="text-center space-y-2">
                <p className="text-lg text-gray-800 font-medium animate-pulse">Respiro profondo...</p>
                <p className="text-gray-500">Stiamo calcolando la strategia di de-escalation.</p>
              </div>
            </div>
          )}

          {advice && !loading && (
            <div className="space-y-8 animate-in fade-in duration-500">
              
              {/* Parent Mantra Section */}
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-sm">
                <h4 className="flex items-center text-emerald-800 font-bold uppercase text-xs tracking-wider mb-2">
                  <Wind className="w-4 h-4 mr-2" />
                  Prima di tutto: Il tuo mantra
                </h4>
                <p className="text-2xl font-serif text-emerald-900 italic">"{advice.parentMantra}"</p>
              </div>

              {/* Immediate Action */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <h4 className="flex items-center text-blue-600 font-bold uppercase text-sm tracking-wide">
                     <ShieldAlert className="w-5 h-5 mr-2" />
                     Azione Fisica Immediata
                   </h4>
                   <div className="bg-blue-50 p-4 rounded-xl text-blue-900 border border-blue-100 h-full">
                     {advice.immediateAction}
                   </div>
                </div>

                <div className="space-y-2">
                   <h4 className="flex items-center text-red-600 font-bold uppercase text-sm tracking-wide">
                     <AlertTriangle className="w-5 h-5 mr-2" />
                     Da Evitare Assolutamente
                   </h4>
                   <div className="bg-red-50 p-4 rounded-xl text-red-900 border border-red-100 h-full">
                     {advice.triggerAvoid}
                   </div>
                </div>
              </div>

              {/* The Magic Phrase */}
              <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500 rounded-full opacity-50 blur-xl"></div>
                <h4 className="flex items-center text-indigo-200 font-bold uppercase text-sm tracking-wide mb-3 relative z-10">
                  <Zap className="w-5 h-5 mr-2" />
                  La Frase Magica da dire ora
                </h4>
                <p className="text-xl md:text-2xl font-medium relative z-10 leading-relaxed">
                  "{advice.magicPhrase}"
                </p>
              </div>

              {/* Strategy */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Strategia per i prossimi 10 minuti</h4>
                <p className="text-gray-600 leading-relaxed">{advice.deescalationStrategy}</p>
              </div>

              <div className="flex justify-center pt-4">
                <button 
                  onClick={() => setAdvice(null)} 
                  className="text-gray-500 hover:text-gray-800 text-sm font-medium hover:underline"
                >
                  Seleziona un altro livello
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

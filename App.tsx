import React, { useState, useMemo } from 'react';
import { situations } from './data';
import { triggers } from './triggers';
import { Category, Situation, AdviceResponse, Trigger, TriggerType, TriggerAdviceResponse } from './types';
import { getAdviceForSituation, getTriggerAdvice } from './services/geminiService';
import { AdviceModal } from './components/AdviceModal';
import { TriggerModal } from './components/TriggerModal';
import { AngerModal } from './components/AngerModal';
import * as LucideIcons from 'lucide-react';

// Dynamic Icon Component
const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon className={className} /> : <LucideIcons.HelpCircle className={className} />;
};

type ViewMode = 'SITUATIONS' | 'TRIGGERS';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('SITUATIONS');
  
  // Situation State
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');
  const [selectedSituation, setSelectedSituation] = useState<Situation | null>(null);
  const [situationAdvice, setSituationAdvice] = useState<AdviceResponse | null>(null);

  // Trigger State
  const [selectedTriggerType, setSelectedTriggerType] = useState<TriggerType | 'ALL'>('ALL');
  const [selectedTrigger, setSelectedTrigger] = useState<Trigger | null>(null);
  const [triggerAdvice, setTriggerAdvice] = useState<TriggerAdviceResponse | null>(null);

  // Common State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAngerModal, setShowAngerModal] = useState(false);

  // Filter Logic
  const filteredSituations = useMemo(() => {
    return situations.filter(s => {
      const matchesCategory = selectedCategory === 'ALL' || s.category === selectedCategory;
      const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const filteredTriggers = useMemo(() => {
    return triggers.filter(t => {
      const matchesType = selectedTriggerType === 'ALL' || t.type === selectedTriggerType;
      const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [selectedTriggerType, searchTerm]);

  // Handlers
  const handleSituationClick = async (situation: Situation) => {
    setSelectedSituation(situation);
    setSituationAdvice(null);
    setLoading(true);
    setError(null);

    try {
      const result = await getAdviceForSituation(situation.title);
      setSituationAdvice(result);
    } catch (err: any) {
      setError(err.message || 'Errore sconosciuto');
    } finally {
      setLoading(false);
    }
  };

  const handleTriggerClick = async (trigger: Trigger) => {
    setSelectedTrigger(trigger);
    setTriggerAdvice(null);
    setLoading(true);
    setError(null);

    try {
      const result = await getTriggerAdvice(trigger.title);
      setTriggerAdvice(result);
    } catch (err: any) {
      setError(err.message || 'Errore sconosciuto');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModals = () => {
    setSelectedSituation(null);
    setSelectedTrigger(null);
    setSituationAdvice(null);
    setTriggerAdvice(null);
  };

  return (
    <div className="min-h-screen pb-12 bg-gray-50">
      {/* Hero Header */}
      <header className={`pt-16 pb-28 px-4 sm:px-6 relative overflow-hidden transition-colors duration-500 ${viewMode === 'SITUATIONS' ? 'bg-emerald-800' : 'bg-rose-900'}`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
           </svg>
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 serif">Genitori Zen</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            {viewMode === 'SITUATIONS' 
              ? "Una guida interattiva per navigare le sfide dell'adolescenza."
              : "Esplora la mappa dei 'campi minati': capisci cosa fa scattare la rabbia e perché."}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            {/* Search Bar */}
            <div className="relative w-full md:flex-1">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LucideIcons.Search className="h-5 w-5 text-gray-400" />
               </div>
               <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-full leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:border-transparent sm:text-sm shadow-lg transition-all"
                  style={{
                    boxShadow: viewMode === 'SITUATIONS' ? '0 4px 6px -1px rgba(16, 185, 129, 0.2)' : '0 4px 6px -1px rgba(244, 63, 94, 0.2)',
                    '--tw-ring-color': viewMode === 'SITUATIONS' ? 'rgb(52 211 153)' : 'rgb(251 113 133)'
                  } as any}
                  placeholder={viewMode === 'SITUATIONS' ? "Cerca una situazione..." : "Cerca un trigger..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
            
            {/* SOS Crisis Button */}
            <button 
              onClick={() => setShowAngerModal(true)}
              className="w-full md:w-auto bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105 ring-2 ring-rose-300 ring-offset-2 ring-offset-black/20"
            >
              <LucideIcons.Flame className="w-5 h-5" />
              PRONTO SOCCORSO
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 relative z-20">
        
        {/* View Switcher Tabs */}
        <div className="bg-white p-2 rounded-2xl shadow-xl max-w-lg mx-auto mb-10 flex">
          <button
            onClick={() => { setViewMode('SITUATIONS'); setSearchTerm(''); }}
            className={`flex-1 py-3 px-6 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
              viewMode === 'SITUATIONS' 
                ? 'bg-emerald-100 text-emerald-800 shadow-sm' 
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            <LucideIcons.Compass className="w-4 h-4" />
            Situazioni
          </button>
          <button
            onClick={() => { setViewMode('TRIGGERS'); setSearchTerm(''); }}
            className={`flex-1 py-3 px-6 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
              viewMode === 'TRIGGERS' 
                ? 'bg-rose-100 text-rose-800 shadow-sm' 
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            <LucideIcons.Bomb className="w-4 h-4" />
            Mappa Trigger
          </button>
        </div>

        {/* --- VIEW MODE: SITUATIONS --- */}
        {viewMode === 'SITUATIONS' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button 
                onClick={() => setSelectedCategory('ALL')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${selectedCategory === 'ALL' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                Tutte
              </button>
              {Object.values(Category).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${selectedCategory === cat ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Situations Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredSituations.map((situation) => (
                <button
                  key={situation.id}
                  onClick={() => handleSituationClick(situation)}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-200 flex flex-col items-center text-center h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  
                  <div className={`p-4 rounded-full mb-4 transition-colors duration-300 ${
                      situation.category === Category.RISK ? 'bg-red-50 text-red-500 group-hover:bg-red-100' :
                      situation.category === Category.DIGITAL ? 'bg-blue-50 text-blue-500 group-hover:bg-blue-100' :
                      situation.category === Category.EMOTION ? 'bg-purple-50 text-purple-500 group-hover:bg-purple-100' :
                      'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100'
                    }`}>
                    <DynamicIcon name={situation.icon} className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-gray-800 font-semibold mb-2 group-hover:text-emerald-700 transition-colors leading-tight">
                    {situation.title}
                  </h3>
                  
                  <span className="text-xs text-gray-400 mt-auto uppercase tracking-wider font-medium">
                    {situation.category.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW MODE: TRIGGERS --- */}
        {viewMode === 'TRIGGERS' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Trigger Type Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button 
                onClick={() => setSelectedTriggerType('ALL')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${selectedTriggerType === 'ALL' ? 'bg-rose-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                Tutti
              </button>
              {Object.values(TriggerType).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedTriggerType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${selectedTriggerType === type ? 'bg-rose-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  {type.split(' (')[0]}
                </button>
              ))}
            </div>

            {/* Triggers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredTriggers.map((trigger) => (
                <button
                  key={trigger.id}
                  onClick={() => handleTriggerClick(trigger)}
                  className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-rose-200 hover:border-rose-500 flex items-start text-left h-full relative overflow-hidden"
                >
                  <div className="p-3 bg-rose-50 rounded-lg mr-4 group-hover:bg-rose-100 transition-colors">
                    <DynamicIcon name={trigger.icon} className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold mb-1 group-hover:text-rose-700 transition-colors">
                      {trigger.title}
                    </h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                      {trigger.type.split(' (')[0]}
                    </p>
                  </div>
                </button>
              ))}
            </div>
             {filteredTriggers.length === 0 && (
                <div className="text-center py-12">
                   <p className="text-gray-500">Nessun trigger trovato.</p>
                </div>
             )}
          </div>
        )}

      </main>
      
      {/* Footer */}
      <footer className="mt-20 text-center text-gray-400 text-sm pb-8">
        <p>Realizzato con 💚 per i genitori. Le risposte sono generate da AI (Gemini 2.5 Flash).</p>
      </footer>

      {/* Modals */}
      {selectedSituation && (
        <AdviceModal 
          situation={selectedSituation} 
          advice={situationAdvice} 
          isLoading={loading} 
          onClose={handleCloseModals}
          error={error}
        />
      )}

      {selectedTrigger && (
        <TriggerModal 
          trigger={selectedTrigger}
          advice={triggerAdvice}
          isLoading={loading}
          onClose={handleCloseModals}
          error={error}
        />
      )}

      {showAngerModal && (
        <AngerModal onClose={() => setShowAngerModal(false)} />
      )}
    </div>
  );
}

export default App;

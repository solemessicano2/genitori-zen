import { Situation, Category } from './types';

export const situations: Situation[] = [
  // SCHOOL
  { id: 1, title: "Rifiuto di andare a scuola", category: Category.SCHOOL, icon: "School" },
  { id: 2, title: "Crollo improvviso dei voti", category: Category.SCHOOL, icon: "TrendingDown" },
  { id: 3, title: "Ansia da prestazione scolastica", category: Category.SCHOOL, icon: "Brain" },
  { id: 4, title: "Sospensione o nota disciplinare", category: Category.SCHOOL, icon: "FileWarning" },
  { id: 5, title: "Non vuole fare i compiti", category: Category.SCHOOL, icon: "BookX" },
  { id: 6, title: "Vuole abbandonare lo sport", category: Category.SCHOOL, icon: "Activity" },
  { id: 7, title: "Indecisione sul futuro/università", category: Category.SCHOOL, icon: "Compass" },
  { id: 8, title: "Litigi con i professori", category: Category.SCHOOL, icon: "MessageCircleWarning" },
  
  // DIGITAL
  { id: 9, title: "Sempre al cellulare a tavola", category: Category.DIGITAL, icon: "Smartphone" },
  { id: 10, title: "Videogioca fino a notte fonda", category: Category.DIGITAL, icon: "Gamepad2" },
  { id: 11, title: "Richiesta profili social privati", category: Category.DIGITAL, icon: "Lock" },
  { id: 12, title: "Cyberbullismo (vittima o attore)", category: Category.DIGITAL, icon: "Ghost" },
  { id: 13, title: "Sexting o invio foto intime", category: Category.DIGITAL, icon: "Camera" },
  { id: 14, title: "Isolamento in camera con PC", category: Category.DIGITAL, icon: "Monitor" },
  { id: 15, title: "Spese eccessive in-app/giochi", category: Category.DIGITAL, icon: "CreditCard" },
  { id: 16, title: "Fake news e radicalizzazione online", category: Category.DIGITAL, icon: "Globe" },

  // EMOTION
  { id: 17, title: "Sbalzi d'umore estremi", category: Category.EMOTION, icon: "Frown" },
  { id: 18, title: "Prima delusione d'amore", category: Category.EMOTION, icon: "HeartCrack" },
  { id: 19, title: "Crisi di pianto apparentemente senza motivo", category: Category.EMOTION, icon: "CloudRain" },
  { id: 20, title: "Problemi con la propria immagine corporea", category: Category.EMOTION, icon: "Mirror" },
  { id: 21, title: "Coming out o dubbi sull'identità", category: Category.EMOTION, icon: "Rainbow" },
  { id: 22, title: "Bassa autostima manifesta", category: Category.EMOTION, icon: "BatteryLow" },
  { id: 23, title: "Rabbia esplosiva improvvisa", category: Category.EMOTION, icon: "Flame" },
  { id: 24, title: "Apatia e perdita di interesse", category: Category.EMOTION, icon: "Coffee" },

  // SOCIAL
  { id: 25, title: "Frequenta 'cattive compagnie'", category: Category.SOCIAL, icon: "Users" },
  { id: 26, title: "Esclusione dal gruppo dei pari", category: Category.SOCIAL, icon: "UserMinus" },
  { id: 27, title: "Vuole farsi un tatuaggio/piercing", category: Category.SOCIAL, icon: "PenTool" },
  { id: 28, title: "Chiede di dormire fuori spesso", category: Category.SOCIAL, icon: "Moon" },
  { id: 29, title: "Vergogna dei genitori in pubblico", category: Category.SOCIAL, icon: "EyeOff" },
  { id: 30, title: "Vuole vestirsi in modo provocatorio/strano", category: Category.SOCIAL, icon: "Shirt" },
  { id: 31, title: "Pressione sociale per fare cose che non vuole", category: Category.SOCIAL, icon: "Scale" },
  { id: 32, title: "Litigi furiosi con il migliore amico/a", category: Category.SOCIAL, icon: "MessageSquareX" },

  // RISK
  { id: 33, title: "Trovate sigarette/vape in tasca", category: Category.RISK, icon: "Cigarette" },
  { id: 34, title: "Torna a casa ubriaco/a", category: Category.RISK, icon: "Wine" },
  { id: 35, title: "Sospetto uso di sostanze", category: Category.RISK, icon: "Pill" },
  { id: 36, title: "Furti domestici (soldi dal portafogli)", category: Category.RISK, icon: "Wallet" },
  { id: 37, title: "Bugie reiterate su dove si trova", category: Category.RISK, icon: "MapPinOff" },
  { id: 38, title: "Guida spericolata (motorino/auto)", category: Category.RISK, icon: "Bike" },
  { id: 39, title: "Autolesionismo (tagli, graffi)", category: Category.RISK, icon: "Bandage" },
  { id: 40, title: "Saltare i pasti o mangiare di nascosto", category: Category.RISK, icon: "UtensilsCrossed" },

  // FAMILY
  { id: 41, title: "Non risponde ai saluti", category: Category.FAMILY, icon: "EarOff" },
  { id: 42, title: "Camera in disordine totale", category: Category.FAMILY, icon: "Trash2" },
  { id: 43, title: "Rifiuto delle regole di casa", category: Category.FAMILY, icon: "ShieldBan" },
  { id: 44, title: "Mancanza di rispetto verbale", category: Category.FAMILY, icon: "Megaphone" },
  { id: 45, title: "Chiede soldi continuamente", category: Category.FAMILY, icon: "Banknote" },
  { id: 46, title: "Non vuole andare in vacanza con la famiglia", category: Category.FAMILY, icon: "Plane" },
  { id: 47, title: "Critica costantemente i genitori", category: Category.FAMILY, icon: "ThumbsDown" },
  { id: 48, title: "Segreti eccessivi su tutto", category: Category.FAMILY, icon: "Key" },
  { id: 49, title: "Rifiuto di partecipare alle feste comandate", category: Category.FAMILY, icon: "Gift" },
  { id: 50, title: "Fratelli/Sorelle: gelosia o litigi violenti", category: Category.FAMILY, icon: "Swords" },

  // NEW: AGGRESSIVITÀ E RABBIA DI GRUPPO
  { id: 51, title: "Coinvolgimento in rissa o 'branco'", category: Category.RISK, icon: "Swords" },
  { id: 52, title: "Vandalismo di beni pubblici con amici", category: Category.RISK, icon: "Hammer" },
  { id: 53, title: "Lancio/Rottura oggetti durante litigi", category: Category.FAMILY, icon: "Bomb" },
  { id: 54, title: "Pugni contro muri o porte", category: Category.EMOTION, icon: "Hand" },
  { id: 55, title: "Minacce fisiche ai genitori", category: Category.FAMILY, icon: "AlertOctagon" },
  { id: 56, title: "Bullismo di gruppo verso un coetaneo", category: Category.SOCIAL, icon: "Users" },
  { id: 57, title: "Aggressività verbale incontrollabile", category: Category.EMOTION, icon: "MicOff" },
  { id: 58, title: "Crudeltà verso animali", category: Category.RISK, icon: "PawPrint" },
  { id: 59, title: "Filmare atti violenti col cellulare", category: Category.DIGITAL, icon: "Video" },
  { id: 60, title: "Reazione fisica violenta a un 'No'", category: Category.FAMILY, icon: "XCircle" },
];
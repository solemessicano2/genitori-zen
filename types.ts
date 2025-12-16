export enum Category {
  SCHOOL = 'Scuola e Futuro',
  SOCIAL = 'Vita Sociale & Amici',
  DIGITAL = 'Mondo Digitale',
  EMOTION = 'Emozioni e Identità',
  RISK = 'Comportamenti a Rischio',
  FAMILY = 'Vita in Famiglia'
}

export enum TriggerType {
  DOVERIZZAZIONI = 'Doverizzazioni ("Devi!")',
  INVASIONI = 'Invasioni di Privacy',
  PARAGONI = 'Paragoni e Giudizi',
  NON_ASCOLTO = 'Mancato Ascolto',
  FRASI_FATTE = 'Frasi Fatte e Prediche'
}

export interface Situation {
  id: number;
  title: string;
  category: Category;
  icon: string; // Lucide icon name
}

export interface Trigger {
  id: number;
  title: string;
  type: TriggerType;
  icon: string;
}

export interface AdviceResponse {
  analysis: string;
  dos: string[];
  donts: string[];
  conversationStarters: string[];
}

export interface AngerAdviceResponse {
  parentMantra: string;
  immediateAction: string;
  magicPhrase: string;
  triggerAvoid: string;
  deescalationStrategy: string;
}

export interface TriggerAdviceResponse {
  validation: string; // "Hai ragione ad arrabbiarti perché..." (Empatia radicale)
  perspective: string; // "Dal suo punto di vista, questo suona come..."
  betterApproach: string; // "Invece di dire X, prova a dire Y..."
}

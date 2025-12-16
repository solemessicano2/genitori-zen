import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AdviceResponse, AngerAdviceResponse, TriggerAdviceResponse } from "../types";

// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const adviceSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    analysis: {
      type: Type.STRING,
      description: "Una breve analisi psicologica ed empatica del perché sta accadendo questa situazione, dal punto di vista dell'adolescente.",
    },
    dos: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "3-4 consigli pratici su cosa FARE. Azioni costruttive.",
    },
    donts: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "3-4 consigli su cosa NON fare. Errori comuni dei genitori.",
    },
    conversationStarters: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "3 frasi esatte che il genitore può dire per aprire il dialogo senza giudicare.",
    },
  },
  required: ["analysis", "dos", "donts", "conversationStarters"],
};

const angerSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    parentMantra: {
      type: Type.STRING,
      description: "Una frase breve e potente che il genitore deve ripetersi mentalmente per non perdere il controllo.",
    },
    immediateAction: {
      type: Type.STRING,
      description: "Un'azione fisica concreta da fare subito (es. fare un passo indietro, abbassare il tono, sedersi).",
    },
    magicPhrase: {
      type: Type.STRING,
      description: "Una singola frase 'magica' da dire all'adolescente per abbassare immediatamente la tensione.",
    },
    triggerAvoid: {
      type: Type.STRING,
      description: "L'errore numero uno da evitare in questo preciso livello di rabbia.",
    },
    deescalationStrategy: {
      type: Type.STRING,
      description: "Una spiegazione di 2 frasi su come gestire i prossimi 10 minuti.",
    },
  },
  required: ["parentMantra", "immediateAction", "magicPhrase", "triggerAvoid", "deescalationStrategy"],
};

const triggerAdviceSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    validation: {
      type: Type.STRING,
      description: "Spiega perché l'adolescente ha ragione di sentirsi infastidito da questo comportamento. Validazione emotiva radicale.",
    },
    perspective: {
      type: Type.STRING,
      description: "Cosa sente o pensa l'adolescente quando il genitore fa/dice questa cosa. Il 'sottotesto' emotivo.",
    },
    betterApproach: {
      type: Type.STRING,
      description: "Un modo alternativo, concreto e rispettoso di ottenere lo stesso risultato (o migliore) senza usare il trigger.",
    },
  },
  required: ["validation", "perspective", "betterApproach"],
};

export const getAdviceForSituation = async (situationTitle: string): Promise<AdviceResponse> => {
  const prompt = `
    Sei un esperto psicologo dell'età evolutiva specializzato in adolescenza.
    Un genitore ti chiede aiuto per questa situazione specifica: "${situationTitle}".
    
    Fornisci una risposta strutturata, empatica ma pratica. 
    Usa un tono calmo e rassicurante.
    Rispondi in ITALIANO.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: adviceSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) throw new Error("Nessuna risposta generata.");
    
    return JSON.parse(text) as AdviceResponse;
  } catch (error) {
    console.error("Errore Gemini:", error);
    throw error;
  }
};

export const getAngerAdvice = async (intensity: string): Promise<AngerAdviceResponse> => {
  const prompt = `
    Sei un coach per genitori in situazioni di crisi.
    C'è un'emergenza rabbia con un adolescente.
    Livello di intensità attuale: "${intensity}".
    
    Fornisci un protocollo di DE-ESCALATION immediato.
    Obiettivo: Evitare lo scontro, calmare le acque, proteggere la relazione.
    Tono: Direttivo, calmo, urgente.
    Rispondi in ITALIANO.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: angerSchema,
        temperature: 0.4, // Lower temperature for more deterministic/safe advice in crisis
      },
    });

    const text = response.text;
    if (!text) throw new Error("Nessuna risposta generata.");
    
    return JSON.parse(text) as AngerAdviceResponse;
  } catch (error) {
    console.error("Errore Gemini SOS Rabbia:", error);
    throw error;
  }
};

export const getTriggerAdvice = async (triggerTitle: string): Promise<TriggerAdviceResponse> => {
  const prompt = `
    Sei un "traduttore" del linguaggio emotivo adolescenziale per genitori.
    Il genitore ha usato questo trigger o ha fatto questa azione: "${triggerTitle}".
    
    Il tuo compito è aiutare il genitore a capire PERCHÉ questo fa arrabbiare il figlio (Validazione) e come comportarsi meglio (Proseguio).
    Sii diretto ma non giudicante verso il genitore. Fagli aprire gli occhi.
    Rispondi in ITALIANO.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: triggerAdviceSchema,
        temperature: 0.6,
      },
    });

    const text = response.text;
    if (!text) throw new Error("Nessuna risposta generata.");
    
    return JSON.parse(text) as TriggerAdviceResponse;
  } catch (error) {
    console.error("Errore Gemini Trigger:", error);
    throw error;
  }
};

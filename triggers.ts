import { Trigger, TriggerType } from './types';

export const triggers: Trigger[] = [
  // DOVERIZZAZIONI (Musts)
  { id: 101, title: "Metti subito a posto la camera", type: TriggerType.DOVERIZZAZIONI, icon: "Trash2" },
  { id: 102, title: "Spegni quel telefono, ora!", type: TriggerType.DOVERIZZAZIONI, icon: "SmartphoneOff" },
  { id: 103, title: "Devi studiare di più", type: TriggerType.DOVERIZZAZIONI, icon: "BookOpen" },
  { id: 104, title: "Saluta la zia con un bacio", type: TriggerType.DOVERIZZAZIONI, icon: "Users" },
  { id: 105, title: "Tagliati quei capelli", type: TriggerType.DOVERIZZAZIONI, icon: "Scissors" },
  { id: 106, title: "Vestiti in modo decente", type: TriggerType.DOVERIZZAZIONI, icon: "Shirt" },
  { id: 107, title: "Non fare tardi stasera", type: TriggerType.DOVERIZZAZIONI, icon: "Clock" },
  { id: 108, title: "Devi mangiare tutto quello che c'è", type: TriggerType.DOVERIZZAZIONI, icon: "Utensils" },
  { id: 109, title: "Alzati, è tardissimo!", type: TriggerType.DOVERIZZAZIONI, icon: "Sun" },
  { id: 110, title: "Fai i compiti prima di uscire", type: TriggerType.DOVERIZZAZIONI, icon: "PenTool" },

  // INVASIONI (Privacy)
  { id: 111, title: "Entrare in camera senza bussare", type: TriggerType.INVASIONI, icon: "DoorOpen" },
  { id: 112, title: "Leggere le notifiche sul suo schermo", type: TriggerType.INVASIONI, icon: "Eye" },
  { id: 113, title: "Chiedere 'chi era?' appena mette giù", type: TriggerType.INVASIONI, icon: "Phone" },
  { id: 114, title: "Controllare il registro elettronico ogni ora", type: TriggerType.INVASIONI, icon: "Laptop" },
  { id: 115, title: "Riordinare le sue cose senza permesso", type: TriggerType.INVASIONI, icon: "Archive" },
  { id: 116, title: "Origliare le telefonate", type: TriggerType.INVASIONI, icon: "Ear" },
  { id: 117, title: "Seguirlo sui social con profili falsi", type: TriggerType.INVASIONI, icon: "Ghost" },
  { id: 118, title: "Chiedere dettagli intimi sulle relazioni", type: TriggerType.INVASIONI, icon: "Heart" },
  { id: 119, title: "Parlare dei suoi problemi con altri", type: TriggerType.INVASIONI, icon: "Megaphone" },
  { id: 120, title: "Aprire la sua posta/pacchi", type: TriggerType.INVASIONI, icon: "Package" },

  // PARAGONI E GIUDIZI
  { id: 121, title: "Tuo fratello non faceva così", type: TriggerType.PARAGONI, icon: "Scale" },
  { id: 122, title: "Guarda il figlio dei Rossi com'è bravo", type: TriggerType.PARAGONI, icon: "Award" },
  { id: 123, title: "Ai miei tempi studiavamo di più", type: TriggerType.PARAGONI, icon: "History" },
  { id: 124, title: "Sei sempre il solito pigro", type: TriggerType.PARAGONI, icon: "Sofa" },
  { id: 125, title: "Non combinerai mai niente", type: TriggerType.PARAGONI, icon: "ThumbsDown" },
  { id: 126, title: "Quella tua amica non mi piace", type: TriggerType.PARAGONI, icon: "UserX" },
  { id: 127, title: "Perché non sei come X?", type: TriggerType.PARAGONI, icon: "HelpCircle" },
  { id: 128, title: "È solo una fase, passerà", type: TriggerType.PARAGONI, icon: "FastForward" },
  { id: 129, title: "Ti stai rovinando la vita", type: TriggerType.PARAGONI, icon: "AlertTriangle" },
  { id: 130, title: "Hai preso tutto da tuo padre/madre", type: TriggerType.PARAGONI, icon: "Dna" },

  // FRASI FATTE E PREDICHE
  { id: 131, title: "Te l'avevo detto", type: TriggerType.FRASI_FATTE, icon: "Repeat" },
  { id: 132, title: "Lo faccio per il tuo bene", type: TriggerType.FRASI_FATTE, icon: "ShieldCheck" },
  { id: 133, title: "Un giorno mi ringrazierai", type: TriggerType.FRASI_FATTE, icon: "Gift" },
  { id: 134, title: "Finché vivi sotto questo tetto...", type: TriggerType.FRASI_FATTE, icon: "Home" },
  { id: 135, title: "I soldi non crescono sugli alberi", type: TriggerType.FRASI_FATTE, icon: "Banknote" },
  { id: 136, title: "Quando lavorerai capirai", type: TriggerType.FRASI_FATTE, icon: "Briefcase" },
  { id: 137, title: "Non sai cosa sono i veri problemi", type: TriggerType.FRASI_FATTE, icon: "AlertCircle" },
  { id: 138, title: "Rispondimi quando ti parlo!", type: TriggerType.FRASI_FATTE, icon: "MessageSquare" },
  { id: 139, title: "Smetti di piangere", type: TriggerType.FRASI_FATTE, icon: "Frown" },
  { id: 140, title: "Non usare quel tono con me", type: TriggerType.FRASI_FATTE, icon: "Volume2" },

  // MANCATO ASCOLTO / FASTIDI
  { id: 141, title: "Interrompere mentre parla", type: TriggerType.NON_ASCOLTO, icon: "XCircle" },
  { id: 142, title: "Minimizzare i suoi sentimenti", type: TriggerType.NON_ASCOLTO, icon: "Minimize2" },
  { id: 143, title: "Dare soluzioni non richieste", type: TriggerType.NON_ASCOLTO, icon: "Wrench" },
  { id: 144, title: "Guardare il telefono mentre lui parla", type: TriggerType.NON_ASCOLTO, icon: "Smartphone" },
  { id: 145, title: "Fare sarcasmo sui suoi gusti", type: TriggerType.NON_ASCOLTO, icon: "Smile" },
  { id: 146, title: "Trattarlo come un bambino piccolo", type: TriggerType.NON_ASCOLTO, icon: "Baby" },
  { id: 147, title: "Chiedere 'Com'è andata a scuola?' ossessivamente", type: TriggerType.NON_ASCOLTO, icon: "School" },
  { id: 148, title: "Ridere di una sua preoccupazione", type: TriggerType.NON_ASCOLTO, icon: "Laugh" },
  { id: 149, title: "Dimenticare una cosa importante per lui", type: TriggerType.NON_ASCOLTO, icon: "HelpCircle" },
  { id: 150, title: "Fare la vittima", type: TriggerType.NON_ASCOLTO, icon: "Theater" },
];
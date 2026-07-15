"use client";

import { useEffect, useState } from "react";

type Locale = "it" | "en";

const translations: Record<string, string> = {
  "Progetti": "Projects",
  "Preventivo": "Quote",
  "Torna all'inizio": "Back to top",
  "Navigazione principale": "Main navigation",
  "Navigazione mobile": "Mobile navigation",
  "Apri menu": "Open menu",
  "Scrivimi su WhatsApp": "Message me on WhatsApp",
  "Siti web e landing page per attività e professionisti": "Websites and landing pages for businesses and professionals",
  "Il tuo lavoro vale.": "Your work has value.",
  "Il sito deve farlo capire.": "Your website should make that clear.",
  "Progetto pagine chiare, veloci e su misura che aiutano chi ti trova da Google, Instagram o passaparola a capire cosa offri, fidarsi e contattarti senza perdere tempo.": "I design clear, fast, custom-built pages that help people who find you through Google, Instagram or word of mouth understand what you offer, trust you and contact you without wasting time.",
  "Parliamo del tuo sito": "Let's talk about your website",
  "Guarda i progetti": "View the projects",
  "Design su misura": "Custom design",
  "WhatsApp integrato": "WhatsApp integrated",
  "Un referente diretto": "One direct contact",
  "Coaching e personal brand": "Coaching and personal branding",
  "Casa famiglia e assistenza": "Residential care and assistance",
  "Visita il progetto": "View project",
  "La situazione di partenza": "The starting point",
  "Il problema non è il valore del tuo lavoro. È quanto il tuo sito riesce a farlo percepire.": "The problem is not the value of your work. It is how well your website communicates it.",
  "Chi arriva sul tuo sito non conosce ancora il valore del tuo lavoro. Deve capire in poco tempo chi sei, cosa offri e quale passo fare dopo.": "People arriving on your website do not know the value of your work yet. They need to quickly understand who you are, what you offer and what to do next.",
  "Prima impressione": "First impression",
  "Pochi secondi": "A few seconds",
  "Percezione": "Perception",
  "Un sito trascurato abbassa il valore percepito": "A neglected website lowers perceived value",
  "Anche un servizio eccellente può sembrare poco professionale quando viene presentato in modo confuso o datato.": "Even an excellent service can look unprofessional when it is presented in a confusing or outdated way.",
  "Identità coerente": "Consistent identity",
  "Presentazione professionale": "Professional presentation",
  "Messaggio chiaro": "Clear message",
  "Chiarezza": "Clarity",
  "Se l'offerta non è chiara, la persona continua a cercare": "When the offer is unclear, people keep looking",
  "La pagina deve spiegare cosa fai, per chi lo fai e perché vale la pena contattarti.": "The page should explain what you do, who it is for and why contacting you is worthwhile.",
  "Servizi leggibili": "Easy-to-understand services",
  "Percorso semplice": "Simple journey",
  "Azione immediata": "Immediate action",
  "Scrivimi ora": "Message me now",
  "Contatto": "Contact",
  "Ogni passaggio inutile riduce le richieste": "Every unnecessary step reduces enquiries",
  "WhatsApp, telefono o form devono essere visibili nel momento in cui nasce l'interesse.": "WhatsApp, phone or forms should be visible at the moment interest arises.",
  "CTA nei punti giusti": "CTAs in the right places",
  "Contatto immediato": "Immediate contact",
  "Da telefono deve essere tutto ancora più semplice": "On mobile, everything should be even simpler",
  "Molte visite arrivano da Instagram, Google Maps o un link condiviso. La versione mobile va progettata dall'inizio.": "Many visits come from Instagram, Google Maps or a shared link. The mobile version should be designed from the start.",
  "Lettura veloce": "Quick reading",
  "Navigazione naturale": "Natural navigation",
  "Scelta più semplice": "Easier choice",
  "Scelta": "Choice",
  "Una presenza più chiara rende più facile scegliere te": "A clearer online presence makes choosing you easier",
  "Quando due attività sembrano simili, una comunicazione più curata riduce dubbi e rende la scelta più semplice.": "When two businesses look similar, more considered communication reduces doubt and makes the choice easier.",
  "Maggiore fiducia": "More trust",
  "Differenziazione reale": "Real differentiation",
  "Schede situazione di partenza": "Starting-point cards",
  "Il valore di una pagina costruita bene": "The value of a well-built page",
  "Non basta essere online. Devi essere facile da capire, da ricordare e da contattare.": "Being online is not enough. You need to be easy to understand, remember and contact.",
  "Quando il sito non guida la persona": "When the website does not guide the visitor",
  "L'offerta sembra generica o difficile da distinguere.": "The offer feels generic or difficult to distinguish.",
  "La persona non trova subito le informazioni che cerca.": "Visitors cannot immediately find the information they need.",
  "Il contatto richiede troppi passaggi.": "Contacting you requires too many steps.",
  "Il valore del lavoro svolto offline non viene percepito online.": "The value of your offline work is not perceived online.",
  "Quando il sito è progettato con un obiettivo": "When the website is designed around a goal",
  "Chi arriva capisce subito cosa offri e a chi ti rivolgi.": "Visitors immediately understand what you offer and who it is for.",
  "La struttura risponde ai dubbi prima che diventino obiezioni.": "The structure answers questions before they become objections.",
  "Il contatto è naturale e visibile nei momenti giusti.": "Contact feels natural and is visible at the right moments.",
  "La tua attività comunica con la stessa cura che metti nel lavoro reale.": "Your business communicates with the same care you put into the actual work.",
  "Il sito non fa il lavoro al posto tuo. Fa in modo che il tuo lavoro venga capito prima della prima conversazione.": "The website does not do the work for you. It makes sure your work is understood before the first conversation.",
  "Progetti pubblicati": "Published projects",
  "Non concept. Siti reali costruiti intorno ad attività reali.": "Not concepts. Real websites built around real businesses.",
  "Due settori diversi, lo stesso metodo: capire l'attività, organizzare il messaggio e rendere semplice il contatto.": "Two different industries, the same method: understand the business, organise the message and make contact simple.",
  "Scorre verso sinistra": "Scrolls to the left",
  "Scorre verso destra": "Scrolls to the right",
  "La sfida": "The challenge",
  "La soluzione": "The solution",
  "Trasformare un percorso 1:1 complesso in un'offerta chiara, leggibile e credibile anche per chi arriva per la prima volta.": "Turn a complex one-to-one programme into a clear, readable and credible offer, even for first-time visitors.",
  "Ho organizzato la pagina intorno al problema, al metodo, alle fasi del percorso, alle FAQ e alla richiesta di informazioni su WhatsApp.": "I organised the page around the problem, the method, the programme stages, FAQs and WhatsApp enquiries.",
  "Un percorso più semplice da capire, con una proposta di valore ordinata e un contatto diretto nei punti decisivi.": "A programme that is easier to understand, with a structured value proposition and direct contact at key decision points.",
  "Luca è riuscito a trasformare tutte le mie idee in una pagina finalmente chiara e coerente.": "Luca turned all my ideas into a page that finally feels clear and consistent.",
  "Visita Kaiemi Coaching": "Visit Kaiemi Coaching",
  "Hero e proposta di valore": "Hero and value proposition",
  "Situazione di partenza": "Starting point",
  "Metodo in tre fasi": "Three-stage method",
  "FAQ e obiezioni": "FAQs and objections",
  "Casa famiglia e assistenza per anziani": "Residential care and elderly assistance",
  "Costruire fiducia in un settore delicato, aiutando le famiglie a capire struttura, servizi e modalità di contatto prima della visita.": "Build trust in a sensitive sector, helping families understand the residence, services and contact options before visiting.",
  "Ho dato priorità alla presentazione della struttura, ai servizi, alle attività, alle informazioni pratiche e ai contatti diretti.": "I prioritised the presentation of the residence, services, activities, practical information and direct contact options.",
  "Una presenza online più rassicurante, ordinata e orientata alla richiesta di informazioni o alla prenotazione di una visita.": "A more reassuring, organised online presence focused on enquiries and visit bookings.",
  "Il nuovo sito ha superato le nostre aspettative. Oltre ad aver apprezzato molto il risultato finale, abbiamo registrato un notevole aumento delle richieste mensili e dei contatti provenienti da Google.": "The new website exceeded our expectations. Alongside being very pleased with the final result, we saw a significant increase in monthly enquiries and contacts coming from Google.",
  "Visita Residenza Romano": "Visit Residenza Romano",
  "Hero desktop": "Desktop hero",
  "Esperienza mobile": "Mobile experience",
  "Fiducia e prova sociale": "Trust and social proof",
  "Testimonianze reali": "Real testimonials",
  "Attività ed eventi": "Activities and events",
  "Il prossimo progetto potrebbe essere il tuo.": "The next project could be yours.",
  "Prima di progettare una pagina, capisco come lavora la tua attività, cosa deve comunicare e quale azione vuoi ottenere da chi visita il sito.": "Before designing a page, I understand how your business works, what it needs to communicate and what action you want visitors to take.",
  "Raccontami il progetto": "Tell me about your project",
  "Un progetto diretto": "A direct working relationship",
  "Dall'idea alla pubblicazione, parli sempre con la stessa persona.": "From the initial idea to launch, you always speak with the same person.",
  "Prima capisco l'attività": "First, I understand the business",
  "Non parto dal colore o dal template. Parto da cosa offri, a chi ti rivolgi e cosa deve fare la persona sul sito.": "I do not start with colours or a template. I start with what you offer, who it is for and what visitors should do on the website.",
  "Struttura, copy e design lavorano insieme": "Structure, copy and design work together",
  "Non realizzo solo la parte visiva. Organizzo informazioni, gerarchie e CTA per rendere la pagina più chiara.": "I do not only create the visual layer. I organise information, hierarchy and CTAs to make the page clearer.",
  "Il mobile viene progettato dall'inizio": "Mobile is designed from the start",
  "La versione da telefono non è una copia compressa di quella desktop: viene pensata per lettura e contatto rapidi.": "The mobile version is not a compressed copy of desktop: it is designed for quick reading and contact.",
  "Hai un referente diretto": "You have one direct contact",
  "Analisi, modifiche e pubblicazione passano da me, senza account manager o passaggi intermedi.": "Analysis, revisions and publishing are handled directly by me, without account managers or intermediaries.",
  "Quando è utile, ti segnalo anche eventuali problemi nel profilo Google Business o nella pagina Instagram. Il sito resta il centro del progetto; gli altri canali devono portare le persone lì in modo coerente.": "When useful, I also flag issues with your Google Business Profile or Instagram page. The website remains the centre of the project; other channels should lead people there consistently.",
  "Preventivo trasparente": "Transparent quote",
  "Landing page a partire da 300 €.": "Landing pages from €300.",
  "Il prezzo di partenza riguarda una landing page essenziale, costruita su una struttura chiara e con le funzionalità concordate. Il costo finale dipende da contenuti, numero di sezioni, integrazioni e livello di personalizzazione. Prima di iniziare ricevi sempre una proposta completa con tempi, attività incluse e prezzo definitivo.": "The starting price covers an essential landing page built around a clear structure and the agreed functionality. The final cost depends on content, number of sections, integrations and level of customisation. Before work begins, you always receive a complete proposal with timing, included work and a final price.",
  "Prezzo di partenza": "Starting price",
  "Per una landing page essenziale. Dominio, servizi esterni e richieste aggiuntive vengono indicati separatamente.": "For an essential landing page. Domain, third-party services and additional requests are quoted separately.",
  "Richiedi una prima valutazione": "Request an initial assessment",
  "Nel preventivo trovi": "Your quote includes",
  "Numero di pagine o sezioni": "Number of pages or sections",
  "Supporto su testi e struttura": "Support with copy and structure",
  "Numero di revisioni incluse": "Number of included revisions",
  "Collegamento WhatsApp, form o Maps": "WhatsApp, forms or Maps integration",
  "Pubblicazione e configurazione dominio": "Publishing and domain setup",
  "Eventuale assistenza successiva": "Optional ongoing support",
  "Domande frequenti": "Frequently asked questions",
  "Le domande che mi fanno più spesso.": "The questions I am asked most often.",
  "Quanto tempo serve per creare il sito?": "How long does it take to build the website?",
  "Una landing page può essere pronta in pochi giorni quando testi, immagini e informazioni sono disponibili. Prima di iniziare ti indico una tempistica realistica in base al progetto.": "A landing page can be ready in a few days when copy, images and information are available. Before starting, I provide a realistic timeline based on the project.",
  "Devo avere già testi e foto?": "Do I need to already have copy and photos?",
  "No. Posso aiutarti a organizzare i testi e a selezionare il materiale più adatto. Se mancano immagini professionali, definiamo insieme una soluzione coerente.": "No. I can help organise the copy and select the most suitable material. When professional images are missing, we define a consistent solution together.",
  "Quanto costa?": "How much does it cost?",
  "Le landing page essenziali partono da 300 €. Il prezzo finale dipende da struttura, contenuti, integrazioni e livello di personalizzazione. Dopo la prima conversazione ricevi un preventivo chiaro prima di iniziare qualsiasi lavoro.": "Essential landing pages start from €300. The final price depends on structure, content, integrations and level of customisation. After our first conversation, you receive a clear quote before any work begins.",
  "Cosa è incluso nel preventivo?": "What is included in the quote?",
  "Il preventivo specifica sezioni, design, sviluppo, revisioni, collegamenti, pubblicazione ed eventuale supporto successivo.": "The quote specifies sections, design, development, revisions, integrations, publishing and any ongoing support.",
  "Dominio e hosting sono inclusi?": "Are domain and hosting included?",
  "Posso occuparmi della configurazione. Eventuali costi annuali di dominio o servizi esterni vengono indicati separatamente e restano intestati al cliente.": "I can handle the setup. Any annual domain or third-party service costs are quoted separately and remain registered to the client.",
  "Potrò aggiornare il sito in futuro?": "Will I be able to update the website later?",
  "Sì. Possiamo concordare modifiche singole oppure un supporto continuativo, in base alla frequenza degli aggiornamenti.": "Yes. We can arrange individual changes or ongoing support, depending on how frequently updates are needed.",
  "Perché non usare semplicemente un template?": "Why not simply use a template?",
  "Un template può essere sufficiente se hai tempo, contenuti già chiari e sai come strutturare la pagina. Un progetto su misura serve quando vuoi evitare di gestire tutto da solo e costruire il sito intorno alla tua attività, non adattare l'attività a un modello generico.": "A template may be enough when you have time, clear content and know how to structure the page. A custom project is useful when you want to avoid managing everything alone and build the website around your business, rather than adapting the business to a generic template.",
  "Il sito funziona bene da telefono?": "Does the website work well on mobile?",
  "Sì. La struttura viene progettata mobile-first, perché molte visite arrivano da Instagram, Google, WhatsApp o link condivisi.": "Yes. The structure is designed mobile-first because many visits come from Instagram, Google, WhatsApp or shared links.",
  "Raccontami cosa fai. Ti dico come imposterei il sito.": "Tell me what you do. I will explain how I would structure your website.",
  "Scrivimi su WhatsApp e raccontami attività, obiettivo e situazione attuale. Ti rispondo direttamente io con le prime indicazioni utili.": "Message me on WhatsApp and tell me about your business, goal and current situation. I will reply directly with the first useful recommendations.",
  "Prima conversazione senza impegno.": "First conversation, no obligation.",
  "Siti web & landing page": "Websites & landing pages",
  "Tutti i diritti riservati": "All rights reserved"
};

const reverseTranslations = Object.fromEntries(
  Object.entries(translations).map(([italian, english]) => [english, italian]),
);

function translateTextNodes(locale: Locale) {
  const dictionary = locale === "en" ? translations : reverseTranslations;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) nodes.push(walker.currentNode as Text);

  for (const node of nodes) {
    const value = node.nodeValue ?? "";
    const trimmed = value.trim();
    const translated = dictionary[trimmed];
    if (!translated) continue;
    node.nodeValue = value.replace(trimmed, translated);
  }

  const attributes = ["aria-label", "title"];
  document.querySelectorAll<HTMLElement>("[aria-label], [title]").forEach((element) => {
    attributes.forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value && dictionary[value]) element.setAttribute(attribute, dictionary[value]);
    });
  });

  document.documentElement.lang = locale;
  document.title = locale === "en"
    ? "Custom Websites and Landing Pages | Montini Creative"
    : "Siti Web e Landing Page su Misura | Montini Creative";
}

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>("it");

  useEffect(() => {
    const saved = window.localStorage.getItem("montini-language") as Locale | null;
    const initial = saved === "en" ? "en" : "it";
    setLocale(initial);
    requestAnimationFrame(() => translateTextNodes(initial));
  }, []);

  const changeLanguage = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    translateTextNodes(nextLocale);
    window.localStorage.setItem("montini-language", nextLocale);
    setLocale(nextLocale);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-graphite/15 bg-white/70 p-1" aria-label="Language selector">
      {(["it", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => changeLanguage(item)}
          aria-pressed={locale === item}
          className={`rounded-full px-2.5 py-1.5 text-[11px] font-display font-semibold uppercase tracking-[0.08em] transition-colors sm:px-3 ${
            locale === item ? "bg-graphite text-cream" : "text-muted-dark hover:text-graphite"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

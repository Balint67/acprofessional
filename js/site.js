(function () {
    const translations = {
        "Csap Ágnes főoldal": "Home page di Csap Ágnes",
        "Nyelvválasztás": "Selezione lingua",
        "Olasz-magyar tolmácsolás, fordítás és üzleti kommunikációs támogatás vállalatoknak.": "Interpretariato, traduzione e supporto alla comunicazione aziendale italo-ungherese per imprese.",
        "Csap Ágnes | Olasz-magyar tolmács és üzleti támogatás": "Csap Ágnes | Interprete italo-ungherese e supporto aziendale",
        "Rólam | Csap Ágnes": "Chi sono | Csap Ágnes",
        "Szolgáltatások | Csap Ágnes": "Servizi | Csap Ágnes",
        "Kapcsolat | Csap Ágnes": "Contatti | Csap Ágnes",

        "Olasz-magyar kommunikáció": "Comunicazione italo-ungherese",
        "Főoldal": "Home",
        "Rólam": "Chi sono",
        "Szolgáltatások": "Servizi",
        "Kapcsolat": "Contatti",
        "Ajánlatkérés": "Richiedi un preventivo",
        "Kapcsolatfelvétel": "Contattami",
        "Időpont egyeztetése": "Fissa un appuntamento",
        "© 2026 Csap Ágnes. Olasz-magyar tolmácsolás és üzleti támogatás.": "© 2026 Csap Ágnes. Interpretariato italo-ungherese e supporto aziendale.",

        "Olasz-magyar üzleti kommunikáció": "Comunicazione aziendale italo-ungherese",
        "Egyszerűen. Világosan. Hatékonyan.": "Semplice. Chiaro. Efficace.",
        "Tolmácsolás, üzleti támogatás és online jelenlét egy kézből. Segítek a kis- és nagyvállalatoknak abban, hogy világosan kommunikáljanak, jól szervezetten működjenek, és hatékonyan jelenjenek meg az online térben.": "Interpretariato, supporto aziendale e presenza online in un unico servizio. Aiuto piccole e grandi imprese a comunicare con chiarezza, lavorare in modo organizzato e presentarsi online con efficacia.",
        "20 év tapasztalat": "20 anni di esperienza",
        "Diszkrét ügyintézés": "Gestione riservata",
        "Nemzetközi szemlélet": "Visione internazionale",
        "Magyarország és Olaszország között": "Tra Ungheria e Italia",
        "Gyors, pontos, professzionális kommunikáció": "Comunicazione rapida, precisa e professionale",
        "Bemutatkozás": "Presentazione",
        "Partner az üzleti kapcsolatokban": "Partner per le relazioni aziendali",
        "Csap Ágnes vagyok, olasz-magyar tolmács, fordító és social media marketing szakember. Több mint 20 éve segítem az olasz és magyar vállalkozások közötti gördülékeny kommunikációt, legyen szó üzleti tárgyalásról, kiállítási jelenlétről vagy marketinganyagokról.": "Sono Csap Ágnes, interprete e traduttrice italo-ungherese e specialista in social media marketing. Da oltre 20 anni facilito la comunicazione tra aziende italiane e ungheresi, dalle trattative commerciali alla presenza in fiera fino ai materiali di marketing.",
        "Szenvedélyem az olasz nyelv és kultúra, valamint az olyan együttműködések kialakítása, amelyek mindkét fél számára értéket teremtenek.": "La mia passione per la lingua e la cultura italiana si unisce alla costruzione di collaborazioni che creano valore per entrambe le parti.",
        "Kommunikációs támogatás egy kézből": "Supporto alla comunicazione in un unico servizio",
        "Megbízható nyelvi és üzleti háttér, amikor pontos egyeztetésre, gyors reakciókra és tiszta folyamatokra van szükség.": "Un supporto linguistico e aziendale affidabile quando servono coordinamento preciso, risposte rapide e processi chiari.",
        "Tolmácsolás": "Interpretariato",
        "Telefonos egyeztetések, üzleti tárgyalások, kiállítási jelenlét és gyárlátogatások olasz-magyar nyelvi támogatással.": "Telefonate, trattative commerciali, fiere e visite aziendali con supporto linguistico italo-ungherese.",
        "Fordítás": "Traduzione",
        "Üzleti, marketing és szakmai anyagok pontos, kontextushoz igazodó fordítása magyarról olaszra és olaszról magyarra.": "Traduzione accurata e contestualizzata di testi aziendali, marketing e specialistici dall'ungherese all'italiano e dall'italiano all'ungherese.",
        "Üzleti kommunikáció": "Comunicazione aziendale",
        "Kapcsolattartás, folyamatkövetés, rendelések és szállítási egyeztetések koordinációja nemzetközi partnerekkel.": "Gestione dei contatti, monitoraggio dei processi, coordinamento di ordini e spedizioni con partner internazionali.",
        "Piackutatás és képviselet": "Ricerca di mercato e rappresentanza",
        "Olasz és magyar piaci kapcsolatok feltérképezése, céges megjelenés támogatása és partnerkommunikáció.": "Mappatura dei contatti sul mercato italiano e ungherese, supporto alla presenza aziendale e comunicazione con i partner.",
        "Miért válassz engem?": "Perché scegliere me?",
        "Biztos nyelvi háttér, személyes támogatás": "Competenza linguistica e supporto personale",
        "20 éves tapasztalat, stabil olasz-magyar szakmai háttér és rugalmas gondolkodás. Az olasz-magyar kapcsolatokban partnerként állok melletted, hogy gördülékenyebb legyen minden együttműködésed.": "20 anni di esperienza, una solida competenza professionale italo-ungherese e un approccio flessibile. Nelle relazioni tra Italia e Ungheria lavoro al tuo fianco come partner, per rendere ogni collaborazione più fluida.",
        "Következő lépés": "Prossimo passo",
        "Tiszta, pontos olasz-magyar kommunikáció.": "Comunicazione chiara e precisa.",

        "Olasz háttér, üzleti szemlélet.": "Competenza italiana e visione aziendale.",
        "Csap Ágnes - olasz-magyar tolmács, fordító és social media marketing szakember. Több mint 20 éve segítem az olasz és magyar vállalkozások közötti gördülékeny kommunikációt és üzleti együttműködést.": "Csap Ágnes - interprete e traduttrice italo-ungherese, specialista in social media marketing. Da oltre 20 anni aiuto aziende italiane e ungheresi a comunicare e collaborare con fluidità.",
        "Olasz nyelvi és kulturális háttér, üzleti tapasztalat és gyakorlati koordináció egy szolgáltatásban.": "Competenza linguistica e culturale italiana, esperienza aziendale e coordinamento pratico in un unico servizio.",
        "Küldetés": "Missione",
        "Olasz-magyar kapcsolatok erősítése": "Rafforzare le relazioni italo-ungheresi",
        "Olyan üzleti együttműködéseket támogatok, amelyek hosszú távon mindkét fél számára értéket teremtenek.": "Supporto collaborazioni aziendali che creano valore a lungo termine per entrambe le parti.",
        "Az olasz nyelv iránti szenvedélyem már a gimnáziumi évek alatt kezdődött, amikor a Szent László Gimnázium olasz kéttannyelvű szakán tanultam. Ezt követte a Pécsi Tudományegyetem olasz nyelv és irodalom szak, majd a Bolognai Egyetemen eltöltött idő Erasmus-hallgatóként, amely során elmélyítettem az olasz nyelvi és kulturális ismereteimet.": "La mia passione per la lingua italiana è nata già al liceo, nel corso bilingue italiano del Szent László Gimnázium. Ho poi studiato lingua e letteratura italiana all'Università di Pécs e ho approfondito le mie conoscenze linguistiche e culturali durante il periodo Erasmus all'Università di Bologna.",
        "Már az egyetemi évek alatt is dolgoztam olasz cégeknek tolmácsként és fordítóként: készítettem használati útmutató fordításokat, irodalmi műfordításokat, valamint publikáltam is egy könyvben.": "Già durante gli anni universitari ho lavorato per aziende italiane come interprete e traduttrice: ho tradotto manuali d'uso, testi letterari e ho pubblicato anche in un volume.",
        "Küldetésem az olasz-magyar kapcsolatok erősítése és az olyan üzleti együttműködések elősegítése, amelyek hosszú távon mindkét fél számára értéket teremtenek. Legyen szó üzleti tárgyalásról, kiállítási részvételről, marketinganyagok elkészítéséről vagy export-import folyamatról, teljes körű támogatást nyújtok.": "La mia missione è rafforzare le relazioni italo-ungheresi e favorire collaborazioni aziendali che creano valore duraturo per entrambe le parti. Che si tratti di trattative commerciali, fiere, materiali di marketing o processi di export-import, offro un supporto completo.",
        "Tanulmányok": "Formazione",
        "Szakmai alapok és fejlődés": "Basi professionali e crescita",
        "Social Media Marketing Manager képzés": "Corso Social Media Marketing Manager",
        "Közösségi média stratégia, tartalomgyártás, kampánymenedzsment.": "Strategia social media, creazione di contenuti, gestione campagne.",
        "Canva és AI a marketingben képzés": "Corso Canva e AI nel marketing",
        "Vizuális tartalomkészítés és mesterséges intelligencia integráció marketingfolyamatokban.": "Creazione di contenuti visuali e integrazione dell'intelligenza artificiale nei processi di marketing.",
        "Pécsi Tudományegyetem": "Università di Pécs",
        "Olasz nyelv és irodalom szak.": "Lingua e letteratura italiana.",
        "Bolognai Egyetem": "Università di Bologna",
        "Erasmus ösztöndíj, olasz nyelv és kultúra tanulmányok.": "Borsa Erasmus, studi di lingua e cultura italiana.",
        "Szent László Gimnázium": "Liceo Szent László",
        "Olasz kéttannyelvű tagozat.": "Sezione bilingue italiana.",
        "Vélemények": "Testimonianze",
        "\"Ágnessel több mint 20 éve dolgozunk együtt, és ez idő alatt nemcsak szakmai partnerünkké, hanem a cégünk mindennapjainak nélkülözhetetlen részévé vált.\"": "\"Lavoriamo con Ágnes da oltre 20 anni e in questo periodo è diventata non solo una partner professionale, ma anche una parte indispensabile della vita quotidiana della nostra azienda.\"",
        "Az olasz beszállítókkal való kapcsolattartásban, a rendelések és szállítások koordinációjában, valamint a gyors helyzetmegoldásban is megbízható üzleti partnerként támogatja az együttműködést.": "Nella gestione dei fornitori italiani, nel coordinamento di ordini e spedizioni e nella risoluzione rapida delle situazioni, supporta la collaborazione come partner aziendale affidabile.",
        "Együttműködés": "Collaborazione",
        "Professzionális olasz-magyar támogatás.": "Supporto italo-ungherese professionale.",

        "Olasz-magyar tolmácsolás, fordítás, kapcsolattartás, cégképviselet és üzleti kommunikációs támogatás.": "Interpretariato, traduzione, gestione contatti, rappresentanza aziendale e supporto alla comunicazione italo-ungherese.",
        "Olasz-magyar kommunikáció egy kézből.": "Comunicazione italo-ungherese completa.",
        "Tolmácsolás, fordítás, partnerkapcsolati támogatás és gyakorlati koordináció olyan helyzetekben, ahol a pontosság, a gyors reakció és a diszkréció számít.": "Interpretariato, traduzione, supporto nelle relazioni con i partner e coordinamento pratico nelle situazioni in cui contano precisione, rapidità e discrezione.",
        "Területek": "Ambiti",
        "Válaszd ki a szükséges támogatást": "Scegli il supporto di cui hai bisogno",
        "A szolgáltatásnevek jól láthatóan jelennek meg, a részletek pedig lenyitható mezőben kapnak helyet, így az oldal egyszerre marad tömör és informatív.": "I servizi sono presentati in modo chiaro, mentre i dettagli si aprono in sezioni dedicate, così la pagina resta compatta e informativa.",
        "Egyeztetés, kapcsolattartás": "Coordinamento e gestione contatti",
        "Ide kerül majd a szolgáltatás részletes leírása. Röviden bemutatható, milyen helyzetekben nyújt támogatást, kinek ajánlott, és hogyan zajlik az együttműködés.": "Qui sarà inserita la descrizione dettagliata del servizio. Si potrà spiegare in quali situazioni offre supporto, a chi è rivolto e come si svolge la collaborazione.",
        "Telefonos tolmácsolás": "Interpretariato telefonico",
        "Ide kerül majd a szolgáltatás részletes leírása. Használható például gyors egyeztetések, időpontfoglalások, partneri pontosítások vagy sürgős üzleti hívások bemutatására.": "Qui sarà inserita la descrizione dettagliata del servizio. Potrà descrivere, ad esempio, coordinamenti rapidi, prenotazioni, chiarimenti con partner o chiamate aziendali urgenti.",
        "Tolmácsolás üzleti tárgyalásokon, kiállításokon, találkozókon": "Interpretariato per trattative, fiere e incontri",
        "Ide kerül majd a szolgáltatás részletes leírása. Később szerepelhet benne a személyes jelenlét, a felkészülés, a szakmai szókincs és a tárgyalási helyzetek támogatása.": "Qui sarà inserita la descrizione dettagliata del servizio. In seguito potrà includere presenza sul posto, preparazione, terminologia specialistica e supporto nelle trattative.",
        "Standszervezés": "Organizzazione stand",
        "Ide kerül majd a szolgáltatás részletes leírása. A későbbi szöveg kitérhet a kiállítási előkészítésre, koordinációra, helyszíni kommunikációra és partnerfogadásra.": "Qui sarà inserita la descrizione dettagliata del servizio. Il testo potrà trattare preparazione fieristica, coordinamento, comunicazione sul posto e accoglienza dei partner.",
        "Nyelvi közvetítés": "Mediazione linguistica",
        "Ide kerül majd a szolgáltatás részletes leírása. Megfogalmazható benne, hogyan segíti a pontos jelentésátadást és a kulturális különbségek kezelését.": "Qui sarà inserita la descrizione dettagliata del servizio. Potrà spiegare come facilita la trasmissione precisa del significato e la gestione delle differenze culturali.",
        "Értékesítés, marketing tevékenység": "Vendite e attività marketing",
        "Ide kerül majd a szolgáltatás részletes leírása. Bővíthető közösségi média, kampánykommunikáció, ajánlatok, bemutatkozó anyagok és célpiaci üzenetek témáival.": "Qui sarà inserita la descrizione dettagliata del servizio. Potrà includere social media, comunicazione di campagna, offerte, materiali di presentazione e messaggi per il mercato target.",
        "Ide kerül majd a szolgáltatás részletes leírása. Később felsorolhatók a fordított anyagtípusok, például üzleti dokumentumok, marketinganyagok vagy szakmai szövegek.": "Qui sarà inserita la descrizione dettagliata del servizio. In seguito si potranno elencare i tipi di materiali tradotti, ad esempio documenti aziendali, materiali marketing o testi specialistici.",
        "Szállásfoglalás, utazás": "Prenotazioni e viaggi",
        "Ide kerül majd a szolgáltatás részletes leírása. A szöveg bemutathatja az olaszországi és magyarországi üzleti utakhoz kapcsolódó szervezési segítséget.": "Qui sarà inserita la descrizione dettagliata del servizio. Il testo potrà descrivere il supporto organizzativo per viaggi aziendali in Italia e in Ungheria.",
        "Kapcsolattartás magyar és olasz partnerek között": "Gestione contatti tra partner ungheresi e italiani",
        "Ide kerül majd a szolgáltatás részletes leírása. Kiemelhető a folyamatos partnerkommunikáció, a rendelési folyamatok követése és az információk pontos továbbítása.": "Qui sarà inserita la descrizione dettagliata del servizio. Si potrà evidenziare la comunicazione continua con i partner, il monitoraggio degli ordini e la trasmissione precisa delle informazioni.",
        "Cégképviselet, piackutatás, üzleti kommunikáció": "Rappresentanza aziendale, ricerca di mercato, comunicazione",
        "Ide kerül majd a szolgáltatás részletes leírása. Később bemutatható a piaci információgyűjtés, a partnerkeresés, a képviseleti kommunikáció és a nemzetközi üzleti jelenlét támogatása.": "Qui sarà inserita la descrizione dettagliata del servizio. In seguito potrà descrivere raccolta di informazioni di mercato, ricerca partner, comunicazione di rappresentanza e supporto alla presenza aziendale internazionale.",
        "Munkafolyamat": "Metodo di lavoro",
        "Egyszerű, követhető együttműködés": "Collaborazione semplice e chiara",
        "Az olasz-magyar üzleti helyzetek sokszor gyors döntést és pontos információátadást igényelnek. A folyamat ezért átlátható, előkészített és rugalmas.": "Le situazioni aziendali italo-ungheresi richiedono spesso decisioni rapide e trasferimento preciso delle informazioni. Per questo il processo è trasparente, preparato e flessibile.",
        "Mondd el, milyen támogatást keresel.": "Raccontami che supporto cerchi.",

        "Kapcsolatfelvétel olasz-magyar tolmácsolás, fordítás és üzleti kommunikációs támogatás ügyében.": "Contatto per interpretariato, traduzione e supporto alla comunicazione aziendale italo-ungherese.",
        "Kezdjük egy célzott egyeztetéssel.": "Iniziamo con un confronto mirato.",
        "Írd meg röviden, milyen olasz-magyar kommunikációs helyzethez keresel támogatást, és hamarosan felvesszük veled a kapcsolatot.": "Scrivi brevemente per quale situazione comunicativa italo-ungherese cerchi supporto e ti ricontatteremo al più presto.",
        "Írd meg, milyen olasz-magyar kommunikációs helyzethez keresel támogatást: tárgyalás, fordítás, kiállítás, partnerkapcsolat vagy üzleti koordináció.": "Scrivi per quale situazione comunicativa italo-ungherese cerchi supporto: trattativa, traduzione, fiera, relazione con partner o coordinamento aziendale.",
        "Elérhetőség": "Recapiti",
        "Add meg a fő részleteket": "Indica i dettagli principali",
        "A kapcsolatfelvételi adatok később ide illeszthetők. A mezők most vizuális és tartalmi helyet adnak a végleges információknak.": "I dati di contatto definitivi potranno essere inseriti qui. Per ora i campi riservano lo spazio visivo e testuale alle informazioni finali.",
        "Kapcsolati email helye": "Spazio per l'email di contatto",
        "Telefon": "Telefono",
        "Telefonszám helye": "Spazio per il numero di telefono",
        "Nyelvek": "Lingue",
        "Magyar, olasz": "Ungherese, italiano",
        "Név": "Nome",
        "Teljes név": "Nome completo",
        "Szolgáltatás": "Servizio",
        "Olasz-magyar tolmácsolás": "Interpretariato italo-ungherese",
        "Üzleti kapcsolattartás": "Gestione contatti aziendali",
        "Cégképviselet vagy piackutatás": "Rappresentanza aziendale o ricerca di mercato",
        "Üzenet": "Messaggio",
        "Röviden írd le, miben kérsz támogatást.": "Descrivi brevemente di quale supporto hai bisogno.",
        "Üzenet küldése": "Invia messaggio",
        "Inkább közvetlenül emailt írnál?": "Preferisci scrivere direttamente via email?",
        "Írok Gmailben": "Scrivo con Gmail",
        "Írok más levelezőben": "Scrivo con un altro client",
        "Új üzenet az Csap Ágnes weboldalról": "Nuovo messaggio dal sito di Csap Ágnes",
        "Küldés...": "Invio...",
        "Köszönjük az üzenetet! Hamarosan válaszolunk.": "Grazie per il messaggio. Risponderemo al più presto.",
        "Hiba történt a küldés során. Kérjük, próbáld újra, vagy írj emailt közvetlenül.": "Si è verificato un errore durante l'invio. Riprova oppure scrivi direttamente via email."
    };

    const translatableAttributes = ["aria-label", "alt", "placeholder", "value", "content", "title"];
    const languageButtons = () => Array.from(document.querySelectorAll("[data-lang]"));
    const supportedLanguages = new Set(["hu", "it"]);
    const normalizedTranslations = new Map(
        Object.entries(translations).map(([key, value]) => [normalizeKey(key), value])
    );

    function normalizeKey(value) {
        return value.replace(/\s+/g, " ").trim();
    }

    function getRequestedLanguage() {
        const params = new URLSearchParams(window.location.search);
        const urlLanguage = params.get("lang");
        if (supportedLanguages.has(urlLanguage)) {
            return urlLanguage;
        }
        const savedLanguage = localStorage.getItem("siteLanguage");
        return supportedLanguages.has(savedLanguage) ? savedLanguage : "hu";
    }

    function persistLanguage(lang) {
        localStorage.setItem("siteLanguage", lang);

        const url = new URL(window.location.href);
        if (lang === "hu") {
            url.searchParams.delete("lang");
        } else {
            url.searchParams.set("lang", lang);
        }
        window.history.replaceState({}, "", url);
    }

    function translateString(value, lang) {
        const trimmed = value.trim();
        if (!trimmed) return value;
        const translated = lang === "it" ? normalizedTranslations.get(normalizeKey(trimmed)) : trimmed;
        if (!translated) return value;
        return value.replace(trimmed, translated);
    }

    function storeOriginal(target, key, value) {
        const dataKey = "i18nOriginal" + key.replace(/[^a-z0-9]/gi, "");
        if (!target.dataset[dataKey]) {
            target.dataset[dataKey] = value;
        }
        return target.dataset[dataKey];
    }

    function translateTextNode(node, lang) {
        const original = node.__i18nOriginal || node.textContent;
        node.__i18nOriginal = original;
        node.textContent = lang === "it" ? translateString(original, lang) : original;
    }

    function translateElementAttributes(element, lang) {
        translatableAttributes.forEach((attr) => {
            if (!element.hasAttribute(attr)) return;
            const original = storeOriginal(element, attr, element.getAttribute(attr));
            element.setAttribute(attr, lang === "it" ? translateString(original, lang) : original);
        });
    }

    function translatePage(lang) {
        document.documentElement.lang = lang;
        document.title = lang === "it" ? (translations[document.title] || document.title) : (document.body.dataset.originalTitle || document.title);

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
                    return NodeFilter.FILTER_REJECT;
                }
                return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach((node) => translateTextNode(node, lang));
        document.querySelectorAll("*").forEach((element) => translateElementAttributes(element, lang));

        languageButtons().forEach((button) => {
            const isActive = button.dataset.lang === lang;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
    }

    function initLanguageSwitcher() {
        document.body.dataset.originalTitle = document.title;
        const savedLanguage = getRequestedLanguage();

        languageButtons().forEach((button) => {
            button.addEventListener("click", () => {
                const nextLanguage = supportedLanguages.has(button.dataset.lang) ? button.dataset.lang : "hu";
                persistLanguage(nextLanguage);
                translatePage(nextLanguage);
            });
        });

        persistLanguage(savedLanguage);
        translatePage(savedLanguage);

        const observer = new MutationObserver(() => {
            if ((localStorage.getItem("siteLanguage") || "hu") === "it") {
                translatePage("it");
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
    } else {
        initLanguageSwitcher();
    }
})();

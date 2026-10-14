// Eesti keel on põhikeel. Tekstid on kirjutatud eesti keeles, mitte tõlgitud.

export type DemoTypeKey = "cafe" | "salon" | "auto" | "build" | "general";

export const et = {
  meta: {
    title: "Kodulehe tegemine ettevõtetele | Lehesepp",
    description:
      "Kodulehe tegemine ettevõtetele üle Eesti. Kiire ja mobiilisõbralik veebileht, mille eelvaate näete tasuta enne, kui maksate.",
    ogAlt: "Lehesepp: kodulehed Eesti ettevõtetele",
  },
  nav: {
    label: "Põhimenüü",
    home: "Lehesepa avalehele",
    services: "Teenused",
    process: "Töö käik",
    faq: "KKK",
    contact: "Kontakt",
    cta: "Küsi pakkumist",
    skip: "Mine sisu juurde",
    language: "In English",
    languageShort: "EN",
  },
  hero: {
    titleA: "Kodulehed Eesti ettevõtetele.",
    titleB: "Valmis lehte näete enne, kui maksate.",
    sub: "Teeme kodulehti igale ettevõttele: kohvikutele, ilusalongidele, ehitusfirmadele ja paljudele teistele. Kõigepealt teeme eelvaate, alles siis otsustate.",
    cta: "Küsi pakkumist",
    secondary: "Töö käik",
    demo: {
      region: "Näidis: kodulehe eelvaade teie ettevõtte nimega",
      inputLabel: "Teie ettevõtte nimi",
      inputPlaceholder: "Näiteks Kohvik Mõisa",
      typesLabel: "Tegevusala",
      note: "Need on näidised. Teie ettevõttele teeme eelvaate tasuta.",
      draftLabel: "kavand",
      types: {
        cafe: {
          label: "Kohvik",
          sample: "Kohvik Mõisa",
          tagline: "Värske kohv ja kohapeal küpsetatud saiad igal hommikul.",
          nav: ["Menüü", "Meist", "Kontakt"],
          cta: "Broneeri laud",
          info: "Avatud iga päev 8–18",
          listLabel: "Täna vitriinis",
          list: ["Kardemonisai", "Rabarberikook", "Kohupiimapirukas"],
        },
        salon: {
          label: "Juuksur",
          sample: "Salong Liis",
          tagline: "Lõikus, värvimine ja hooldus rahulikus õhkkonnas.",
          nav: ["Teenused", "Meist", "Kontakt"],
          cta: "Broneeri aeg",
          info: "Kalamaja, Tallinn",
          listLabel: "Vabad ajad täna",
          list: ["10:00", "12:30", "15:00", "17:30"],
        },
        auto: {
          label: "Autoremont",
          sample: "Autoremont Kaasik",
          tagline: "Hooldus, remont ja rehvivahetus ühest kohast.",
          nav: ["Teenused", "Rehvid", "Kontakt"],
          cta: "Broneeri hooldus",
          info: "E–R 8–18",
          listLabel: "Teenused",
          list: ["Korraline hooldus", "Diagnostika", "Rehvivahetus"],
        },
        build: {
          label: "Ehitus",
          sample: "Rehe Ehitus",
          tagline: "Katused, fassaadid ja siseviimistlus võtmed kätte.",
          nav: ["Tööd", "Teenused", "Kontakt"],
          cta: "Kirjelda oma projekti",
          info: "Tasuta objektiülevaatus",
          listLabel: "Teenused",
          list: ["Katused", "Fassaadid", "Siseviimistlus"],
        },
        general: {
          label: "Muu",
          sample: "Saar & Partnerid",
          tagline: "Selge ja usaldusväärne teenus, mis säästab teie aega.",
          nav: ["Teenused", "Meist", "Kontakt"],
          cta: "Võta ühendust",
          info: "Tallinn ja Tartu",
          listLabel: "Miks valida meid",
          list: ["15 aastat kogemust", "200+ rahulolevat klienti", "Vastame 24 tunni jooksul"],
        },
      } satisfies Record<DemoTypeKey, unknown>,
    },
  },
  services: {
    title: "Teenused",
    items: [
      {
        key: "new",
        title: "Uus koduleht",
        body: "Ettevõtetele, kellel kodulehte veel ei ole või kes on seni tegutsenud ainult sotsiaalmeedias. Leht ütleb lühidalt, mida pakute ja kuidas teiega ühendust võtta.",
      },
      {
        key: "redesign",
        title: "Olemasoleva lehe uuendus",
        body: "Kui praegune leht on aeglane, telefonis ebamugav või ajale jalgu jäänud, teeme sellest uue. Hea sisu jääb alles, ülejäänu ehitame uuesti.",
      },
      {
        key: "care",
        title: "Igakuine hooldus",
        body: "Majutus, tarkvarauuendused, varukoopiad ja väiksemad sisumuudatused ühe kuutasu eest.",
      },
      {
        key: "google",
        title: "Nähtavus Google'is",
        body: "Loome või korrastame Google'i ettevõtteprofiili, et teid leitaks ka kaardilt, ning teeme otsingumootori põhiseadistused.",
      },
    ],
  },
  offer: {
    titleA: "Eelvaade enne otsust.",
    titleB: "Maksate alles siis, kui leht sobib.",
    body: "Te ei pea tellima pelgalt kavandi või lubaduse põhjal. Teeme teie uue kodulehe valmis ja saadame teile eelvaate. Kui tulemus ootustele ei vasta, ei kaasne sellega mingeid kohustusi.",
    draft: "Kavand",
    done: "Valmis",
    facts: ["Ettemaksuta", "Eelvaade on päris, toimiv leht", "Otsustate pärast eelvaadet"],
  },
  process: {
    title: "Töö käik",
    steps: [
      {
        title: "Tasuta konsultatsioon",
        body: "Lühike vestlus telefonis või kohtumisel. Selgitame välja teie ettevõtte vajadused ja sihtrühma.",
      },
      {
        title: "Eelvaate valmimine",
        body: "Teeme uuest kodulehest toimiva eelvaate. Saadame teile lingi, et saaksite lehte vaadata ka telefonis.",
      },
      {
        title: "Tagasiside",
        body: "Arutame eelvaate koos läbi ja teeme vajalikud muudatused.",
      },
      {
        title: "Avaldamine",
        body: "Ühendame domeeni, seadistame Google'i teenused ja anname teile üle ligipääsud. Arve esitame alles pärast avaldamist.",
      },
    ],
  },
  why: {
    title: "Miks Lehesepp",
    fast: {
      title: "Kiire laadimine",
      body: "Leht avaneb kiiresti ka aeglase mobiilsideühenduse korral. Kiirus mõjutab nii külastaja kogemust kui ka nähtavust Google'is.",
      measured: "See leht avanes teie seadmes",
      unit: "sekundiga",
      measuring: "mõõdame…",
    },
    mobile: {
      title: "Kujundatud telefonile",
      body: "Enamik külastajaid tuleb lehele telefonist. Seepärast kujundame iga lehe kõigepealt väikesele ekraanile.",
    },
    person: {
      title: "Otsekontakt",
      body: "Kogu projekti vältel on teil üks kontaktisik, kes tunneb teie projekti algusest lõpuni.",
      call: "Helista",
      role: "Lehesepa asutaja",
      reply: "Vastame 24 tunni jooksul",
      email: "Kirjuta",
      whatsapp: "WhatsApp",
    },
    overhead: {
      title: "Ilma agentuuri lisakuludeta",
      body: "Teie raha läheb kodulehe tegemisele, mitte projektijuhtimisele ega kontorirendile.",
      agencyLabel: "Agentuur",
      agency: ["Projektijuht", "Kontohaldur", "Disainer", "Arendaja"],
      meLabel: "Lehesepp",
      me: "Üks kontaktisik algusest lõpuni",
    },
  },
  about: {
    title: "Robert, Lehesepa asutaja",
    body: [
      "Lehesepp teeb kodulehti Eesti ettevõtetele. Kasutame samu tehnoloogiaid, millega ehitatakse suurettevõtete veebilehti.",
      "Iga projekti juhib üks inimene algusest lõpuni ja igale päringule vastame 24 tunni jooksul.",
    ],
    facts: ["Vastus 24 tunni jooksul", "Teenindame kogu Eestit", "Kaasaegsed tehnoloogiad"],
    photoAlt: "Robert, Lehesepa asutaja",
  },
  faq: {
    title: "Korduma kippuvad küsimused",
    items: [
      {
        q: "Kui palju koduleht maksab?",
        a: "Iga projekt on erinev, seepärast teeme igale ettevõttele eraldi pakkumise. Pakkumine on tasuta ega kohusta teid millekski. Kuna eelvaade valmib enne tasumist, maksate ainult tulemuse eest, mida olete juba näinud.",
      },
      {
        q: "Kui kiiresti leht valmib?",
        a: "Esimesest vestlusest avaldamiseni kulub kõige rohkem kaks nädalat. Tavaliselt valmib leht kiiremini.",
      },
      {
        q: "Kuidas on lood domeeniga?",
        a: "Kui teil on domeen olemas, kasutame seda. Kui ei ole, aitame selle valida ja registreerida.",
      },
      {
        q: "Kas mind leitakse Google'ist?",
        a: "Leht on tehniliselt üles ehitatud Google'i soovituste järgi: pealkirjad, kirjeldused, kiirus ja asukohaandmed. Lisaks loome või korrastame Google'i ettevõtteprofiili, et teie ettevõte oleks leitav ka kaardilt. Kohta otsingutulemuste tipus ei saa keegi garanteerida, kuid hea alus on olemas.",
      },
      {
        q: "Mis saab pärast avaldamist?",
        a: "Võite lehte ise hallata või valida igakuise hoolduse, mis hõlmab majutust, uuendusi, varukoopiaid ja väiksemaid muudatusi.",
      },
    ],
  },
  contact: {
    title: "Küsi pakkumist",
    sub: "Kirjeldage lühidalt oma ettevõtet ja vajadusi. Pakkumine on tasuta ega kohusta teid millekski.",
    reply: "Vastame 24 tunni jooksul",
    direct: "Otsekontakt",
    email: "E-post",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    form: {
      businessName: "Ettevõtte nimi",
      contactName: "Teie nimi",
      email: "E-post",
      phone: "Telefon",
      businessType: "Tegevusala",
      businessTypePlaceholder: "Valige tegevusala",
      businessTypes: ["Toitlustus", "Ilu ja tervis", "Remont ja ehitus", "Autod", "Kaubandus", "Teenused", "Muu"],
      currentSite: "Praegune koduleht",
      optional: "valikuline",
      currentSitePlaceholder: "www.minufirma.ee",
      needs: "Mida vajate?",
      needsOptions: ["Uus koduleht", "Olemasoleva lehe uuendus", "Igakuine hooldus", "Nähtavus Google'is"],
      message: "Sõnum",
      messagePlaceholder: "Kirjeldage lühidalt, mida soovite saavutada.",
      submit: "Saada päring",
      sending: "Saatmine…",
      consentA: "Teie andmeid kasutame ainult pakkumise koostamiseks.",
      consentLink: "Privaatsuspoliitika",
      errors: {
        required: "See väli on kohustuslik.",
        email: "Kontrollige e-posti aadressi.",
        needs: "Valige vähemalt üks.",
        submit: "Päringu saatmine ebaõnnestus. Proovige uuesti või kirjutage meile otse e-postile.",
      },
      success: {
        title: "Aitäh! Teie päring jõudis meieni.",
        body: "Vastame 24 tunni jooksul. Kiire küsimuse korral helistage.",
        again: "Saada uus päring",
      },
    },
  },
  footer: {
    tagline: "Kodulehed Eesti ettevõtetele.",
    industries: "Valdkonnad",
    privacy: "Privaatsuspoliitika",
    rights: "Kõik õigused kaitstud.",
    contact: "Kontakt",
    language: "Keel",
    cookies: "Küpsiste seaded",
  },
  consent: {
    title: "Küpsised",
    body: "Kasutame Google Adsi küpsiseid, et mõõta, kas reklaam toob päringuid. Ilma teie nõusolekuta neid ei laadita.",
    accept: "Nõustun",
    reject: "Keeldun",
    privacy: "Privaatsuspoliitika",
  },
  privacy: {
    title: "Privaatsuspoliitika",
    updated: "Viimati uuendatud: 13. oktoober 2026",
    back: "Tagasi avalehele",
    sections: [
      {
        h: "Vastutav töötleja",
        p: [
          "Isikuandmete vastutav töötleja on Robert Kuura ({name}). Andmekaitsega seotud küsimustes kirjutage aadressile {email}.",
        ],
      },
      {
        h: "Kogutavad andmed",
        p: [
          "Pakkumise vormi täitmisel saame ettevõtte nime, teie nime, e-posti aadressi, telefoninumbri, tegevusala, praeguse kodulehe aadressi ja sõnumi. Kui kirjutate või helistate meile otse, saame need andmed, mida ise jagate.",
          "Külastuste statistikat kogume teenusega Umami, mis ei kasuta küpsiseid ega salvesta IP-aadresse. Statistika näitab ainult koondandmeid, näiteks mitu korda lehte vaadati ja kust külastajad tulid, ning sellest ei saa tuvastada üksikut inimest.",
          "Kui annate nõusoleku, kasutab leht Google Adsi küpsiseid, et mõõta, kas reklaamilt tulnud külastaja saatis päringu. Ilma nõusolekuta neid küpsiseid ei laadita. Nõusoleku saate igal ajal tagasi võtta lehe jaluses oleva lingiga „Küpsiste seaded“.",
        ],
      },
      {
        h: "Andmete kasutamise eesmärk",
        p: [
          "Andmeid kasutame ainult päringule vastamiseks, pakkumise koostamiseks ja koostöö korral lepingu täitmiseks. Õiguslik alus on lepingueelsed läbirääkimised ja leping (IKÜM art 6 lg 1 p b).",
          "Reklaami mõõtmise õiguslik alus on teie nõusolek (IKÜM art 6 lg 1 p a).",
          "Külastuste statistika õiguslik alus on meie õigustatud huvi teada, kuidas lehte kasutatakse (IKÜM art 6 lg 1 p f).",
          "Andmeid ei müüda ega jagata kolmandatele osapooltele turunduse eesmärgil.",
        ],
      },
      {
        h: "Volitatud töötlejad",
        p: [
          "Leht on majutatud GitHub Pages teenuses (GitHub, Inc.), mis salvestab turvalisuse eesmärgil külastajate IP-aadressid. Vormi päringud edastatakse e-posti teenuse Formspree (Formspree, Inc.) kaudu. Külastuste statistikat töötleb Umami Software, Inc. Nõusoleku korral töötleb reklaami mõõtmise andmeid Google Ireland Limited. Teenusepakkujad töötlevad andmeid ainult meie juhiste alusel.",
        ],
      },
      {
        h: "Säilitamise tähtaeg",
        p: [
          "Päringuid säilitame kuni 12 kuud, kui koostööd ei teki. Lepingu sõlmimisel säilitame andmeid seadusega nõutud tähtaja jooksul (näiteks raamatupidamisdokumendid 7 aastat).",
        ],
      },
      {
        h: "Sinu õigused",
        p: [
          "Teil on õigus tutvuda enda kohta käivate andmetega, nõuda nende parandamist või kustutamist ning piirata nende töötlemist. Selleks kirjutage aadressile {email}. Kui leiate, et teie õigusi on rikutud, võite pöörduda Andmekaitse Inspektsiooni poole (www.aki.ee).",
        ],
      },
    ],
  },
  preview: {
    greeting: "Tere, {business}!",
    intro: "Tegime teie ettevõttele uue kodulehe eelvaate. Seda saab vaadata ka telefonis.",
    open: "Ava eelvaade",
    frameTitle: "{business} kodulehe eelvaade",
    pay: "Maksate alles siis, kui leht sobib.",
    next: "Kas eelvaade vastab ootustele?",
    nextBody: "Helistage või kirjutage meile. Teeme vajalikud muudatused ja avaldame lehe.",
    call: "Helista",
    write: "Kirjuta",
    from: "Robert, Lehesepp",
  },
  notFound: {
    title: "Lehte ei leitud",
    body: "Link võib olla vigane või leht on teisaldatud.",
    back: "Tagasi avalehele",
  },
};

export type Dictionary = typeof et;

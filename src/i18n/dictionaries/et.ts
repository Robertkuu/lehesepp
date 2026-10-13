// Eesti keel on põhikeel. Tekstid on kirjutatud eesti keeles, mitte tõlgitud.

export type DemoTypeKey = "cafe" | "salon" | "auto" | "build" | "general";

export const et = {
  meta: {
    title: "Lehesepp | Kodulehed Eesti ettevõtetele",
    description:
      "Kodulehed igas valdkonnas tegutsevatele ettevõtetele üle Eesti. Kõigepealt valmib eelvaade, maksad alles siis, kui leht sobib.",
    ogAlt: "Lehesepp: kodulehed Eesti ettevõtetele",
  },
  nav: {
    label: "Põhimenüü",
    home: "Lehesepp avalehele",
    services: "Teenused",
    process: "Töö käik",
    faq: "KKK",
    contact: "Kontakt",
    cta: "Küsi pakkumist",
    skip: "Liigu sisu juurde",
    language: "In English",
    languageShort: "EN",
  },
  hero: {
    titleA: "Kodulehed Eesti ettevõtetele.",
    titleB: "Valmis lehte näed enne, kui maksad.",
    sub: "Teen kodulehti igas valdkonnas, kohvikutest ja salongidest ehitus- ja teenindusettevõteteni. Kõigepealt valmib eelvaade, seejärel otsustad.",
    cta: "Küsi pakkumist",
    secondary: "Töö käik",
    demo: {
      region: "Näidis: kodulehe eelvaade sinu ettevõtte nimega",
      inputLabel: "Sinu ettevõtte nimi",
      inputPlaceholder: "Näiteks Kohvik Mõisa",
      typesLabel: "Tegevusala",
      note: "Näidislehed. Sinu ettevõttele valmistan eelvaate tasuta.",
      draftLabel: "kavand",
      types: {
        cafe: {
          label: "Kohvik",
          sample: "Kohvik Mõisa",
          tagline: "Värske kohv ja kohapeal küpsetatud saiad igal hommikul.",
          nav: ["Menüü", "Meist", "Kontakt"],
          cta: "Broneeri laud",
          info: "Avatud iga päev 8-18",
          listLabel: "Täna vitriinis",
          list: ["Kardemonisai", "Rabarberikook", "Kohupiimapirukas"],
        },
        salon: {
          label: "Juuksur",
          sample: "Salong Liis",
          tagline: "Lõikus, värv ja hooldus rahulikus keskkonnas.",
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
          info: "E-R 8-18",
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
          tagline: "Selge ja usaldusväärne teenus, mis säästab sinu aega.",
          nav: ["Teenused", "Meist", "Kontakt"],
          cta: "Võta ühendust",
          info: "Tallinn ja Tartu",
          listLabel: "Miks meie",
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
        body: "Ettevõttele, kellel kodulehte veel pole või kelle veebiesindus piirdub sotsiaalmeediaga. Leht selgitab lühidalt, mida pakud ja kuidas sinuga ühendust võtta.",
      },
      {
        key: "redesign",
        title: "Olemasoleva lehe uuendus",
        body: "Kui leht on aeglane, telefonis raskesti kasutatav või ajale jalgu jäänud. Säilitan toimiva sisu ja ehitan ülejäänu uuesti.",
      },
      {
        key: "care",
        title: "Igakuine hooldus",
        body: "Majutus, tarkvara uuendused, varukoopiad ja väiksemad sisumuudatused ühe kuutasu eest.",
      },
      {
        key: "google",
        title: "Nähtavus Google'is",
        body: "Google'i ettevõtteprofiili loomine ja korrastamine, kaardil kuvamine ning otsingumootori põhiseadistus.",
      },
    ],
  },
  offer: {
    titleA: "Eelvaade enne otsust.",
    titleB: "Maksad alles siis, kui leht sobib.",
    body: "Sa ei pea tellima kavandi või lubaduse põhjal. Ehitan sinu uue kodulehe valmis ja saadan lingi. Kui tulemus ei vasta ootustele, ei kaasne sellega kohustusi.",
    draft: "Kavand",
    done: "Valmis",
    facts: ["Ettemaksu ei ole", "Eelvaade on toimiv leht", "Otsustad pärast eelvaadet"],
  },
  process: {
    title: "Töö käik",
    steps: [
      {
        title: "Tasuta konsultatsioon",
        body: "Lühike vestlus telefonis või kohtumisel. Selgitame välja ettevõtte vajadused ja sihtrühma.",
      },
      {
        title: "Eelvaate valmimine",
        body: "Ehitan uue kodulehe toimiva eelvaatena. Saad lingi ja saad lehte vaadata ka telefonis.",
      },
      {
        title: "Tagasiside",
        body: "Arutame eelvaate koos läbi ja teen vajalikud muudatused.",
      },
      {
        title: "Avaldamine",
        body: "Ühendan domeeni, seadistan Google'i teenused ja annan üle ligipääsud. Arve esitan pärast avaldamist.",
      },
    ],
  },
  why: {
    title: "Miks Lehesepp",
    fast: {
      title: "Kiire laadimine",
      body: "Leht avaneb kiiresti ka aeglase mobiilsideühenduse korral. Kiirus mõjutab nii külastaja kogemust kui ka nähtavust Google'is.",
      measured: "See leht laadis sinu seadmes",
      unit: "sekundiga",
      measuring: "mõõdan…",
    },
    mobile: {
      title: "Kujundatud telefonile",
      body: "Suurem osa külastajatest kasutab telefoni. Iga leht kujundatakse esmalt väikesele ekraanile.",
    },
    person: {
      title: "Otsekontakt",
      body: "Kogu projekti vältel suhtled ühe inimesega, kes teeb ka töö ise.",
      call: "Helista",
      role: "Lehesepa asutaja",
      reply: "Vastan 24 tunni jooksul",
      email: "Kirjuta",
      whatsapp: "WhatsApp",
    },
    overhead: {
      title: "Ilma agentuuri lisakuludeta",
      body: "Eelarve kulub kodulehe tegemisele, mitte projektijuhtimisele ega kontoripinnale.",
      agencyLabel: "Agentuur",
      agency: ["Projektijuht", "Kontohaldur", "Disainer", "Arendaja"],
      meLabel: "Lehesepp",
      me: "Üks kontaktisik algusest lõpuni",
    },
  },
  about: {
    title: "Robert, Lehesepa asutaja",
    body: [
      "Olen veebiarendaja ja loon kodulehti Eesti ettevõtetele. Kasutan samu tehnoloogiaid, millega ehitatakse suurettevõtete veebilehti.",
      "Projekti viin läbi algusest lõpuni ise ning vastan igale päringule 24 tunni jooksul.",
    ],
    facts: ["Vastus 24 tunni jooksul", "Teenindan kogu Eestit", "Kaasaegsed tehnoloogiad"],
    photoAlt: "Robert, Lehesepa asutaja",
  },
  faq: {
    title: "Korduma kippuvad küsimused",
    items: [
      {
        q: "Kui palju koduleht maksab?",
        a: "Iga projekt on erinev, seetõttu koostan igale ettevõttele eraldi pakkumise. Pakkumine on tasuta ega too kaasa kohustusi. Kuna eelvaade valmib enne tasumist, maksad ainult tulemuse eest, mida oled näinud.",
      },
      {
        // TODO: kinnita ajakava.
        q: "Kui kiiresti leht valmib?",
        a: "Eelvaade valmib tavaliselt ühe kuni kahe nädalaga. Pärast tagasisidet avaldatakse leht üldjuhul nädala jooksul. Täpse ajakava esitan pakkumises.",
      },
      {
        q: "Kuidas on lood domeeni ja majutusega?",
        a: "Olemasoleva domeeni korral kasutame seda. Kui domeeni pole, aitan selle valida ja registreerida. Majutuse korraldan mina ning domeen registreeritakse alati sinu nimele.",
      },
      {
        q: "Kas mind leitakse Google'ist?",
        a: "Lehe tehniline ülesehitus vastab Google'i nõuetele: pealkirjad, kirjeldused, kiirus ja asukohaandmed. Lisaks loon või korrastan Google'i ettevõtteprofiili, et ettevõte oleks leitav ka kaardil. Kohta otsingutulemustes ei saa keegi garanteerida, kuid tugev alus on loodud.",
      },
      {
        q: "Mis saab pärast avaldamist?",
        a: "Võid lehte hallata iseseisvalt või liituda igakuise hooldusega, mis hõlmab majutust, uuendusi, varukoopiaid ja väiksemaid muudatusi.",
      },
    ],
  },
  contact: {
    title: "Küsi pakkumist",
    sub: "Kirjelda lühidalt oma ettevõtet ja vajadusi. Pakkumine on tasuta ega too kaasa kohustusi.",
    reply: "Vastan 24 tunni jooksul",
    direct: "Otsekontakt",
    email: "E-post",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    form: {
      businessName: "Ettevõtte nimi",
      contactName: "Sinu nimi",
      email: "E-post",
      phone: "Telefon",
      businessType: "Tegevusala",
      businessTypePlaceholder: "Vali tegevusala",
      businessTypes: ["Toitlustus", "Ilu ja tervis", "Remont ja ehitus", "Autod", "Kaubandus", "Teenused", "Muu"],
      currentSite: "Praegune koduleht",
      optional: "valikuline",
      currentSitePlaceholder: "www.minufirma.ee",
      needs: "Mida vajad?",
      needsOptions: ["Uus koduleht", "Olemasoleva lehe uuendus", "Igakuine hooldus", "Nähtavus Google'is"],
      message: "Sõnum",
      messagePlaceholder: "Kirjelda lühidalt, mida soovid saavutada.",
      submit: "Saada päring",
      sending: "Saadan…",
      consentA: "Päringu saatmisel kasutan sinu andmeid ainult pakkumise koostamiseks.",
      consentLink: "Privaatsuspoliitika",
      errors: {
        required: "See väli on kohustuslik.",
        email: "Kontrolli e-posti aadressi.",
        needs: "Vali vähemalt üks.",
        submit: "Päringu saatmine ebaõnnestus. Proovi uuesti või kirjuta otse e-posti aadressile.",
      },
      success: {
        title: "Aitäh! Päring on kätte saadud.",
        body: "Vastan 24 tunni jooksul. Kiireloomulise küsimuse korral helista.",
        again: "Saada uus päring",
      },
    },
  },
  footer: {
    tagline: "Kodulehed Eesti ettevõtetele.",
    privacy: "Privaatsuspoliitika",
    rights: "Kõik õigused kaitstud.",
    contact: "Kontakt",
    language: "Keel",
  },
  privacy: {
    title: "Privaatsuspoliitika",
    updated: "Viimati uuendatud: 13. oktoober 2026",
    back: "Tagasi avalehele",
    sections: [
      {
        h: "Vastutav töötleja",
        p: [
          "Isikuandmete vastutav töötleja on {founder} ({name}). Andmekaitsega seotud küsimustes kirjuta aadressile {email}.",
        ],
      },
      {
        h: "Kogutavad andmed",
        p: [
          "Pakkumise vormi täitmisel saan ettevõtte nime, sinu nime, e-posti aadressi, telefoninumbri, tegevusala, praeguse kodulehe aadressi ja sõnumi. Otse kirjutades või helistades saan andmed, mida ise jagad.",
          "Leht ei kasuta jälgimisküpsiseid ega reklaamivõrgustikke.",
        ],
      },
      {
        h: "Andmete kasutamise eesmärk",
        p: [
          "Andmeid kasutan ainult päringule vastamiseks, pakkumise koostamiseks ja koostöö korral lepingu täitmiseks. Õiguslik alus on lepingueelsed läbirääkimised ja leping (IKÜM art 6 lg 1 p b).",
          "Andmeid ei müüda ega jagata kolmandatele osapooltele turunduse eesmärgil.",
        ],
      },
      {
        h: "Volitatud töötlejad",
        p: [
          "Leht on majutatud Vercelis. Vormi päringud edastatakse e-posti teenuse kaudu (TODO: Resend või Formspree). Teenusepakkujad töötlevad andmeid ainult minu juhiste alusel.",
        ],
      },
      {
        h: "Säilitamise tähtaeg",
        p: [
          "Päringuid säilitan kuni 12 kuud, kui koostööd ei teki. Lepingu korral säilitan andmeid seadusega nõutud tähtaja jooksul (näiteks raamatupidamisdokumendid 7 aastat).",
        ],
      },
      {
        h: "Sinu õigused",
        p: [
          "Sul on õigus tutvuda enda kohta käivate andmetega, nõuda nende parandamist või kustutamist ning piirata nende töötlemist. Kirjuta aadressile {email}. Kui leiad, et sinu õigusi on rikutud, võid pöörduda Andmekaitse Inspektsiooni poole (www.aki.ee).",
        ],
      },
    ],
  },
  preview: {
    greeting: "Tere, {business}!",
    intro: "Valmistasin sinu ettevõttele uue kodulehe eelvaate. Seda saab vaadata ka telefonis.",
    open: "Ava eelvaade",
    frameTitle: "{business} kodulehe eelvaade",
    pay: "Maksad alles siis, kui leht sobib.",
    next: "Kas eelvaade vastab ootustele?",
    nextBody: "Helista või kirjuta. Teen vajalikud muudatused ja avaldame lehe.",
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

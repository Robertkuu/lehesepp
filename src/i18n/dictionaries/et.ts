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
    process: "Kuidas see käib",
    pricing: "Hinnad",
    samples: "Näidised",
    faq: "KKK",
    contact: "Kontakt",
    cta: "Küsi pakkumist",
    skip: "Mine sisu juurde",
    language: "In English",
    languageShort: "EN",
  },
  hero: {
    title: "Koduleht Teie ettevõttele",
    from: "alates",
    sub: "Teeme kodulehti igas valdkonnas tegutsevatele ettevõtetele, nii väikestele kui ka suurematele. Kõigepealt näete eelvaadet, alles siis otsustate.",
    cta: "Vaata hindu",
    secondary: "Vaata näidiseid",
    points: ["Valmis 1–2 nädalaga", "Maksate alles siis, kui leht sobib"],
    demo: {
      region: "Proovige: Teie ettevõtte kodulehe näidis",
      intro: "Sisestage oma ettevõtte nimi ja vaadake, kuidas Teie koduleht võiks välja näha",
      inputLabel: "Nimi",
      inputPlaceholder: "Näiteks Kohvik Mõisa",
      typesLabel: "Valdkond",
      note: "See on näidis. Teie ettevõttele teeme päris eelvaate tasuta.",
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
  process: {
    title: "Kuidas see käib?",
    time: "Valmis 1–2 nädalaga",
    steps: [
      {
        title: "Räägime Teie soovidest",
        body: "Lühike vestlus telefonis või kohtumisel. Te räägite, mida Teie ettevõte teeb ja mida kodulehelt ootate.",
      },
      {
        title: "Teeme Teile valmis kodulehe",
        body: "Kirjutame tekstid, valime fotod ja teeme kodulehe valmis. Saadame Teile lingi, et saaksite seda vaadata ka telefonis.",
      },
      {
        title: "Te kinnitate ja koduleht läheb avalikuks",
        body: "Kui kõik sobib, paneme kodulehe internetti üles. Arve saate alles siis.",
      },
    ],
  },
  pricing: {
    title: "Hinnad",
    sub: "Kaks paketti. Kõik vajalik on hinnas sees.",
    free: "Pakkumine on tasuta.",
    payLater: "Maksate alles siis, kui leht sobib.",
  },
  samples: {
    title: "Näidised",
    sub: "Nii võiks Teie koduleht välja näha. Need on näidised, mitte päris ettevõtete lehed.",
    badge: "Näidis",
  },
  faq: {
    title: "Korduma kippuvad küsimused",
    items: [
      {
        q: "Kui kaua see aega võtab?",
        a: "Tavaliselt 1–2 nädalat. Aeg hakkab jooksma esimesest vestlusest ja lõpeb, kui koduleht on internetis kõigile näha.",
      },
      {
        q: "Mida tuleb ise teha?",
        a: "Väga vähe. Rääkige meile oma ettevõttest ja saatke logo või fotod, kui need Teil on. Tekstid kirjutame ja puuduvad fotod leiame ise. Lõpuks vaatate valmis lehe üle ja ütlete, kas see sobib.",
      },
      {
        q: "Kas teksti saab ise muuta?",
        a: "Jah. Kõige lihtsam on saata meile kiri või helistada, siis teeme muudatuse Teie eest. Kui soovite tekste ise muuta, öelge seda kohe alguses. Siis teeme lehe nii, et saate seda ise teha.",
      },
      {
        q: "Mis juhtub pärast valmimist?",
        a: "Koduleht on Teie oma. Võite selle jätta nii, nagu see on, või valida hoolduse. Hoolduse korral hoolitseme, et leht töötaks, ja teeme väiksemad muudatused Teie eest.",
      },
      {
        q: "Mis on domeen ja hosting?",
        a: "Domeen on Teie kodulehe aadress, näiteks kohvikmoisa.ee. Hosting on koht, kus koduleht internetis asub, et seda saaks igal ajal avada. Mõlema eest makstakse väike aastatasu. Aitame need valida ja seadistame kõik Teie eest.",
      },
    ],
  },
  contact: {
    title: "Küsi pakkumist",
    sub: "Kirjutage paar rida oma ettevõttest. Pakkumine on tasuta ega kohusta Teid millekski.",
    reply: "Vastame 24 tunni jooksul",
    direct: "Või võtke otse ühendust",
    email: "E-post",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    form: {
      name: "Teie nimi",
      contact: "Telefon või e-post",
      contactHint: "Võtame Teiega ühendust selle kaudu.",
      message: "Mida vajate?",
      messagePlaceholder: "Näiteks: kohvik Tartus, vajame kodulehte, kus on menüü ja lahtiolekuajad.",
      submit: "Küsi tasuta pakkumist",
      sending: "Saatmine…",
      consentA: "Teie andmeid kasutame ainult pakkumise koostamiseks.",
      consentLink: "Privaatsuspoliitika",
      errors: {
        required: "See väli on kohustuslik.",
        contact: "Kirjutage telefoninumber või e-posti aadress.",
        submit: "Päringu saatmine ebaõnnestus. Proovige uuesti või helistage meile.",
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
    description: "Milliseid andmeid Lehesepp pakkumise vormi ja külastuste statistika kaudu kogub, milleks neid kasutab ja kui kaua säilitab.",
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
          "Pakkumise vormi täitmisel saame teie nime, telefoninumbri või e-posti aadressi ja sõnumi. Kui kirjutate või helistate meile otse, saame need andmed, mida ise jagate.",
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

// Eesti keel on põhikeel. Tekstid on kirjutatud eesti keeles, mitte tõlgitud.

import { formatPrice, fromPrice } from "@/content/pricing";

const from = formatPrice(fromPrice);


export const et = {
  meta: {
    title: "Kodulehe tegemine ettevõtetele | Lehesepp",
    description:
      `Teeme kodulehti Eesti väikeettevõtetele alates ${from}. Tekstid, pildid ja kujundus on hinnas ning leht on valmis 1–2 nädalaga. Maksate alles siis, kui leht sobib.`,
    ogAlt: "Lehesepp: kodulehed Eesti ettevõtetele",
    serviceType: "Kodulehe tegemine",
  },
  nav: {
    label: "Põhimenüü",
    home: "Lehesepa avalehele",
    process: "Kuidas see käib",
    pricing: "Hinnad",
    samples: "Tehtud tööd",
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
    sub: "Teie räägite, millega ettevõte tegeleb. Meie kirjutame tekstid, otsime pildid ja paneme lehe kokku. Valmis lehe saate enne üle vaadata ja arve tuleb alles siis, kui kõik sobib.",
    cta: "Küsi pakkumist",
    secondary: "Vaata hindu",
    points: ["Valmis 1–2 nädalaga", "Maksate siis, kui leht sobib"],
  },
  process: {
    title: "Kuidas see käib?",
    time: "Valmis 1–2 nädalaga",
    steps: [
      {
        title: "Räägime läbi, mida vajate",
        body: "Helistame või saame kokku. Räägite, millega Teie ettevõte tegeleb ja mida kodulehelt ootate.",
      },
      {
        title: "Teeme lehe valmis",
        body: "Kirjutame tekstid, valime pildid ja saadame Teile lingi. Saate lehte rahulikult arvutis ja telefonis vaadata.",
      },
      {
        title: "Sobib? Paneme üles",
        body: "Kui olete rahul, läheb leht internetti. Arve saadame alles siis.",
      },
    ],
  },
  pricing: {
    title: "Hinnad",
    sub: "Kaks paketti. Tekstid ja pildid on alati hinnas.",
    free: "Pakkumine on tasuta.",
    payLater: "Maksate alles siis, kui leht sobib.",
  },
  samples: {
    title: "Tehtud tööd",
    work: [
      {
        name: "Silver Rehvid",
        url: "https://silverrehvid.ee",
        img: "/work/silverrehvid.jpg",
        text: "Rehvitöökoda Viimsis. Avalehelt näeb kohe, palju rehvivahetus maksab, ja töökotta saab helistada ühe vajutusega. Leht on eesti ja inglise keeles.",
      },
      {
        name: "Plushy",
        url: "https://plushy.ee",
        img: "/work/plushy.jpg",
        text: "Gua Sha kivide ja peapaelte e-pood. Andsime poele uue näo ja tegime ostmise lihtsamaks: toote saab korvi otse avalehelt ja telefonis on ostunupp kogu aeg näha.",
      },
    ],
  },
  faq: {
    title: "Korduma kippuvad küsimused",
    items: [
      {
        q: "Kui palju koduleht maksab?",
        a: `Põhipakett maksab alates ${from}. Pro hind oleneb sellest, mida vaja on, näiteks broneerimine või mitu keelt. Pakkumise teeme tasuta.`,
      },
      {
        q: "Kas pean ette maksma?",
        a: "Ei. Arve saate alles siis, kui leht on valmis ja Teile sobib.",
      },
      {
        q: "Kui kaua see võtab?",
        a: "Tavaliselt 1–2 nädalat.",
      },
      {
        q: "Mida pean ise tegema?",
        a: "Rääkige oma ettevõttest ja saatke logo või pildid, kui need on olemas. Tekstid kirjutame ise.",
      },
      {
        q: "Kas hiljem saab veebilehte muuta?",
        a: "Jah, ja seda saate teha ise. Lehel on lihtne halduskeskkond, kus saate tekste, hindu ja pilte muuta ilma programmeerimiseta. Kui ei soovi ise teha, helistage ja teeme selle ära.",
      },
      {
        // TODO: confirm domain + hosting are billed separately and add the typical yearly cost.
        q: "Mis on domeen ja hosting?",
        a: "Domeen on lehe aadress (näiteks teiefirma.ee), hosting on koht, kus leht internetis asub. Mõlema eest on väike aastatasu, mis tuleb eraldi. Seadistame need Teie eest ära.",
      },
    ],
  },
  contact: {
    title: "Küsi pakkumist",
    sub: "Kirjutage paar rida oma ettevõttest ja sellest, mida vajate. Pakkumine on tasuta ega kohusta Teid millekski.",
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
      messagePlaceholder: "Näiteks: kohvik Tartus, tahame lehte, kus on menüü ja lahtiolekuajad.",
      submit: "Küsi tasuta pakkumist",
      sending: "Saatmine…",
      consentA: "Teie andmeid kasutame ainult pakkumise tegemiseks.",
      consentLink: "Privaatsuspoliitika",
      errors: {
        required: "See väli on kohustuslik.",
        contact: "Kirjutage telefoninumber või e-posti aadress.",
        submit: "Saatmine ebaõnnestus. Proovige uuesti või helistage meile.",
      },
      success: {
        title: "Aitäh! Päring jõudis meieni.",
        body: "Vastame 24 tunni jooksul. Kui on kiire, helistage.",
        again: "Saada uus päring",
      },
    },
  },
  footer: {
    tagline: "Kodulehed Eesti väikeettevõtetele.",
    privacy: "Privaatsuspoliitika",
    rights: "Kõik õigused kaitstud.",
    contact: "Kontakt",
    language: "Keel",
    cookies: "Küpsiste seaded",
  },
  consent: {
    title: "Küpsised",
    body: "Kasutame Google Adsi küpsiseid, et näha, kas reklaam toob päringuid. Ilma Teie nõusolekuta neid ei laadita.",
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
        h: "Teie õigused",
        p: [
          "Teil on õigus tutvuda enda kohta käivate andmetega, nõuda nende parandamist või kustutamist ning piirata nende töötlemist. Selleks kirjutage aadressile {email}. Kui leiate, et teie õigusi on rikutud, võite pöörduda Andmekaitse Inspektsiooni poole (www.aki.ee).",
        ],
      },
    ],
  },
  preview: {
    greeting: "Tere, {business}!",
    intro: "Tegime Teie ettevõttele uue kodulehe eelvaate. Vaadake seda julgelt ka telefonis.",
    open: "Ava eelvaade",
    frameTitle: "{business} kodulehe eelvaade",
    pay: "Maksate alles siis, kui leht sobib.",
    next: "Kuidas tundub?",
    nextBody: "Helistage või kirjutage. Teeme vajalikud muudatused ja paneme lehe üles.",
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

// Estonian landing pages per industry, at lehesepp.ee/<slug>. Written for search: each page
// targets "kodulehe tegemine <valdkonnale>". Estonian only; the English site has no counterpart.
//
// To add one, copy an entry. `demo` picks the sample site shown on the page.

import type { DemoTypeKey } from "@/i18n/dictionaries/et";

export type Industry = {
  slug: string;
  demo: DemoTypeKey;
  /** Short name for link lists. */
  label: string;
  /** <title> before " | Lehesepp". */
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  features: { title: string; body: string }[];
};

export const industries: Industry[] = [
  {
    slug: "kodulehe-tegemine-kohvikule",
    demo: "cafe",
    label: "Kohvikud ja restoranid",
    metaTitle: "Kodulehe tegemine kohvikule ja restoranile",
    metaDescription:
      "Kodulehe tegemine kohvikule ja restoranile: menüü, lahtiolekuajad, lauabroneering ja asukoht kaardil. Valmis lehte näed enne, kui maksad.",
    title: "Koduleht kohvikule ja restoranile",
    lead: "Külastaja tahab teada kolme asja: mida pakute, millal olete avatud ja kuidas lauda broneerida. Teen kodulehe, kus need on kohe näha ja töötavad hästi telefonis.",
    features: [
      {
        title: "Menüü, mida saab telefonis lugeda",
        body: "Menüü on lehel tekstina, mitte PDF-i või pildina. Seda on telefonis mugav lugeda ja Google saab selle sisu lugeda.",
      },
      {
        title: "Lahtiolekuajad ja asukoht",
        body: "Lahtiolekuajad, aadress ja kaart on kohe nähtavad, koos nupuga, mis avab telefonis teejuhised.",
      },
      {
        title: "Lauabroneering",
        body: "Broneerimisnupp viib sinu olemasolevasse broneerimissüsteemi või helistab otse. Kui süsteemi pole, lisan lihtsa broneerimispäringu vormi.",
      },
      {
        title: "Fotod, mis tekitavad isu",
        body: "Toidu- ja interjöörifotod laaditakse kiiresti ka aeglase mobiilsideühenduse korral, nii et leht ei jää pilte ootama.",
      },
    ],
  },
  {
    slug: "kodulehe-tegemine-ilusalongile",
    demo: "salon",
    label: "Ilusalongid ja juuksurid",
    metaTitle: "Kodulehe tegemine ilusalongile ja juuksurile",
    metaDescription:
      "Kodulehe tegemine ilusalongile, juuksurile ja küünesalongile: teenused, hinnakiri, aja broneerimine ja tööde galerii. Valmis lehte näed enne, kui maksad.",
    title: "Koduleht ilusalongile ja juuksurile",
    lead: "Uus klient tahab näha teenuseid, hindu ja seda, kuidas aega broneerida. Teen kodulehe, kus aja broneerimiseks piisab ühest puudutusest.",
    features: [
      {
        title: "Teenused ja hinnakiri",
        body: "Teenused on rühmitatud koos kestuse ja hinnaga, et klient teaks enne broneerimist, mida oodata.",
      },
      {
        title: "Aja broneerimine",
        body: "Broneerimisnupp on alati käepärast ja viib sinu kasutatavasse broneerimissüsteemi, näiteks Freshasse või Booksysse.",
      },
      {
        title: "Tööde galerii",
        body: "Tööde näited ning enne ja pärast pildid näitavad sinu käekirja paremini kui ükski tekst.",
      },
      {
        title: "Meistrite tutvustus",
        body: "Iga meistri lühike tutvustus aitab kliendil valida endale sobiva inimese.",
      },
    ],
  },
  {
    slug: "kodulehe-tegemine-autoremondile",
    demo: "auto",
    label: "Autoremont ja rehvitööd",
    metaTitle: "Kodulehe tegemine autoremondile ja rehvitöökojale",
    metaDescription:
      "Kodulehe tegemine autoremondile ja rehvitöökojale: teenused, hooldusaja broneerimine, lahtiolekuajad ja asukoht. Valmis lehte näed enne, kui maksad.",
    title: "Koduleht autoremondile ja rehvitöökojale",
    lead: "Lähimat töökoda otsitakse telefonist. Teen kodulehe, kus teenused ja lahtiolekuajad on kohe näha ning helistada või aega broneerida saab ühe puudutusega.",
    features: [
      {
        title: "Teenuste ülevaade",
        body: "Hooldus, remont, diagnostika ja rehvitööd on eraldi välja toodud, et klient leiaks oma murele lahenduse kiiresti.",
      },
      {
        title: "Hooldusaja broneerimine",
        body: "Klient saab saata broneerimispäringu koos automargi ja soovitud ajaga või helistada otse lehelt.",
      },
      {
        title: "Hooajalised teated",
        body: "Rehvivahetuse hooajal saab lehe ülaossa lisada teate koos broneerimislingiga.",
      },
      {
        title: "Asukoht ja lahtiolekuajad",
        body: "Aadress, kaart ja lahtiolekuajad on kohe nähtavad, koos nupuga, mis avab telefonis teejuhised.",
      },
    ],
  },
  {
    slug: "kodulehe-tegemine-ehitusettevottele",
    demo: "build",
    label: "Ehitus ja remont",
    metaTitle: "Kodulehe tegemine ehitusettevõttele",
    metaDescription:
      "Kodulehe tegemine ehitus- ja remondiettevõttele: tehtud tööde galerii, teenused, hinnapäringu vorm ja kontaktid. Valmis lehte näed enne, kui maksad.",
    title: "Koduleht ehitusettevõttele",
    lead: "Ehitustööd tellitakse usalduse põhjal. Teen kodulehe, mis näitab tehtud töid, selgitab teenuseid ja laseb kliendil oma projekti lihtsalt kirjeldada.",
    features: [
      {
        title: "Tehtud tööde galerii",
        body: "Objektid koos fotode ja lühikirjeldusega näitavad, mida oskad, ning annavad kliendile julguse ühendust võtta.",
      },
      {
        title: "Teenused selgelt lahti kirjutatud",
        body: "Katused, fassaadid, siseviimistlus ja muud tööd on eraldi kirjas, et klient näeks kohe, kas teete just seda, mida ta vajab.",
      },
      {
        title: "Hinnapäringu vorm",
        body: "Klient kirjeldab oma projekti, mõõte ja asukohta. Sina saad päringu, millele on lihtne vastata.",
      },
      {
        title: "Tööpiirkond",
        body: "Lehel on selgelt kirjas, kus töötate, et päringud tuleksid sealt, kus sul on mugav töid teha.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const industryPath = (slug: string) => `/${slug}`;

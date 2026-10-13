import type { Locale } from "./config";
import { et } from "./dictionaries/et";
import { en } from "./dictionaries/en";

export type { Dictionary } from "./dictionaries/et";

const dictionaries = { et, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

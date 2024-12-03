
import type { ValidLocale } from '../settings';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  bg: () => import('./bg.json').then((module) => module.default),
  es: () => import('./fr.json').then((module) => module.default),
};


export const getDictionary = async (locale: ValidLocale) => {
    return dictionaries[locale]?.() ?? dictionaries.en();   
  };
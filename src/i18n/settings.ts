export const defaultLocale = 'en';
export const locales = ['en', 'bg', 'fr'] as const;
export type ValidLocale = (typeof locales)[number];

// Key-value pairs for language names in different languages
export const languageNames: Record<ValidLocale, string> = {
  en: 'English',
  bg: 'Български',
  fr: 'France',
};
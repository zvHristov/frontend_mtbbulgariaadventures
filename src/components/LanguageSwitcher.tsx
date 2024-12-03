'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { locales, languageNames, type ValidLocale } from '@/i18n/settings';
import  { setLocale } from '@/common/slices/initSlice';

export function LanguageSwitcher() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = pathname.split('/')[1] as ValidLocale;

  const switchLanguage = (locale: ValidLocale) => {
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    router.push(newPathname);
    setIsOpen(false);
  };
  
  useEffect(() => {
    console.log(currentLocale, 'currentLocale')
    if (currentLocale) {
      dispatch(setLocale(currentLocale)); //
    }
  } , [currentLocale]);
    return (
      <div className="d-flex relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
        >
          <span>{languageNames[currentLocale]}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
  
        {isOpen && (
          <div className=" absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                className={` block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                  currentLocale === locale ? 'bg-gray-50' : ''
                }`}
              >
                {languageNames[locale]}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
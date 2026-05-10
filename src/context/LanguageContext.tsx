import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { strings, type Lang, type Strings } from '../i18n/strings';

interface LanguageContextType {
  lang: Lang;
  t: Strings;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang');
    return stored === 'ja' ? 'ja' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'ja' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t: strings[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

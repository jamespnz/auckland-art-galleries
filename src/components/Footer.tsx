import { useLang } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLang();
  const currentDate = new Date().toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="border-t border-gray-200 mt-16 py-8 px-4 text-center">
      <p className="text-sm text-gray-500 max-w-xl mx-auto">
        {t.footer} {currentDate}. {t.footerVerify}
      </p>
    </footer>
  );
}

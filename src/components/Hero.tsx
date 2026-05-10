import { useLang } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLang();

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-4">
        {t.siteTitle} <span className="text-gray-400">/</span>{' '}
        <span className="text-2xl sm:text-3xl">{t.siteTitleJa}</span>
      </h2>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        {t.heroText}
      </p>
    </section>
  );
}

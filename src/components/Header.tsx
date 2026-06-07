import { useLang } from '../context/LanguageContext';
import type { Category } from '../data/galleries';

interface HeaderProps {
  activeFilter: Category | 'all';
  onFilterChange: (filter: Category | 'all') => void;
}

export function Header({ activeFilter, onFilterChange }: HeaderProps) {
  const { t, toggleLang } = useLang();

  const filters: { key: Category | 'all'; label: string }[] = [
    { key: 'all', label: t.filterAll },
    { key: 'public', label: t.filterPublic },
    { key: 'dealer', label: t.filterDealer },
    { key: 'auction', label: t.filterAuction },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-baseline gap-2 min-w-0">
            <h1 className="text-lg sm:text-xl font-serif font-bold text-charcoal truncate">
              Auckland Art Guide
            </h1>
            <span className="text-sm text-gray-500 hidden sm:inline">オークランド・アートガイド</span>
          </div>
          <button
            onClick={toggleLang}
            className="ml-4 px-3 py-1.5 text-sm font-medium text-teal-700 border border-teal-700 rounded-md hover:bg-teal-700 hover:text-white transition-colors min-h-[44px] flex items-center"
          >
            {t.langToggle}
          </button>
        </div>
        <nav className="flex gap-1 pb-3 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onFilterChange(key)}
              className={`px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap min-h-[44px] transition-colors ${
                activeFilter === key
                  ? 'bg-charcoal text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

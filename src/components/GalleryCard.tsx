import { useLang } from '../context/LanguageContext';
import type { Gallery } from '../data/galleries';

interface GalleryCardProps {
  gallery: Gallery;
  onSelect: (gallery: Gallery) => void;
}

const categoryColors = {
  public: 'bg-blue-100 text-blue-800',
  dealer: 'bg-fuchsia-100 text-fuchsia-800',
  auction: 'bg-amber-100 text-amber-800',
};

export function GalleryCard({ gallery, onSelect }: GalleryCardProps) {
  const { lang, t } = useLang();

  return (
    <article
      className="bg-white rounded-xl shadow-sm card-hover cursor-pointer overflow-hidden border border-gray-100"
      onClick={() => onSelect(gallery)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(gallery); }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={gallery.image}
          alt={gallery.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif font-bold text-lg leading-tight text-charcoal">
            {gallery.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${categoryColors[gallery.category]}`}>
            {t[`category${gallery.category.charAt(0).toUpperCase() + gallery.category.slice(1)}` as keyof typeof t]}
          </span>
          <span className="text-sm text-gray-500">{gallery.suburb}</span>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {gallery.tagline[lang]}
        </p>
        <span className="text-sm font-medium text-teal-700">
          {t.viewDetails} &rarr;
        </span>
      </div>
    </article>
  );
}

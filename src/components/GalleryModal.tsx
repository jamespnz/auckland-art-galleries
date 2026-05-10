import { useEffect, useRef } from 'react';
import { X, MapPin, Phone, Mail, Globe, Clock, Gavel } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import type { Gallery } from '../data/galleries';

interface GalleryModalProps {
  gallery: Gallery;
  onClose: () => void;
}

const categoryColors = {
  public: 'bg-blue-100 text-blue-800',
  dealer: 'bg-fuchsia-100 text-fuchsia-800',
  auction: 'bg-amber-100 text-amber-800',
};

export function GalleryModal({ gallery, onClose }: GalleryModalProps) {
  const { lang, t } = useLang();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gallery.address)}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-8 sm:pt-16 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden my-4 animate-in"
        role="dialog"
        aria-modal="true"
        aria-label={gallery.name}
      >
        <div className="relative">
          <img
            src={gallery.image}
            alt={gallery.name}
            className="w-full aspect-video object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={t.close}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-4">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal leading-tight flex-1">
              {gallery.name}
            </h2>
            <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${categoryColors[gallery.category]}`}>
              {t[`category${gallery.category.charAt(0).toUpperCase() + gallery.category.slice(1)}` as keyof typeof t]}
            </span>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-6">
            {gallery.description[lang]}
          </p>

          <div className="space-y-3 text-sm">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-gray-700 hover:text-teal-700 transition-colors p-2 -ml-2 rounded-lg hover:bg-gray-50 min-h-[44px]"
            >
              <MapPin size={18} className="text-teal-600 mt-0.5 shrink-0" />
              <span>{gallery.address}<br /><span className="text-xs text-teal-600 font-medium">{t.viewOnMap}</span></span>
            </a>

            {gallery.phone && (
              <a
                href={`tel:${gallery.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-gray-700 hover:text-teal-700 transition-colors p-2 -ml-2 rounded-lg hover:bg-gray-50 min-h-[44px]"
              >
                <Phone size={18} className="text-teal-600 shrink-0" />
                <span>{gallery.phone}</span>
              </a>
            )}

            {gallery.email && (
              <a
                href={`mailto:${gallery.email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-teal-700 transition-colors p-2 -ml-2 rounded-lg hover:bg-gray-50 min-h-[44px]"
              >
                <Mail size={18} className="text-teal-600 shrink-0" />
                <span>{gallery.email}</span>
              </a>
            )}

            {gallery.website && (
              <a
                href={gallery.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-teal-700 transition-colors p-2 -ml-2 rounded-lg hover:bg-gray-50 min-h-[44px]"
              >
                <Globe size={18} className="text-teal-600 shrink-0" />
                <span>{gallery.website.replace(/^https?:\/\/(www\.)?/, '')}</span>
              </a>
            )}

            <div className="flex items-center gap-3 text-gray-700 p-2 -ml-2 min-h-[44px]">
              <Clock size={18} className="text-teal-600 shrink-0" />
              <span>{gallery.hours[lang]}</span>
            </div>
          </div>

          {gallery.category === 'auction' && gallery.auctionSchedule && (
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Gavel size={18} className="text-amber-700" />
                <h3 className="font-serif font-bold text-amber-900">{t.auctionSchedule}</h3>
              </div>
              <p className="text-sm text-amber-800 leading-relaxed mb-3">
                {gallery.auctionSchedule[lang]}
              </p>
              {gallery.website && (
                <a
                  href={gallery.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-amber-900 hover:text-amber-700 underline underline-offset-2 min-h-[44px]"
                >
                  {t.viewUpcomingAuctions} &rarr;
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

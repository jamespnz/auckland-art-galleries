import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GalleryCard } from './components/GalleryCard';
import { GalleryModal } from './components/GalleryModal';
import { Footer } from './components/Footer';
import { galleries, type Category, type Gallery } from './data/galleries';

function AppContent() {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null);

  const filtered = filter === 'all'
    ? galleries
    : galleries.filter(g => g.category === filter);

  return (
    <div className="min-h-screen bg-cream">
      <Header activeFilter={filter} onFilterChange={setFilter} />
      <main>
        <Hero />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(gallery => (
              <GalleryCard
                key={gallery.id}
                gallery={gallery}
                onSelect={setSelectedGallery}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      {selectedGallery && (
        <GalleryModal
          gallery={selectedGallery}
          onClose={() => setSelectedGallery(null)}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

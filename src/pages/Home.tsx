import { ArrowRight, Sparkles, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-200/50 rounded-full blur-3xl"></div>
      </div>

      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
          <svg className="absolute top-20 right-10 w-64 h-64 text-neutral-400/60" viewBox="0 0 200 200">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" />
            <rect x="90" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="20" y="90" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="90" y="90" width="60" height="60" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-40 left-10 w-48 h-48 text-neutral-300/60" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="50" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-neutral-900">
                Transformez
                <br />
                <span className="font-normal">votre espace</span>
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-lg">
                Nous créons des intérieurs uniques qui reflètent votre personnalité et
                subliment votre quotidien. Design contemporain, élégance intemporelle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projets"
                  className="inline-flex items-center space-x-2 bg-neutral-900 text-white px-8 py-4 rounded-sm transition-colors group"
                  style={{ '--hover-bg': '#ef8cac' } as any}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ef8cac'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                >
                  <span>Découvrir nos projets</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 border-2 text-neutral-900 px-8 py-4 rounded-sm transition-colors"
                  style={{ borderColor: '#ef8cac' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ef8cac';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = '';
                  }}
                >
                  <span>Nous contacter</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] w-3/4 bg-neutral-200 rounded-sm overflow-hidden">
                <img src="/img1.jpg" alt="Interior Design" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-100 rounded-sm -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-1/4 w-32 h-32 text-neutral-300" viewBox="0 0 100 100">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-neutral-900 mb-4">
              Notre approche
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour créer des espaces exceptionnels qui dépassent vos attentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-6">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Créativité</h3>
              <p className="text-neutral-600 leading-relaxed">
                Des concepts innovants et sur-mesure qui transforment vos espaces en véritables œuvres d'art.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-6">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Excellence</h3>
              <p className="text-neutral-600 leading-relaxed">
                Un savoir-faire reconnu et une attention méticuleuse portée à chaque détail de votre projet.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Collaboration</h3>
              <p className="text-neutral-600 leading-relaxed">
                Un accompagnement personnalisé pour réaliser ensemble l'espace de vos rêves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-neutral-200/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden">
                <img src="/myIMG.jpg" alt="Interior Design" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-8 -left-8 w-48 h-48 border-2 border-neutral-300 rounded-sm -z-10"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-light text-neutral-900">
                Plus de 15 ans d'expertise
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Notre équipe passionnée transforme les espaces depuis 2009. Chaque projet
                est une nouvelle opportunité de créer quelque chose d'unique et d'extraordinaire.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-4xl font-light text-neutral-900 mb-2">200+</div>
                  <div className="text-neutral-600">Projets réalisés</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-neutral-900 mb-2">98%</div>
                  <div className="text-neutral-600">Clients satisfaits</div>
                </div>
              </div>
              <Link
                to="/a-propos"
                className="inline-flex items-center space-x-2 text-neutral-900 hover:text-neutral-700 transition-colors group pt-4"
              >
                <span className="font-medium">En savoir plus</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

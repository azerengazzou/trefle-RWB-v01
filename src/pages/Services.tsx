import { Home, Palette, Ruler, Lightbulb, Package, FileText, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Design Résidentiel',
    description: 'Transformation complète de votre espace de vie selon vos besoins et votre style',
    features: [
      'Étude personnalisée',
      'Plans 3D réalistes',
      'Sélection de matériaux',
      'Suivi de chantier',
    ],
  },
  {
    icon: Palette,
    title: 'Design Commercial',
    description: 'Création d\'espaces professionnels qui reflètent l\'identité de votre marque',
    features: [
      'Concept sur-mesure',
      'Optimisation des flux',
      'Signalétique intégrée',
      'Respect des normes',
    ],
  },
  {
    icon: Ruler,
    title: 'Conseil en Aménagement',
    description: 'Expertise et recommandations pour optimiser votre espace existant',
    features: [
      'Audit de l\'existant',
      'Recommandations ciblées',
      'Plans d\'aménagement',
      'Budget prévisionnel',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Design d\'Éclairage',
    description: 'Conception d\'ambiances lumineuses adaptées à chaque espace',
    features: [
      'Étude d\'éclairage',
      'Solutions innovantes',
      'Économies d\'énergie',
      'Mise en scène',
    ],
  },
  {
    icon: Package,
    title: 'Mobilier Sur-Mesure',
    description: 'Création de pièces uniques parfaitement adaptées à votre espace',
    features: [
      'Design personnalisé',
      'Artisans qualifiés',
      'Matériaux nobles',
      'Finitions soignées',
    ],
  },
  {
    icon: FileText,
    title: 'Gestion de Projet',
    description: 'Coordination complète de votre projet de la conception à la réalisation',
    features: [
      'Planning détaillé',
      'Coordination artisans',
      'Suivi qualité',
      'Livraison clé en main',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Rencontre pour comprendre vos besoins, votre style et vos contraintes budgétaires',
  },
  {
    step: '02',
    title: 'Conception',
    description: 'Élaboration du concept, plans 3D, choix des matériaux et devis détaillé',
  },
  {
    step: '03',
    title: 'Validation',
    description: 'Présentation du projet final et ajustements selon vos retours',
  },
  {
    step: '04',
    title: 'Réalisation',
    description: 'Coordination des travaux, suivi de chantier et respect des délais',
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute top-20 left-10 w-72 h-72 text-neutral-300" viewBox="0 0 200 200">
          <path d="M100 0 L200 100 L100 200 L0 100 Z" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-40 right-10 w-64 h-64 text-neutral-300/60" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="currentColor" />
        </svg>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neutral-200/30 rounded-full blur-3xl"></div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Nos Services
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Une gamme complète de services pour concrétiser tous vos projets d'aménagement intérieur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 group"
                >
                  <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#ef8cac'}}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-medium text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-700">
                        <CheckCircle size={16} className="text-neutral-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-1/4 right-0 w-48 h-48 text-neutral-200" viewBox="0 0 100 100">
            <rect x="10" y="10" width="30" height="30" fill="currentColor" />
            <rect x="45" y="10" width="30" height="30" fill="currentColor" />
            <rect x="10" y="45" width="30" height="30" fill="currentColor" />
            <rect x="45" y="45" width="30" height="30" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-neutral-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée en 4 étapes pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-light mb-4" style={{color: '#ef8cac'}}>
                  {item.step}
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-neutral-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-sm p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Prêt à transformer votre espace ?
              </h2>
              <p className="text-neutral-300 mb-8 leading-relaxed text-lg">
                Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons donner vie à vos idées
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-neutral-900 px-8 py-4 rounded-sm transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ef8cac';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.color = '';
                }}
              >
                <span className="font-medium">Demander un devis</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Award, Heart, Compass, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Chaque projet est une opportunité d\'exprimer notre amour du design et de créer des espaces qui inspirent',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nous visons la perfection dans chaque détail, de la conception à la réalisation finale',
  },
  {
    icon: Compass,
    title: 'Innovation',
    description: 'Nous explorons constamment de nouvelles tendances et technologies pour rester à la pointe',
  },
  {
    icon: Users,
    title: 'Écoute',
    description: 'Votre vision est au cœur de notre processus créatif. Nous construisons ensemble votre projet',
  },
];

const milestones = [
  { year: '2009', event: 'Création de l\'agence' },
  { year: '2012', event: 'Premier prix du design résidentiel' },
  { year: '2015', event: 'Ouverture du showroom parisien' },
  { year: '2018', event: '100ème projet réalisé' },
  { year: '2021', event: 'Expansion internationale' },
  { year: '2024', event: 'Plus de 200 projets d\'exception' },
];

export default function About() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>
        <svg className="absolute bottom-40 left-10 w-72 h-72 text-neutral-300" viewBox="0 0 200 200">
          <rect x="30" y="30" width="50" height="50" fill="currentColor" />
          <rect x="90" y="30" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="30" y="90" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="90" y="90" width="50" height="50" fill="currentColor" />
        </svg>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              À Propos
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Une équipe passionnée dédiée à créer des espaces qui transforment votre quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <div className="relative">
              <div className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neutral-300 via-amber-100/40 to-neutral-400">
                  <img src="/myIMG2.jpg" alt="Interior Design" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-sm -z-10"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-light text-neutral-900">
                Salma Hlila - Fondatrice de Tréfle
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Salma Hlila est l’architecte d'intérieur passionnée derrière Tréfle. Diplômée d'une école d'architecture d'intérieur renommée, elle cumule plus de 4 ans d'expérience, alliant créativité et solutions durables.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Engagée dans une approche collaborative, Salma crée des espaces uniques qui reflètent les aspirations de ses clients tout en intégrant des pratiques respectueuses de l'environnement. Son sens du détail et sa vision artistique lui permettent de s'adapter à divers styles.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                En plus de son travail, elle partage ses connaissances lors d'ateliers et de conférences, inspirant la nouvelle génération d'architectes d'intérieur. Avec Tréfle, Salma continue de redéfinir l'architecture contemporaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white mb-10">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 right-1/3 w-64 h-64 text-neutral-200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="10" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-neutral-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos créations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#ef8cac' }}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*<section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neutral-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-neutral-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Des experts passionnés au service de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="aspect-square bg-neutral-200 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                    <Users size={48} className="text-neutral-500/30" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3">{member.role}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-1/4 left-0 w-96 h-96 text-white/5" viewBox="0 0 200 200">
            <path d="M100 0 L200 100 L100 200 L0 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">
              Notre Parcours
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              15 années de passion, d'innovation et de créativité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-3xl font-light text-white mb-3 group-hover:text-amber-100 transition-colors">
                  {milestone.year}
                </div>
                <div className="text-sm text-neutral-400 leading-relaxed">
                  {milestone.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6">
            Rejoignez l'aventure
          </h2>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            Prêt à transformer votre espace ? Contactez-nous pour discuter de votre projet
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-neutral-900 text-white px-8 py-4 rounded-sm transition-colors"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ef8cac'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
          >
            <span>Commençons ensemble</span>
          </a>
        </div>
      </section>
    </div>
  );
}

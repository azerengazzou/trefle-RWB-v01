import { useState } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, categories } from '../projects';
import { projectDescriptions } from '../projectDescriptions';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'Tous'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute top-40 right-0 w-96 h-96 text-neutral-300" viewBox="0 0 200 200">
          <rect x="40" y="40" width="40" height="40" fill="currentColor" />
          <rect x="90" y="40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="40" y="90" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="90" y="90" width="40" height="40" fill="currentColor" />
        </svg>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Nos Projets
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos réalisations et laissez-vous inspirer par notre passion pour le design d'intérieur
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white p-3 rounded-full">
                        <ExternalLink size={24} className="text-neutral-900" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-neutral-900">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>{project.year}</span>
                    <span>{project.surface}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500">Aucun projet trouvé dans cette catégorie</p>
            </div>
          )}
        </div>
      </section>

      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 right-0 w-64 h-64 text-white/15" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-neutral-300 mb-8 leading-relaxed">
            Discutons ensemble de vos idées et créons l'espace de vos rêves
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
            <span>Démarrer un projet</span>
          </a>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={selectedProject.title} 
                className="w-full h-80 object-cover cursor-pointer" 
                onClick={() => setFullSizeImage(selectedProject.images[currentImageIndex])}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-neutral-100 transition-colors"
              >
                <X size={20} />
              </button>
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex(prev => prev === 0 ? selectedProject.images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-neutral-100 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex(prev => prev === selectedProject.images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-16 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-neutral-100 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {selectedProject.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-neutral-100 px-3 py-1 rounded-full text-sm font-medium text-neutral-700">
                  {selectedProject.category}
                </span>
                <span className="text-sm text-neutral-500">{selectedProject.year}</span>
              </div>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">{selectedProject.title}</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">{projectDescriptions[selectedProject.id] || selectedProject.description}</p>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>Surface: {selectedProject.surface}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {fullSizeImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-4" onClick={() => setFullSizeImage(null)}>
          <img src={fullSizeImage} alt="Full size" className="max-w-full max-h-full object-contain" />
          <button
            onClick={() => setFullSizeImage(null)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

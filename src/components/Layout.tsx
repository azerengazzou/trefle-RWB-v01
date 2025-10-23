import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Settings, Users, Mail, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/projets', label: 'Projets', icon: Briefcase },
    { path: '/services', label: 'Services', icon: Settings },
    { path: '/a-propos', label: 'À propos', icon: Users },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/10 to-blue-50/10">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-pink-100/90 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-4">
              <img src="/logo.png" alt="Trefle Logo" className="w-16 h-16" />
              <span className="text-3xl font-light tracking-wide" style={{ color: '#ef8cac' }}>
                Trefle
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm tracking-wide transition-colors ${isActive(path)
                    ? 'font-medium'
                    : 'hover:opacity-80'
                    }`}
                  style={{ color: isActive(path) ? '#ef8cac' : '#56bfd0' }}
                >
                  {label}
                </Link>
              ))}
              <div className="flex items-center space-x-3 ml-4">
                <a href="https://www.instagram.com/trefle__design/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#56bfd0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ef8cac'} onMouseLeave={(e) => e.currentTarget.style.color = '#56bfd0'}>
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/Trefle.Agency" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#56bfd0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ef8cac'} onMouseLeave={(e) => e.currentTarget.style.color = '#56bfd0'}>
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:opacity-80"
              style={{ color: '#56bfd0' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-200">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${isActive(path)
                    ? 'bg-pink-100 font-medium'
                    : 'hover:bg-pink-50'
                    }`}
                  style={{ color: isActive(path) ? '#ef8cac' : '#56bfd0' }}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="bg-black py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="Trefle Logo" className="w-20 h-20" />
                <span className="text-xl font-light tracking-wide text-white">
                  Trefle
                </span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Créer des espaces qui inspirent et transforment votre quotidien.
              </p>
              <div className="flex items-center space-x-3">
                <a href="https://www.instagram.com/trefle__design/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/Trefle.Agency" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                {navItems.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} className="text-neutral-400 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>+216 55 343 445</li>
                <li>agencytrefle@gmail.com</li>
                <li>Sahlou, Sousse, Tunisie</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-sm text-neutral-400 text-center">
            © 2024 Trefle. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

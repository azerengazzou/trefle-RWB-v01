import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute top-20 right-0 w-96 h-96 text-neutral-300" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="currentColor" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-20 left-0 w-72 h-72 text-neutral-300/60" viewBox="0 0 200 200">
          <rect x="40" y="40" width="40" height="40" fill="currentColor" />
          <rect x="85" y="40" width="40" height="40" fill="currentColor" />
          <rect x="40" y="85" width="40" height="40" fill="currentColor" />
          <rect x="85" y="85" width="40" height="40" fill="currentColor" />
        </svg>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-neutral-200/30 rounded-full blur-3xl"></div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Contactez-Nous
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Partagez-nous votre vision et commençons ensemble la transformation de votre espace
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-sm p-8 md:p-10 shadow-lg border border-neutral-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-medium text-neutral-900 mb-3">
                      Message envoyé !
                    </h3>
                    <p className="text-neutral-600">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                          placeholder="Mouhamed Karim"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                          placeholder="mouhamed.karim@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                          placeholder="+216 55 343 445"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Type de projet *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                        >
                          <option value="">Sélectionnez un type</option>
                          <option value="residential">Résidentiel</option>
                          <option value="commercial">Commercial</option>
                          <option value="hospitality">Hôtellerie</option>
                          <option value="office">Bureau</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                        placeholder="Décrivez-nous votre projet et vos attentes..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-neutral-900 text-white px-8 py-4 rounded-sm transition-colors flex items-center justify-center space-x-2 group"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ef8cac'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                    >
                      <span>Envoyer le message</span>
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-sm p-8 shadow-lg border border-neutral-100">
                <h3 className="text-xl font-medium text-neutral-900 mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-neutral-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-1">Téléphone</h4>
                      <p className="text-neutral-600">+216 55 343 445</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-neutral-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-1">Email</h4>
                      <p className="text-neutral-600">agencytrefle@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-neutral-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-1">Adresse</h4>
                      <p className="text-neutral-600">
                        Avenue yasser arafet - immeuble el yasmine au dessus de la banque BIAT - 1er étage, bureau n°3
                        <br />
                        Sahloul, Sousse, Tunisie
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 rounded-sm p-8 text-white">
                <h3 className="text-xl font-medium mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-neutral-300">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="text-white">9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="text-white">10h - 16h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-white">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-sm p-8 border border-amber-100">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  Consultation gratuite
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Nous offrons une première consultation gratuite de 30 minutes pour
                  discuter de votre projet et de vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Chytrá Mysl</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Pomáháme profesionálům zvládat umělou inteligenci a integrovat ji do své práce. 
              Staňte se součástí naší komunity a posuňte svou kariéru na novou úroveň.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/o-nas" className="text-primary-foreground/80 hover:text-white transition-colors">O nás</Link></li>
              <li><Link to="/komunita" className="text-primary-foreground/80 hover:text-white transition-colors">Komunita</Link></li>
              <li><Link to="/kontakt" className="text-primary-foreground/80 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">Václavské náměstí 56, Praha 1</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">+420 224 123 456</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">info@chytramysl.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Chytrá Mysl s.r.o. Všechna práva vyhrazena.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/pravni-informace" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
                Zásady ochrany osobních údajů
              </Link>
              <Link to="/pravni-informace" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
                Obchodní podmínky
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
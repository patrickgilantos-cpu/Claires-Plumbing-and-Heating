import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--color-border-light)] shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[var(--color-neutral-mid)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl text-gray-900 leading-tight">
                Claire's<br />
                <span className="text-sm font-medium text-gray-500">Plumbing & Heating</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/services/emergency-plumbing" className="text-gray-600 hover:text-[var(--color-brand-blue)] font-medium transition-colors">Emergency</Link>
            <Link to="/services/heating-and-boiler-repair" className="text-gray-600 hover:text-[var(--color-brand-blue)] font-medium transition-colors">Heating & Boiler</Link>
            <Link to="/services/drain-cleaning" className="text-gray-600 hover:text-[var(--color-brand-blue)] font-medium transition-colors">Drains</Link>
            <Link to="/services/water-heater-installation" className="text-gray-600 hover:text-[var(--color-brand-blue)] font-medium transition-colors">Water Heaters</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:5550102020" 
              className="hidden sm:flex items-center gap-2 text-[var(--color-brand-blue)] font-bold text-lg hover:opacity-80 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              555-010-2020
            </a>
            <a 
              href="#book"
              className="bg-[var(--color-brand-red)] hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-bold text-xl text-white block mb-4">Claire's Plumbing</span>
            <p className="text-sm text-gray-400">
              Trusted local plumbing and heating repair experts serving Springfield and surrounding areas. Available 24/7.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/emergency-plumbing" className="hover:text-white transition-colors">Emergency Plumbing</Link></li>
              <li><Link to="/services/heating-and-boiler-repair" className="hover:text-white transition-colors">Heating & Boiler Repair</Link></li>
              <li><Link to="/services/drain-cleaning" className="hover:text-white transition-colors">Drain Cleaning</Link></li>
              <li><Link to="/services/water-heater-installation" className="hover:text-white transition-colors">Water Heater Installation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Main St, Springfield, IL 62701</li>
              <li><a href="tel:5550102020" className="text-white font-bold hover:underline">555-010-2020</a></li>
              <li>License #PL-123456</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Claire's Plumbing & Heating Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

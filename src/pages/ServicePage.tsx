import { useParams } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { BoilerSVG } from '../components/BoilerSVG';

const SERVICES: Record<string, { title: string, desc: string, benefits: string[], visual: 'boiler' | 'generic' }> = {
  'emergency-plumbing': {
    title: 'Emergency Plumbing Repair',
    desc: 'Burst pipes, overflowing toilets, or massive leaks? We dispatch immediately to stop the damage.',
    benefits: ['60-Minute Response', 'Available 24/7/365', 'Damage Mitigation', 'Upfront Pricing'],
    visual: 'generic'
  },
  'heating-and-boiler-repair': {
    title: 'Heating & Boiler Repair',
    desc: 'Don\'t freeze tonight. Our certified technicians repair all makes and models of boilers and furnaces.',
    benefits: ['Licensed HVAC Pros', 'Parts on Hand', 'Safety Inspections', 'Tune-ups'],
    visual: 'boiler'
  },
  'drain-cleaning': {
    title: 'Professional Drain Cleaning',
    desc: 'Stubborn clogs backing up your system? We use professional augers and hydro-jetting to clear lines completely.',
    benefits: ['Main Line Clearing', 'Camera Inspections', 'Hydro-Jetting', 'Preventative Maintenance'],
    visual: 'generic'
  },
  'water-heater-installation': {
    title: 'Water Heater Repair & Install',
    desc: 'No hot water? We repair leaks or upgrade you to high-efficiency tankless systems.',
    benefits: ['Same-Day Replacement', 'Tank & Tankless', 'Energy Efficient Options', 'Haul Away Included'],
    visual: 'generic'
  }
};

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = SERVICES[serviceId as string];

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p>Return to our homepage to see all available services.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[var(--color-brand-blue)] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex gap-4 items-center">
           <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-blue-100 max-w-2xl">{service.desc}</p>
           </div>
           {service.visual === 'boiler' && (
             <div className="hidden lg:block w-64 shrink-0 bg-blue-900/30 rounded-2xl p-4 ml-auto">
               <BoilerSVG />
               <p className="text-center text-xs text-blue-200 mt-2">Smooth operation guaranteed</p>
             </div>
           )}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Call Claire's for {service.title}?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            When you're dealing with plumbing or heating issues, you need someone you can trust. Our local team is fully equipped and trained to handle the specific challenges of homes in our area. We don't just fix the symptom; we diagnose the root cause so you don't have to call us twice.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <CheckCircle className="w-5 h-5 text-[var(--color-brand-blue)]" />
                <span className="font-medium text-gray-800">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-[var(--color-brand-cyan)] rounded-2xl p-8 text-center border border-blue-100">
            <h3 className="text-xl font-bold mb-2">Need Immediate Service?</h3>
            <p className="text-gray-600 mb-6">Our dispatchers are standing by 24/7.</p>
            <a 
              href="tel:5550102020" 
              className="inline-flex items-center gap-2 bg-[var(--color-brand-blue)] hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now: 555-010-2020
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

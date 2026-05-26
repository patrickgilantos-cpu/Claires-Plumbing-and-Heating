import { ShieldCheck, Clock, Wrench, Droplet, Flame, ArrowRight, Star } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { BoilerSVG } from '../components/BoilerSVG';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-brand-cyan)] to-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Fast, Trusted Plumbing & Heating Repairs in <span className="text-[var(--color-brand-blue)]">Springfield</span> — Available 24/7
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
              No hidden fees. Licensed, insured local pros at Claire's are ready to clear your drains or fix your boiler today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:5550102020" 
                className="bg-[var(--color-brand-red)] hover:bg-red-700 text-white text-lg font-bold py-4 px-8 rounded-full flex items-center justify-center transition-colors shadow-lg shadow-red-500/30"
              >
                Call Now: 555-010-2020
              </a>
              <a 
                href="#book" 
                className="bg-white hover:bg-gray-50 text-[var(--color-brand-blue)] border-2 border-[var(--color-brand-blue)] text-lg font-bold py-4 px-8 rounded-full flex items-center justify-center transition-colors"
              >
                Book Online
              </a>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[var(--color-brand-blue)] text-white py-6 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-8 text-sm font-medium opacity-80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            Licensed & Insured (#PL-123456)
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span>Google Rating: 4.9/5 stars based on 200+ reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-white" />
            24/7 Emergency Service
          </div>
        </div>
      </section>

      {/* Emergency Matrix */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Wrong?</h2>
            <p className="text-gray-600">Select your issue and we'll dispatch a tech immediately.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <Link to="/services/emergency-plumbing" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Droplet className="w-8 h-8 text-[var(--color-brand-blue)]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Burst Pipes</h3>
              <p className="text-sm text-gray-500 mb-4">Stop the damage fast with rapid response plumbing.</p>
              <span className="text-[var(--color-brand-blue)] text-sm font-semibold flex items-center gap-1 mt-auto">Get Help <ArrowRight className="w-4 h-4" /></span>
             </Link>

             <Link to="/services/heating-and-boiler-repair" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flame className="w-8 h-8 text-[var(--color-brand-red)]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Boiler Breakdown</h3>
              <p className="text-sm text-gray-500 mb-4">Restore your heat safely with certified technicians.</p>
              <span className="text-[var(--color-brand-red)] text-sm font-semibold flex items-center gap-1 mt-auto">Get Help <ArrowRight className="w-4 h-4" /></span>
             </Link>

             <Link to="/services/drain-cleaning" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-full border-4 border-[var(--color-brand-blue)] border-t-transparent animate-spin" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Clogged Drains</h3>
              <p className="text-sm text-gray-500 mb-4">We clear stubborn blockages securely and quickly.</p>
              <span className="text-[var(--color-brand-blue)] text-sm font-semibold flex items-center gap-1 mt-auto">Get Help <ArrowRight className="w-4 h-4" /></span>
             </Link>

             <Link to="/services/water-heater-installation" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wrench className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Water Heater Failure</h3>
              <p className="text-sm text-gray-500 mb-4">Fix leaks or replace your unit with a new efficient one.</p>
              <span className="text-cyan-600 text-sm font-semibold flex items-center gap-1 mt-auto">Get Help <ArrowRight className="w-4 h-4" /></span>
             </Link>
          </div>
        </div>
      </section>

      {/* Why Us and Animated SVG section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Springfield Chooses Claire's</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[var(--color-brand-blue)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">60-Minute Response Times</h3>
                  <p className="text-gray-600">When emergencies strike, we don't make you wait. We aim to be at your door within the hour.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-brand-red)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Upfront Pricing</h3>
                  <p className="text-gray-600">No surprise bills. We diagnose the issue and provide a clear, flat rate before any work begins.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Fully Equipped Vans</h3>
                  <p className="text-gray-600">Our mobile warehouses carry thousands of parts so we can fix 90% of issues on the first visit.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center border border-gray-100">
             <BoilerSVG />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-gray-900 text-white">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by Your Neighbors</h2>
              <p className="text-gray-400">See what Springfield residents are saying about Claire's.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"My boiler died on the coldest night of January. Claire's had a tech out in 45 minutes and restored our heat. Incredible service and very fair pricing."</p>
                <div className="font-bold">- Sarah J., Oak Ridge</div>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"Saved our hardboard floors! A burst pipe was flooding the kitchen. The dispatcher was calm, told us how to shut the main off, and the plumber fixed it perfectly."</p>
                <div className="font-bold">- Mike & Lisa T., Downtown</div>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"Very upfront and honest. They explained exactly what was wrong with our drain instead of just upselling us. Will definitely use again."</p>
                <div className="font-bold">- David M., Westside</div>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
}

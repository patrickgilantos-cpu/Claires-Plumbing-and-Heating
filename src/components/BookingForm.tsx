import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      issue: formData.get('issue'),
    };

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Network response was not ok');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-2xl flex flex-col items-center text-center border border-green-100 shadow-sm">
        <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Request Received!</h3>
        <p>Claire or a team member will call you shortly to confirm your dispatch.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-green-700 font-medium hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden" id="book">
      <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-brand-red)]"></div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Fast Service</h3>
      <p className="text-gray-500 mb-6 text-sm">Fill out the form below and we'll dispatch a tech ASAP.</p>
      
      {status === 'error' && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-start gap-2 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>Something went wrong. Please call us directly at <strong>555-010-2020</strong>.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-1">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-700 font-medium mb-1">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all"
            placeholder="(555) 010-2020"
          />
        </div>
        <div>
          <label htmlFor="issue" className="block text-sm text-gray-700 font-medium mb-1">Zip Code / Issue</label>
          <input 
            type="text" 
            id="issue" 
            name="issue" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all"
            placeholder="62701 - Burst pipe"
          />
        </div>
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-[var(--color-brand-red)] hover:bg-red-700 text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
        >
          {status === 'loading' ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
          ) : (
            'Dispatch Tech Now'
          )}
        </button>
      </form>
    </div>
  );
}

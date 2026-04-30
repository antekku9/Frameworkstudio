import React, { useState } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formsubmit.co/ajax/antekku9@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <div className="text-green-600 font-bold p-4">✅ Wiadomość wysłana! Odezwę się niedługo.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Pola konfiguracyjne FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Nowa wiadomość z Framework Studio" />

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold uppercase tracking-wider">Imię i Nazwisko</label>
        <input type="text" name="name" required className="p-3 border rounded-md dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold uppercase tracking-wider">Email</label>
        <input type="email" name="email" required className="p-3 border rounded-md dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold uppercase tracking-wider">Wiadomość</label>
        <textarea name="message" required className="p-3 border rounded-md dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 h-32" />
      </div>

      <button 
        type="submit" 
        disabled={status === 'sending'}
        className="bg-[#c5a059] text-white p-4 rounded-md font-bold hover:bg-[#a8874f] transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
      </button>

      {status === 'error' && <p className="text-red-500 text-sm">Coś poszło nie tak. Spróbuj ponownie.</p>}
    </form>
  );
};

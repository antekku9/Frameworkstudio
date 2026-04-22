import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BackToTop } from '../components/BackToTop';
import { Testimonials } from '../components/Testimonials';

export function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `antekku9@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Wiadomość z Framework Studio'
    )}&body=${encodeURIComponent(
      `Imię: ${formData.name}\nE-mail: ${formData.email}\n\nTreść:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="size-full bg-[#fdfdfd]">
      <Navbar />
      <Breadcrumbs />

      <section className="px-[5%] py-20 max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
        <h2 className="text-[3rem] font-bold mb-5 col-span-1 lg:col-span-2 text-center">Napisz do mnie</h2>

        {/* Contact Info */}
        <div className="contact-info">
          <h3 className="text-[1.5rem] font-semibold mb-5 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-[#c5a059] after:mt-2">
            Dane Kontaktowe
          </h3>
          <p className="mb-4 text-[#222]">
            Zazwyczaj odpowiadam w ciągu 24 godzin (od poniedziałku do piątku).
            Chętnie porozmawiam o Twoim projekcie i przygotuję wycenę.
          </p>

          <p className="mb-4">
            <strong>Telefon:</strong>{' '}
            <a href="tel:+48123456789" className="text-[#222] no-underline font-medium hover:text-[#c5a059] transition-colors">
              +48 123 456 789
            </a>
          </p>
          <p className="mb-4">
            <strong>E-mail:</strong>{' '}
            <a href="mailto:info@frameworkstudio.pl" className="text-[#222] no-underline font-medium hover:text-[#c5a059] transition-colors">
              info@frameworkstudio.pl
            </a>
          </p>

          <div className="mt-8">
            <h3 className="text-[1.5rem] font-semibold mb-5 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-[#c5a059] after:mt-2">
              Social Media
            </h3>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/frameworkstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222] no-underline font-medium hover:text-[#c5a059] transition-colors"
              >
                Instagram
              </a>
              <span className="text-[#666]">|</span>
              <a
                href="https://www.linkedin.com/in/antoni-kuran/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222] no-underline font-medium hover:text-[#c5a059] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-[#666]">|</span>
              <a
                href="https://www.facebook.com/frameworkstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222] no-underline font-medium hover:text-[#c5a059] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#f9f9f9] p-8 rounded-[5px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-semibold text-[0.9rem] uppercase">
                Imię i Nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#ddd] rounded font-['Montserrat'] text-[0.9rem] focus:border-[#c5a059] focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 font-semibold text-[0.9rem] uppercase">
                Adres E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#ddd] rounded font-['Montserrat'] text-[0.9rem] focus:border-[#c5a059] focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="subject" className="block mb-2 font-semibold text-[0.9rem] uppercase">
                Temat (np. Wycena, Współpraca)
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-[#ddd] rounded font-['Montserrat'] text-[0.9rem] focus:border-[#c5a059] focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 font-semibold text-[0.9rem] uppercase">
                Treść Wiadomości
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-3 border border-[#ddd] rounded font-['Montserrat'] text-[0.9rem] resize-y min-h-[150px] focus:border-[#c5a059] focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="inline-block px-6 py-3 bg-[#c5a059] text-white border-none rounded cursor-pointer font-bold uppercase tracking-wider transition-all hover:bg-[#a8874f]"
            >
              Wyślij Wiadomość
            </button>
          </form>
        </div>
      </section>

      <Testimonials />
      <Footer />
      <BackToTop />
    </div>
  );
}

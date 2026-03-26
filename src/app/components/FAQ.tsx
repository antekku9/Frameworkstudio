import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Jak długo trwa realizacja typowego projektu?',
    answer: 'Czas realizacji zależy od zakresu projektu. Packshoty produktowe zajmują 3-7 dni roboczych, projekty brandingowe 2-3 tygodnie, a wizualizacje 3D mogą zająć od tygodnia do miesiąca w zależności od złożoności.',
  },
  {
    question: 'Czy oferujesz poprawki do projektów?',
    answer: 'Tak! W cenie każdego pakietu wliczona jest określona liczba poprawek (zazwyczaj 2-3 rundy). Dodatkowe poprawki można zlecić za dodatkową opłatą.',
  },
  {
    question: 'Jakie pliki otrzymam po zakończeniu projektu?',
    answer: 'Otrzymasz pliki w formatach dostosowanych do Twoich potrzeb: JPG/PNG do internetu, PDF do druku, pliki źródłowe (PSD/AI) na życzenie, oraz wersje responsywne dla różnych platform.',
  },
  {
    question: 'Czy można zamówić tylko część usług z pakietu?',
    answer: 'Oczywiście! Pakiety są tylko sugestią. Możemy stworzyć indywidualną ofertę dopasowaną do Twoich potrzeb i budżetu.',
  },
  {
    question: 'Jak wygląda proces współpracy?',
    answer: '1) Konsultacja i ustalenie szczegółów, 2) Przygotowanie wyceny, 3) Zaliczka 50%, 4) Realizacja projektu, 5) Prezentacja i poprawki, 6) Dopłata i przekazanie plików.',
  },
  {
    question: 'Czy podpisujesz umowy NDA?',
    answer: 'Tak, jeśli projekt tego wymaga, chętnie podpiszemy umowę o zachowaniu poufności (NDA).',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[800px] mx-auto px-5 py-16">
      <h2 className="text-[2.5rem] font-bold text-center mb-12">Często zadawane pytania</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#eee] rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-[#f9f9f9] transition-colors"
            >
              <span className="font-semibold text-[1.1rem] pr-4">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-[#c5a059] flex-shrink-0" size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-[#666] leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

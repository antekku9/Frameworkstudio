# Portfolio Antoni Kuran - Statyczne pliki HTML

Komplet plików HTML/CSS dla strony portfolio grafika i fotografa Antoni Kurana.

## 📁 Struktura plików

```
export/
├── index.html          # Strona główna
├── portfolio.html      # Galeria prac
├── oferta.html         # Cennik i pakiety
├── kontakt.html        # Formularz kontaktowy
├── style.css           # Główny plik CSS
└── README.md           # Ten plik
```

## 🚀 Jak uruchomić?

1. **Lokalnie na komputerze:**
   - Po prostu otwórz plik `index.html` w przeglądarce
   - Lub kliknij dwukrotnie na `index.html`

2. **Na serwerze:**
   - Prześlij wszystkie pliki do katalogu głównego Twojego hostingu
   - Upewnij się, że struktura katalogów jest zachowana
   - Otwórz w przeglądarce adres Twojej strony

## ✨ Funkcjonalności

### Wszystkie strony:
- ✅ Responsywny design (działa na telefonie, tablecie, komputerze)
- ✅ Nawigacja sticky (menu na górze ekranu)
- ✅ Breadcrumbs (nawigacja okruszkowa)
- ✅ Floating CTA button "Bezpłatna Wycena"
- ✅ Przycisk "Wróć do góry"
- ✅ Smooth scroll (płynne przewijanie)

### Strona główna (index.html):
- Hero carousel z trzema slajdami
- Sekcja "O mnie" ze statystykami
- Skill tagi
- Grid usług z ikonami
- CTA Banner

### Portfolio (portfolio.html):
- 6 kategorii prac
- Lightbox do powiększania zdjęć (kliknij na zdjęcie)
- Nawigacja przez hashtagi (#fotografia-prace, #grafika2d-prace, etc.)

### Oferta (oferta.html):
- Pakiety cenowe dla fotografii i grafiki
- Badge "Najczęściej wybierany" na wyróżnionych pakietach
- Sekcja FAQ (accordion)
- Opinie klientów (testimonials)

### Kontakt (kontakt.html):
- Formularz kontaktowy (mailto)
- Dane kontaktowe
- Social media links
- Opinie klientów

## 🎨 Personalizacja

### Zmiana kolorów:
Otwórz `style.css` i znajdź:
```css
/* Główny kolor złoty/złoto-brązowy */
#c5a059

/* Ciemny kolor tła */
#222
```

Zamień te wartości na swoje kolory.

### Zmiana zdjęć:
1. **Hero carousel** - znajdź w `index.html`:
   ```html
   <div class="hero-slider">
   ```

2. **Portfolio** - zamień adresy URL zdjęć z Unsplash na swoje:
   ```html
   <img src="TWÓJ_URL_ZDJĘCIA" alt="Opis">
   ```

### Zmiana treści:
Edytuj odpowiednie pliki HTML - tekst jest bezpośrednio w kodzie.

### Zmiana danych kontaktowych:
W **wszystkich** plikach HTML zamień:
- `+48 123 456 789` → Twój numer telefonu
- `info@frameworkstudio.pl` → Twój email
- Linki social media

## 📱 Responsywność

Strona automatycznie dostosowuje się do różnych rozmiarów ekranu:
- **Desktop:** 1200px i więcej
- **Tablet:** 768px - 1199px
- **Mobile:** poniżej 768px

## 🔧 Wymagania techniczne

- **Przeglądarka:** Dowolna nowoczesna (Chrome, Firefox, Safari, Edge)
- **Hosting:** Dowolny serwer HTTP (nie wymaga PHP, bazy danych, etc.)
- **CDN:** Używa zewnętrznych bibliotek:
  - Google Fonts (Montserrat)
  - jQuery (dla carousel)
  - Slick Carousel (dla slajdera na stronie głównej)

## 📝 Notatki

### Formularz kontaktowy
Formularz używa `mailto:` - po wysłaniu otworzy się klient email użytkownika.

Jeśli chcesz **prawdziwy formularz serwerowy**, musisz:
1. Dodać backend (PHP, Node.js, Python)
2. Lub użyć usługi typu Formspree, Netlify Forms, EmailJS

### Slick Carousel
Slider na stronie głównej wymaga połączenia z internetem (CDN).

Jeśli chcesz **wersję offline**:
1. Pobierz bibliotekę Slick Carousel
2. Umieść pliki lokalnie
3. Zmień ścieżki w `index.html`

### Lightbox
Lightbox w portfolio.html jest napisany w czystym JavaScript - działa bez dodatkowych bibliotek.

## 🆘 Wsparcie

### Problem z karuzelą (slider)?
- Upewnij się, że masz połączenie z internetem (CDN)
- Sprawdź konsolę przeglądarki (F12) - czy są błędy?

### Zdjęcia się nie ładują?
- Sprawdź adresy URL w kodzie
- Upewnij się, że obrazy są dostępne publicznie

### Formularz nie działa?
- Sprawdź, czy masz skonfigurowany klient email (Outlook, Mail, Gmail)
- Rozważ implementację prawdziwego formularza serwerowego

## 📄 Licencja

Pliki są przygotowane dla projektu Antoni Kuran Portfolio.

Możesz:
- ✅ Używać ich na swoich projektach
- ✅ Modyfikować według potrzeb
- ✅ Hostować na swoim serwerze

---

**Autor:** Framework Studio  
**Data:** Marzec 2026  
**Wersja:** 1.0

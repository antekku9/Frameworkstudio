import { Link, useLocation } from 'react-router';

export function Navbar() {
  const location = useLocation();

  const links = [
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'oferta', label: 'Oferta', href: '/oferta' },
    { id: 'o-mnie', label: 'O mnie', href: '/' },
    { id: 'kontakt', label: 'Kontakt', href: '/kontakt' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="w-full px-[5%] py-5 flex justify-center gap-8 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] sticky top-0 z-[1000]">
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.href}
          className={`text-[0.85rem] font-bold uppercase tracking-wider transition-colors duration-200 no-underline ${
            isActive(link.href) ? 'text-[#c5a059]' : 'text-[#222] hover:text-[#c5a059]'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
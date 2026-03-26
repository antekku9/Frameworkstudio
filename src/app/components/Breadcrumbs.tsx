import { Link, useLocation } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';

const pageNames: Record<string, string> = {
  '/': 'Strona Główna',
  '/portfolio': 'Portfolio',
  '/oferta': 'Oferta',
  '/kontakt': 'Kontakt',
};

export function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (location.pathname === '/') {
    return null; // Don't show breadcrumbs on homepage
  }

  return (
    <nav className="w-full max-w-[1200px] mx-auto px-5 py-4 flex items-center gap-2 text-sm">
      <Link to="/" className="flex items-center gap-1 text-[#666] hover:text-[#c5a059] transition-colors no-underline">
        <Home size={16} />
        <span>Strona Główna</span>
      </Link>

      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;

        return (
          <div key={path} className="flex items-center gap-2">
            <ChevronRight size={16} className="text-[#999]" />
            {isLast ? (
              <span className="text-[#c5a059] font-medium">{pageNames[path] || segment}</span>
            ) : (
              <Link to={path} className="text-[#666] hover:text-[#c5a059] transition-colors no-underline">
                {pageNames[path] || segment}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

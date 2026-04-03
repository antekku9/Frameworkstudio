import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { OfertaPage } from "./pages/OfertaPage";
import { KontaktPage } from "./pages/KontaktPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/portfolio",
    Component: PortfolioPage,
  },
  {
    path: "/oferta",
    Component: OfertaPage,
  },
  {
    path: "/kontakt",
    Component: KontaktPage,
  },
], {
  // DODAJ TEN OBIEKT JAKO DRUGI ARGUMENT:
  basename: "/Frameworkstudio" 
});

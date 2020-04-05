import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import { Footer, NavBar } from "../_app";

export const NavBarLayout = ({ beforeContent, children }) => (
  <>
    <SkipNavLink>Ir para o conteúdo</SkipNavLink>
    <NavBar />
    {beforeContent}
    <SkipNavContent>{children}</SkipNavContent>
    <Footer />
  </>
);

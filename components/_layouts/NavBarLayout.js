import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import { NavBar } from "../_app";

export const NavBarLayout = ({ beforeContent, children }) => (
  <>
    <SkipNavLink>Ir para o conteúdo</SkipNavLink>
    <NavBar />
    {beforeContent}
    <SkipNavContent>{children}</SkipNavContent>
  </>
);

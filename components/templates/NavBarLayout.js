import React from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import { Footer, NavBar } from '@app/components/global'

export const NavBarLayout = ({ beforeContent, children }) => (
  <>
    <SkipNavLink>Ir para o conteúdo</SkipNavLink>
    <NavBar />
    {beforeContent}
    <SkipNavContent>{children}</SkipNavContent>
    <Footer />
  </>
)

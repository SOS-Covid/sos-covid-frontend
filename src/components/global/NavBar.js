import React, { useState } from 'react'
import { Flex, Box, Heading, Link, Button } from 'rebass'
import { Menu } from 'react-feather'
import { Logo } from '.'

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false)
  const mobileDisplay = expanded ? 'flex' : 'none'

  return (
    <Flex as="header" color="text" bg="background" p={3}>
      <Box variant="containers.base" flex={1}>
        <Flex alignItems="center" flexDirection={['column', 'column', 'row']}>
          <Flex alignItems="center" alignSelf="stretch">
            <Logo size={80} />
            <Heading
              as="h1"
              mx={4}
              sx={{ textTransform: 'uppercase' }}
              width={['auto', 'auto', 1 / 2]}
              textAlign={['center', 'center', 'left']}
              flexGrow={[1, 1, 0]}
            >
              Cooperação Solidária
            </Heading>
            <Button
              onClick={() => setExpanded((s) => !s)}
              fontFamily="body"
              display={['flex', 'flex', 'none']}
              p={2}
            >
              <Menu />
            </Button>
          </Flex>
          <Box
            as="nav"
            flex={1}
            justifyContent="space-evenly"
            display={[mobileDisplay, mobileDisplay, 'flex']}
            flexDirection={['column', 'column', 'row']}
            textAlign="center"
          >
            <Link variant="nav" href="/">
              Início
            </Link>
            <Link variant="nav" href="/criar-campanha">
              Criar campanha
            </Link>
            <Link variant="nav" href="/quero-ajudar">
              Quero ajudar
            </Link>
            <Link variant="nav" href="/login">
              Login
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

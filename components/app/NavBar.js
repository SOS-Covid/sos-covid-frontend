import { useState } from "react";
import { Flex, Box, Heading, Link, Button } from "rebass";
import Container from "./Container";
import Logo from "./Logo";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const mobileDisplay = expanded ? "flex" : "none";

  return (
    <Flex as="header" color="text" bg="background" p={3}>
      <Container flex={1}>
        <Flex alignItems="center" flexDirection={["column", "column", "row"]}>
          <Flex alignItems="center" alignSelf="stretch">
            <Logo size={80} />
            <Heading
              as="h1"
              mx={4}
              sx={{ textTransform: "uppercase" }}
              width={["auto", "auto", 1 / 2]}
              textAlign={["center", "center", "left"]}
              flexGrow={[1, 1, 0]}
            >
              Cooperação Solidária
            </Heading>
            <Button
              onClick={() => setExpanded((s) => !s)}
              fontFamily="body"
              display={["initial", "initial", "none"]}
            >
              Menu
            </Button>
          </Flex>
          <Box
            as="nav"
            flex={1}
            justifyContent="space-evenly"
            fontFamily="body"
            display={[mobileDisplay, mobileDisplay, "flex"]}
            flexDirection={["column", "column", "row"]}
          >
            <Link variant="nav" href="/">
              Início
            </Link>
            <Link variant="nav" href="/criar-campanha">
              Criar campanha
            </Link>
            <Link variant="nav" href="/quero-ajudar">
              Criar campanha
            </Link>
            <Link variant="nav" href="/login">
              Login
            </Link>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default NavBar;

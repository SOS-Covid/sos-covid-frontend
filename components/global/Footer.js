import { Flex, Link, Text } from "rebass";
import { Section, Stack } from ".";
import { Logo } from "./Logo";

const FooterLink = (props) => (
  <Link
    color="accent"
    fontWeight="700"
    sx={{
      textTransform: "uppercase",
      textDecoration: "none",
      letterSpacing: 1.15,
    }}
    {...props}
  />
);

export const Footer = () => (
  <Section as="footer" id="rodape" bg="text" color="accent">
    <Flex alignItems="flex-start" flexDirection="row" flexWrap="wrap">
      <Stack spacing={3} width={[1, 1 / 2, 1 / 3]}>
        <FooterLink href="/termos-de-uso">Termos de uso</FooterLink>
        <FooterLink href="/politicas">Políticas do site</FooterLink>
        <FooterLink href="/contato">Entre em contato</FooterLink>
        <FooterLink href="/colabore">
          Faça parte do projeto Cooperação Solidária
        </FooterLink>
      </Stack>
      <Flex width={[1, 1 / 3]} ml="auto" mt={[4, 0]} alignItems="center">
        <Logo size={80} flexShrink="0" />
        <Text fontSize={3} fontWeight={600} ml={3}>
          Cooperação Solidária
        </Text>
      </Flex>
    </Flex>
  </Section>
);

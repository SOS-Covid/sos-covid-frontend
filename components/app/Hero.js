import { Flex, Heading } from "rebass";
import Container from "./Container";

const Hero = ({ asHeading = "h2", children, ...props }) => (
  <Flex
    as="section"
    p={4}
    color="text"
    bg="muted"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    <Container alignItems="center" justifyContent="center">
      <Heading
        as={asHeading}
        fontFamily="body"
        textAlign="center"
        sx={{ textTransform: "uppercase" }}
        fontSize={5}
        lineHeight={1.5}
      >
        {children}
      </Heading>
    </Container>
  </Flex>
);

export default Hero;

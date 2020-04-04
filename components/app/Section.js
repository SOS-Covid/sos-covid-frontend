import { Box } from "rebass";
import Container from "./Container";

const Section = ({ p = 5, as = "section", children, ...props }) => (
  <Box as={as} p={p} {...props}>
    <Container>{children}</Container>
  </Box>
);

export default Section;

import { Box } from "rebass";
import { Container } from "./";

export const Section = ({ p = 5, as = "section", children, ...props }) => (
  <Box as={as} p={p} {...props}>
    <Box variant="container">{children}</Box>
  </Box>
);

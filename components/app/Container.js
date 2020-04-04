import { Box } from "rebass";

const Container = (props) => (
  <Box
    {...props}
    sx={{
      maxWidth: 960,
      mx: "auto",
      px: 3,
    }}
  />
);

export default Container;

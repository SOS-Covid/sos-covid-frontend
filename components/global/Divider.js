import { Box } from "rebass";

export const Divider = (props) => (
  <Box
    as="hr"
    sx={{
      border: 0,
      borderBottomWidth: 1,
      borderBottomStyle: "dashed",
      borderBottomColor: "mutedDarker",
    }}
    {...props}
  />
);

import { Children } from "react";
import { Box } from "rebass";

const Stack = ({ spacing, as = "div", children, ...props }) => {
  const stackItems = Children.toArray(children);

  const isList = as === "ol" || as === "ul";
  const stackItemComponent = isList ? "li" : "div";

  if (stackItems.length <= 1 && align === "left" && !isList) {
    return <Fragment>{stackItems}</Fragment>;
  }

  return (
    <Box
      {...props}
      as={as}
      sx={{
        "* + *": {
          display: "block",
          marginTop: spacing,
        },
      }}
    >
      {stackItems.map((child, index) => (
        <Box as={stackItemComponent} mt={index === 0 ? 0 : spacing}>
          {child}
        </Box>
      ))}
    </Box>
  );
};

Stack.defaultProps = {
  spacing: 4,
};

export default Stack;

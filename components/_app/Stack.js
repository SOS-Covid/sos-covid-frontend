import { Children } from "react";
import { Box } from "rebass";

export const Stack = ({ spacing = 4, as = "div", children, ...props }) => {
  const stackItems = Children.toArray(children);

  const isList = as === "ol" || as === "ul";
  const stackItemComponent = isList ? "li" : "div";

  if (stackItems.length <= 1 && align === "left" && !isList) {
    return <Fragment>{stackItems}</Fragment>;
  }

  return (
    <Box {...props} as={as}>
      {stackItems.map((child, index) => (
        <Box key={index} as={stackItemComponent} mt={index === 0 ? 0 : spacing}>
          {child}
        </Box>
      ))}
    </Box>
  );
};

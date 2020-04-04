import defaultTheme from "@rebass/preset";

const theme = {
  ...defaultTheme,
  colors: {
    primary: "#7030a0",
    primaryHighlight: "#a568d2",
    secondary: "#ff7979",
    secondaryHighlight: "#ffa7a7",
    accent: "#ffcc00",
    muted: "#f2f2f2",
    text: "#404040",
    background: "#ffffff",
  },
  fonts: {
    body: "system-ui, sans-serif",
    display: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  lineHeight: {
    heading: 1.5,
    body: 1.5,
  },
  text: {
    ...defaultTheme.text,
    headingHero: {
      fontSize: 5,
      lineHeight: "body",
      textTransform: "uppercase",
    },
  },
  variants: {
    ...defaultTheme.variants,
    "full-bleed": {
      width: "100vw",
      position: "relative",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
    },
    container: {
      maxWidth: "62em",
      mx: "auto",
      px: 3,
    },
    "container-xl": {
      maxWidth: "80em",
      mx: "auto",
      px: 3,
    },
  },
};

export default theme;

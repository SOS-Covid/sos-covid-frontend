import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import theme from "../config/theme";

// Resets CSS styles
import "modern-css-reset";

// Import Reach-UI styles
import "@reach/skip-nav/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          body: {
            color: theme.colors.text,
            backgroundColor: theme.colors.background,
            fontFamily: theme.fonts.body,
          },
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

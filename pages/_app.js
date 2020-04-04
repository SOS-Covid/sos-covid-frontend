import { ThemeProvider } from "emotion-theming";
import theme from "../config/theme";

// Resets CSS styles
import "modern-css-reset";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

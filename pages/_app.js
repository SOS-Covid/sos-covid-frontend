import Head from "next/head";
import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import { theme } from "@app/config";

// Resets CSS styles
import "modern-css-reset";

// Import Reach-UI styles
import "@reach/skip-nav/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Cooperação Solidária</title>
      </Head>
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

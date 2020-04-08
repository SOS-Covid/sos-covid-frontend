import defaultTheme from '@rebass/preset'

const theme = {
  ...defaultTheme,
  colors: {
    primary: '#7030a0',
    primaryHighlight: '#a568d2',
    secondary: '#ff7979',
    secondaryHighlight: '#ffa7a7',
    accent: '#ffcc00',
    muted: '#f2f2f2',
    mutedDarker: '#aDa7b5',
    text: '#404040',
    background: '#ffffff'
  },
  fonts: {
    body: 'system-ui, sans-serif',
    display: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  text: {
    ...defaultTheme.text,
    callout: {
      fontSize: 5,
      lineHeight: 'body',
      textTransform: 'uppercase'
    }
  },
  radii: {
    ...defaultTheme.radii,
    default: 8
  },
  variants: {
    ...defaultTheme.variants,
    card: {
      p: 3,
      bg: 'background',
      borderRadius: 'default'
    },
    flex: {
      column: {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    containers: {
      base: {
        maxWidth: '62em',
        mx: 'auto',
        px: 3
      }
    }
  }
}

export default theme

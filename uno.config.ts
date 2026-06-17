import { defineConfig, presetTypography, presetWind3 } from 'unocss'

const fg = 'hsl(var(--foreground) / var(--un-text-opacity, 1))'
const fgMuted = 'hsl(var(--muted-foreground) / var(--un-text-opacity, 1))'
const bgMuted = 'hsl(var(--muted) / var(--un-bg-opacity, 1))'

const typographyConfig = {
  cssExtend: {
    // Title
    'h2,h3,h4,h5,h6': {
      'scroll-margin-top': '3rem',
      'font-weight': '500',
      color: fg
    },
    'h1>a,h2>a,h3>a,h4>a,h5>a,h6>a': {
      'margin-inline-start': '0.75rem',
      color: fgMuted,
      transition: 'opacity 0.2s ease',
      opacity: '0'
    },
    'h1>a:focus,h2>a:focus,h3>a:focus,h4>a:focus,h5>a:focus,h6>a:focus': {
      opacity: 1
    },
    'h1:hover>a,h2:hover>a,h3:hover>a,h4:hover>a,h5:hover>a,h6:hover>a': {
      opacity: 1
    },
    'h1:target>a,h2:target>a,h3:target>a,h4:target>a,h5:target>a,h6:target>a': {
      opacity: 1
    },
    // Blockquote
    blockquote: {
      position: 'relative',
      overflow: 'hidden',
      'border-width': '1px',
      'border-left': 'inherit',
      'border-radius': 'var(--radius)',
      'padding-inline': '1.6rem',
      'box-shadow': '0 5px 0 ' + bgMuted
    },
    'blockquote::after': {
      color: fgMuted,
      position: 'absolute',
      content: '"”"',
      top: '2.6rem',
      right: '-1.4rem',
      'font-size': '10rem',
      'font-family':
        '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
      transform: 'rotate(-15deg)',
      opacity: '0.1'
    },
    // Table
    table: {
      display: 'block',
      'font-size': '.875em'
    },
    'table tr': {
      'border-bottom-width': '1px'
    },
    'tbody tr:last-child': {
      'border-bottom-width': '0'
    },
    'thead th': {
      'font-weight': '500',
      color: fg
    },
    'td, th': {
      border: 'inherit',
      'text-align': 'start',
      padding: '0.57em'
    },
    'thead th:first-child,thead th:first-child,tbody td:first-child,tfoot td:first-child': {
      'padding-inline-start': '0'
    },
    // List
    'ol, ul': {
      'padding-left': '1.625em'
    },
    'ol>li, ul>li': {
      'padding-inline-start': '.375em'
    },
    'ul>li::marker': {
      color: fgMuted,
      '--un-text-opacity': '0.35'
    },
    li: {
      'margin-top': '.5em',
      'margin-bottom': '.5em'
    },
    // Others
    img: {
      'border-radius': 'var(--radius)',
      margin: '0 auto'
    },
    hr: {
      '--un-prose-hr': 'hsl(var(--border) / 1)'
    },
    kbd: {
      color: fg,
      'border-color': 'hsl(var(--border) / 1)',
      'box-shadow':
        '0 0 0 1px hsl(var(--primary-foreground) / 1), 0 3px hsl(var(--primary-foreground) / 1)'
    },
    strong: {
      'font-weight': '600',
      color: fg
    },
    a: {
      'font-weight': '500',
      color: fg
    },
    'code:not(pre code)': {
      'white-space': 'pre-wrap!important',
      'word-break': 'break-all!important'
    }
  }
}

const themeColors = {
  border: 'hsl(var(--border) / <alpha-value>)',
  input: 'hsl(var(--input) / <alpha-value>)',
  ring: 'hsl(var(--ring) / <alpha-value>)',
  background: 'hsl(var(--background) / <alpha-value>)',
  foreground: 'hsl(var(--foreground) / <alpha-value>)',
  primary: {
    DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
    foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
    foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
    foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
  },
  muted: {
    DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
    foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
  },
  accent: {
    DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
    foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
  },
  popover: {
    DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
    foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
  },
  card: {
    DEFAULT: 'hsl(var(--card) / <alpha-value>)',
    foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
  },
  // ── Coffee & Cowrie brand tokens (charte graphique) ──
  coco: {
    green:  '#1a244f',
    ivory:  '#F7F1E5',
    lime:   '#fff449',
    orange: '#cf8429',
    black:  '#0a0a0a'
  }
}

export default defineConfig({
  presets: [
    presetWind3(), // required
    presetTypography(typographyConfig)
  ],
  rules: [
    // bg-noise — grain SVG pour les overlays (index.astro)
    ['bg-noise', {
      'background-image': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")"
    }]
  ],
  theme: {
    colors: themeColors,
    // ── Gilroy — police officielle Coffee & Cowrie (charte graphique) ──
    fontFamily: {
      sans:    'Gilroy, ui-sans-serif, system-ui, sans-serif',
      display: 'Gilroy, ui-sans-serif, system-ui, sans-serif',
      serif:   'Gilroy, ui-sans-serif, system-ui, sans-serif'
    }
  },
  // https://unocss.dev/guide/extracting#limitations
  // Classes dynamiques que le scanner statique ne peut pas détecter
  safelist: [
    // Base
    'rounded-t-2xl',
    'rounded-b-2xl',
    'text-base',
    'prose',
    // Navigation active / hover (ternaires dans CocoBaseLayout)
    'text-coco-orange',
    'text-coco-green',
    'hover:text-coco-orange',
    'hover:text-coco-green',
    'text-coco-green/80',
    // Group hover utilities (index.astro)
    'group-hover:opacity-100',
    'group-hover:opacity-70',
    'group-hover:grayscale-0',
    'group-hover:scale-105',
    'group-hover:translate-y-0',
    'group-hover:-translate-y-2',
    'group-hover:translate-x-1',
    'group-hover:text-coco-orange',
    'group-hover:text-coco-ivory',
    'group-hover:text-coco-ivory/80',
    'group-hover:bg-coco-green',
    'group-hover:bg-coco-orange',
    // Classes injectées dynamiquement par le script JS de text-reveal (CocoBaseLayout)
    // Ces classes sont ajoutées via classList.add() / span.innerHTML au runtime
    'inline-block',
    'overflow-hidden',
    'align-top',
    'mr-3',
    'translate-y-full',
    'transition-transform',
    'duration-700',
    'opacity-0',
    'opacity-1'
  ]
})

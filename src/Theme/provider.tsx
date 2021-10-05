import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global'

type TableThemeProviderProps = {
  children: React.ReactNode,
  theme: DefaultTheme,
}

export const defaultTheme: DefaultTheme = {
  'border-b': 'border-bottom-width: 1px;',
  colors: {
    lightGray: 'rgba(229, 231, 235, 1)',
    gray: 'rgba(156, 163, 175, 1)',
    darkGray: 'rgba(55, 65, 81, 1)',
  },
  elements: {
    table: {
      minWidth: '100%',
      '& > * + *': {
        borderTopWidth: '1px',
        borderBottomWidth: '1px',
        borderColor: 'rgba(229, 231, 235)',
      }
    },
    tbody: {
      background: 'white',
      '& > * + *': {
        borderTopWidth: '1px',
        borderBottomWidth: '1px',
        // borderColor: 'rgba(229, 231, 235)'
        borderColor: "green",
      }
    },
    thead: {
      backgroundColor: 'rgba(249, 250, 251)',
    },
    tr: {
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderColor: 'rgba(245, 231, 235)'
    },
    th: {
      padding: '.75rem 1.5rem .75rem 1.5rem',
      textAlign: 'left',
      fontSize: '.75rem',
      lineHeight: '1rem',
      fontWeight: '500',
      color: 'rgba(107, 114, 128)',
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      '&:first-child': {
        textAlign: 'center',
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        borderColor: 'rgba(229, 231, 235)',

      }
    },
    td: {
      padding: '.75rem 1.5rem .75rem 1.5rem',
      fontSize: '.75rem',
      lineHeight: '1rem',
      fontWeight: '500',
      '&:first-child': {
        width: '2rem',
        textAlign: 'center',
      }
    },
  },
  screens: {
    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  shadow: `
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  `,
}

export const TableThemeProvider= ({ children, theme = defaultTheme }: TableThemeProviderProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

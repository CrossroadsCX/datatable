import React from 'react'
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components'

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
    header: 'rgba(249, 250, 251)',
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

export const GlobalStyle = createGlobalStyle`
  // Table Element Styling
  table {
    min-width: 100%;

    & > * + * {
      --tw-divide-y-reverse: 0;
      border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
      border-bottom-width: calc(1px * var(--tw-divide-y-reverse));

      --tw-divide-opacity: 1;
      border-color: rgba(229, 231, 235, var(--tw-divide-opacity));
    }

    thead {
      --tw-bg-opacity: 1;
      background-color: ${props => props.theme.colors.header};
    }

    tbody {
      background: white;

      & > * + * {
        // Divide-Y
        --tw-divide-y-reverse: 0;
        border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
        border-bottom-width: calc(1px * var(--tw-divide-y-reverse));

        // Divide Gray 200
        --tw-divide-opacity: 1;
        border-color: rgba(229, 231, 235, var(--tw-divide-opacity));
      }
    }

    tr {
      --tw-divide-y-reverse: 0;
      border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
      border-bottom-width: calc(1px * var(--tw-divide-y-reverse));

      --tw-border-opacity: 1;
      border-color: rgba(229, 231, 235, var(--tw-border-opacity));
    }

    th {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      text-align: left;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 500;
      --tw-text-opacity: 1;
      color: rgba(107, 114, 128, var(--tw-text-opacity));
      text-transform: uppercase;
      letter-spacing: 0.05em;

      &:first-child {
        text-align:center;
        border-left-width: 1px;
        border-right-width: 1px;
        --tw-border-opacity: 1;
        border-color: rgba(229, 231, 235, var(--tw-border-opacity));
      }
    }

    td {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: .75rem;
      padding-bottom: .75rem;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 500;

      &:first-child {
        width: 2rem;
        text-align:center;
      }
    }
  }
`

export const TableThemeProvider= ({ children, theme = defaultTheme }: TableThemeProviderProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

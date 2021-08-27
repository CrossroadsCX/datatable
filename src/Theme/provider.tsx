import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    lightGray: 'rgba(229, 231, 235, 1)',
    gray: 'rgba(156, 163, 175, 1)',
    darkGray: 'rgba(55, 65, 81, 1)'
  },
}

export const TableThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

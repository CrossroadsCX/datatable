import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Record<string, unknown> {
    colors: {
      lightGray: string
      gray: string
      darkGray: string
      header: string
    },
    components: {
      DataTableStyles: Record<string, unknown>
    },
    shadow?: string,
    screens: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    },
  }
}

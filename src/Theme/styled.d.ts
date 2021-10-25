import 'styled-components'

declare module 'styled-components' {

  type ElementType = Record<string, Record<string, string> | string>
  export interface DefaultTheme extends Record<string, unknown> {
    'border-b': string
    colors: {
      lightGray: string
      gray: string
      darkGray: string
    },
    elements?: {
      table?: ElementType
      tbody?: ElementType
      thead?: ElementType
      tr?: ElementType
      th?: ElementType
      td?: ElementType
    },
    overrides?: {},
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

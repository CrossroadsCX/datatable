import styled from 'styled-components'

export const GlobalStyle = styled.div`
  // Table Element Styling
  table {
    ${props => props.theme.elements?.table && props.theme.elements.table}

    & > * + * {
      ${props => props.theme.elements?.table && props.theme.elements.table['& > * + *'] }
    }

    thead {
      ${props => props.theme.elements?.thead && props.theme.elements.thead}
    }

    tbody {
      ${props => props.theme.elements?.tbody && props.theme.elements.tbody}
    }

    tr {
      ${props => props.theme.elements?.tr && props.theme.elements.tr}
    }

    th {
      ${props => props.theme.elements?.th && props.theme.elements.th }
      &:first-child {
        ${props => props.theme.elements?.th && props.theme.elements.th['&:first-child']}
      }
    }

    td {
      ${props => props.theme.elements?.td && props.theme.elements.td}

      &:first-child {
        ${props => props.theme.elements?.td && props.theme.elements.td['&:first-child']}
      }
    }
  }
`

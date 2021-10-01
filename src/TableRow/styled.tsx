import React from 'react'
import styled from 'styled-components'

import { TableRow } from './TableRow'

export const StyledTableRow = styled(TableRow)`
  td {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    padding-top: .75rem;
    padding-bottom: .7rem;

    font-size: .75rem;
    line-height: 1rem;

    font-weight: 500;

    &:first-child {

    }
  }
`

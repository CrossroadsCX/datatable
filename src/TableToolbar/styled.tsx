import React from 'react'
import styled from 'styled-components'

export const StyledTableToolbar = styled.div`
  display:flex;
  width:100%;
  margin:1rem;

  svg {
    height: 1.5rem;
    width: 1.5rem;

    margin-left: .5rem;
    margin-right: .5rem;

    color: ${props => props.theme.colors.lightGray};

    &.enabled {
      color: ${props => props.theme.colors.gray};
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.colors.darkGray};
      }
    }
  }
`

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

    color: rgba(229, 231, 235, 1);

    &.enabled {
      color: rgba(156, 163, 175, 1);
      cursor: pointer;

      &:hover {
        color: rgba(55, 65, 81, 1);
      }
    }
  }
`

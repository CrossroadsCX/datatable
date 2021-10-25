import React from 'react'
import styled from 'styled-components'

export const StyledDataTable = styled.div`
  overflow-x: auto;
  padding-top:.5rem;
  padding-bottom: .5rem;

  @media(min-width: ${props => props.theme.screens.sm}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media(min-width: ${props => props.theme.screens.lg}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sort-indicator {
    height: 2rem;
  }

  table{
    padding-bottom: .5rem;
    vertical-align:middle;
    min-width:100%;
    ${props => props.theme.shadow}
    ${props => props.theme['border-b']}
    overflow: hidden;
    --tw-border-opacity: 1;
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));

    @media(min-width: ${props => props.theme.screens.sm}) {
      ${props => props.theme.overrides }
    }
    ${props => props.theme.overrides }

    th{
      position: sticky;
    }
  }
`;

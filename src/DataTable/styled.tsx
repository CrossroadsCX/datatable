import React from 'react'
import styled from 'styled-components'

export const StyledDataTable = styled.div`
  display: flex;
  flex-direction: column;

  .sort-indicator {
    height: 2rem;
  }

  // Table Wrapper Styling
  .table-wrapper {
    margin-top: -.5rem;
    margin-bottom: -.5rem;
    overflow-x: auto;

    @media (min-width: ${props => props.theme.screens.sm}) {
      margin-left: -1.5rem;
      margin-right: -1.5rem;
    }

    @media (min-width: ${props => props.theme.screens.lg}) {
      margin-left: -2rem;
      margin-right: -2rem;
    }

    .table-wrapper-inner {
      padding-top:.5rem;
      padding-bottom: .5rem;
      vertical-align:middle;
      display: inline-block;
      min-width:100%;

      @media(min-width: ${props => props.theme.screens.sm}) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      @media(min-width: ${props => props.theme.screens.lg}) {
        padding-left: 2rem;
        padding-right: 2rem;
      }

      .table-wrapper-border {
        ${props => props.theme.shadow}
        ${props => props.theme['border-b']}
        overflow: hidden;

        --tw-border-opacity: 1;
        border-color: rgba(229, 231, 235, var(--tw-border-opacity));

        @media(min-width: ${props => props.theme.screens.sm}) {
          ${props => props.theme.overrides && props.theme.overrides['.table-wrapper-border'] }
        }

        ${props => props.theme.overrides && props.theme.overrides['.table-wrapper-border'] }
      }
    }
  }
`;

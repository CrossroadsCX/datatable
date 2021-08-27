import React from 'react'
import styled from 'styled-components'

export const StyledDataTable = styled.div`
  display:flex;
  flex-direction:column;

  // Table Wrapper Styling
  & > div {
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

    & > div {
      padding-top:.5rem;
      padding-bottom: .5rem;

      & > div {

      }
    }
  }
`;

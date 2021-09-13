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

      & > div {
        ${props => props.theme.shadow}
        ${props => props.theme['border-b']}
        overflow:hidden;

        --tw-border-opacity: 1;
        border-color: rgba(229, 231, 235, var(--tw-border-opacity));

        @media(min-width: ${props => props.theme.screens.sm}) {
          border-radius: 0.5rem;
        }
      }
    }
  }

  // Table Element Styling
  table {
    min-width: 100%;

    & > * + * {
      --tw-divide-y-reverse: 0;
      border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
      border-bottom-width: calc(1px * var(--tw-divide-y-reverse));

      --tw-divide-opacity: 1;
      border-color: rgba(229, 231, 235, var(--tw-divide-opacity));
    }

    thead {
      --tw-bg-opacity: 1;
      background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
    }

    tbody {
      background: white;

      & > * + * {
        // Divide-Y
        --tw-divide-y-reverse: 0;
        border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
        border-bottom-width: calc(1px * var(--tw-divide-y-reverse));

        // Divide Gray 200
        --tw-divide-opacity: 1;
        border-color: rgba(229, 231, 235, var(--tw-divide-opacity));
      }
    }

    tr {
      --tw-divide-y-reverse: 0;
      border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
      border-bottom-width: calc(1px * var(--tw-divide-y-reverse));

      --tw-border-opacity: 1;
      border-color: rgba(229, 231, 235, var(--tw-border-opacity));
    }

    th {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      text-align: left;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 500;
      --tw-text-opacity: 1;
      color: rgba(107, 114, 128, var(--tw-text-opacity));
      text-transform: uppercase;
      letter-spacing: 0.05em;

      &:first-child {
        text-align:center;
        border-left-width: 1px;
        border-right-width: 1px;
        --tw-border-opacity: 1;
        border-color: rgba(229, 231, 235, var(--tw-border-opacity));
      }
    }

    td {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: .75rem;
      padding-bottom: .75rem;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 500;

      &:first-child {
        width: 2rem;
        text-align:center;
      }
    }
  }
`;

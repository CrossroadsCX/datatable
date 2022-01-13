import styled from 'styled-components'

export const StyledPagination = styled.div`
  display: flex;
  width:100%;
  align-items: center;
  justify-content: end;
  margin-top: 10px;
  color: ${props => props.theme.colors.gray};
  svg {
    height: 1.5rem;
    width: 1.5rem;
    padding: 5px;
    color: ${props => props.theme.colors.lightGray};

    &.enabled {
      color: ${props => props.theme.colors.gray};
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.colors.darkGray};
      }
    }
  }
  select {
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 15px;
    padding-top: 5px;
    border-radius: 5px;
    border-color: ${props => props.theme.colors.lightGray};
  }
  input{
    padding: 5px;
    border-radius: 5px;
    border-color:  ${props => props.theme.colors.lightGray};
    border-width: 1px;
    background-color: transparent;
  }
`

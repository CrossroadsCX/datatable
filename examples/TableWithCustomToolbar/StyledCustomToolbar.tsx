import styled from 'styled-components'

export const StyledCustomToolbar = styled.div`
display:flex;
width:100%;
margin:1rem;

svg {
  height: 1.5rem;
  width: 1.5rem;

  margin-left: .5rem;
  margin-right: .5rem;

  color: gray;

  &.enabled {
    color:  blue;
    cursor: pointer;

    &:hover {
      color: #7FFFD4;
    }
  }
}
`

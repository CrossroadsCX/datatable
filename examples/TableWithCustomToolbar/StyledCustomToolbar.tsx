import styled from 'styled-components'

export const StyledCustomToolbar = styled.div`
display:flex;
width:100%;
margin:1rem;

select {
  margin-top: 5px;
  display: block;
  padding-left: 10px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 5px;
}
`

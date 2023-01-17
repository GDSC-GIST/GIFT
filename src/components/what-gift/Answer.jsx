import React  from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
display:
outline: none;
border: none;
color: black;
cursor: pointer;
padding: 1rem 2.5rem;
margin: 1% 25%;

height: 30%;
width: 50%;
font-size: 1rem;

background: #bebebe;
&:active {
  background: #828282;
}

`;

function Answer({children, ...rest}) {
    return <StyledButton {...rest}>{children}</StyledButton>;

}

export default Answer;

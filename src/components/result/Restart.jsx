import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Button = styled.button`
    background: #42e870;
    width: 653px;
    height:124px;
    font-size: 25px;
    font-weight: bold;
    outline: none;
    border: none;
`;

export default function Restart(
    ) {
    return (
      <Button>
      <Link to='/' style={{textDecoration : 'none'}}>
        다시 검사하기
      </Link>
      </Button>
    );
}


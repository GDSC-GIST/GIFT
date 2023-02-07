import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Error = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin : 80px auto;
`;

function ErrorPage() {
    return (
        <Error>
            <br /><br /><br />
        <h2>없는 페이지입니다!</h2>
        <Link to={'/'}>
            <h3> 첫 화면으로 돌아가기</h3>
        </Link>
        
        </Error>
    );
}

export default ErrorPage;
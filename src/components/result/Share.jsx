import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,} from 'react-share';

const ButtonWrapper = styled.div`
    margin : .2em;
`;

const Box = styled.div`
    display: flex;
`;


function Share() {
    const shareUrl = 'https://localhost:3000/result';

    return (
        <div>
            <Box>
            <ButtonWrapper>
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </ButtonWrapper>
            <ButtonWrapper>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </ButtonWrapper>
            </Box>
        </div>
    );
}

export default Share;
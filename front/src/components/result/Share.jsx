import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,} from 'react-share';
import { CopyToClipboard} from 'react-copy-to-clipboard';
import ShareKaKao from './ShareKakao';
const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap:8px;
    justify-content: center;
    align-items: center;
    margin-bottom : 50%;
`;

const Box = styled.div`
    display: flex;
    flex-direction : column;
    align-items : center;
`;

const URLshare = styled.div`
    width : 48px;
    height : 48px;
    color : white;
    border-radius: 24px;
    border : 0px;
    font-weight: 800;
    font-size: 18px;
    cursor : pointer;
    background-color : #7362ff;
    &:hover {
        background-color : #a99fee;
    }
    text-align : center;
    line-height : 48px;
`;

function Share() {
    const shareUrl = window.location.href;

    return (
        <div>
            <Box>
            <ButtonWrapper>
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={48} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={48} round />
                </TwitterShareButton>
                <CopyToClipboard text={shareUrl}>
                    <URLshare>URL</URLshare>
                </CopyToClipboard>
                <ShareKaKao />
            </ButtonWrapper>
            </Box>
            
        </div>
    );
}

export default Share;

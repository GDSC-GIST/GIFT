import React, { useEffect } from 'react';
import kakaotalk_icon from '../../assets/kakaotalk_icon.png';
import styled from 'styled-components';
import { useScript } from './hooks';

const KakaoIcon= styled.img`
  width : 48px;
  height : 48px;
  border-radius: 24px;

`;

const KaKaoButton = styled.button`
  cursor: pointer;
  background : none;
  border: none;
`;

function ShareKaKao () {

	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	
	
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			if (!window.Kakao.isInitialized()) {
				window.Kakao.init("d6a3544eb4ba298ff8a97e435df8251f");
			}
		}
	}, [status]);	

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
        requestUrl: 'http://localhost:3000/result',
    });
};

  return (
    <KaKaoButton onClick={handleKakaoButton}>
      <KakaoIcon src={kakaotalk_icon}></KakaoIcon>
    </KaKaoButton>
  )
}

export default ShareKaKao;
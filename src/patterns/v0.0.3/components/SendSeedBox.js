import React from 'react';
import Wrapper from './SendSeedBoxStyles';

const SendSeedBox = () => (
  <Wrapper className="ad-2">
    <img src="./img/fourth.png" alt="" className="freeseed" />
    <div className="ad-sign">
      <div className="title">SEND SEED</div>
      <div className="text">휴대폰 번호로 캐시 송금하기</div>
    </div>
    <div className="ad-container">
      <div className="content">
        회원, 비회원 상관없이
        <br />
        누구에게나 캐시 송금
      </div>
      <div className="link">캐시보내기 바로가기</div>
    </div>
  </Wrapper>
);

export default SendSeedBox;

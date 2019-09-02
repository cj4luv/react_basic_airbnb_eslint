import React from 'react';
import Wrapper from './FreeSeedBoxStyles';

const freeseed = './img/freeseed.png';

const FreeSeedBox = () => (
  <Wrapper>
    <img src={freeseed} alt="" className="freeseed" />
    <div className="ad-sign">
      <div className="title">FREE SEED</div>
      <div className="text">보기만 해도 무료 캐시충전</div>
    </div>
    <div className="ad-container">
      <div className="content">
        지금, 무료 획득 가능한
        <br />
        시드는 얼마?
      </div>
      <div className="link">무료충전소 바로가기</div>
    </div>
  </Wrapper>
);

export default FreeSeedBox;

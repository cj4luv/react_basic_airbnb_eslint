import React from 'react';
import Wrapper from './SeedPayBoxStyles';

const SeedPayBox = () => (
  <Wrapper>
    <div className="ad-sign">
      <div className="title">SEED PAY</div>
      <div className="text">쉽고 빠른 결제 시드페이로 하자!</div>
    </div>
    <div className="ad-container">
      <div className="content-container">
        <img src="./img/second.png" alt="" className="thirth" />
        <div className="title">결제하기</div>
        <div className="text">
          온라인, 오프라인에서
          <br />
          캐시 결제하기
        </div>
        <img className="zero" src="./img/zero.png" alt="" />
      </div>
      <div className="content-container">
        <img src="./img/thirth.png" alt="" className="thirth" />
        <div className="title">편의점 결제</div>
        <div className="text">
          전국 편의점 어디서나
          <br />
          캐시 사용하기
        </div>
        <div className="market_logos">
          <img className="se" src="./img/se.png" alt="" />
          <img className="cu" src="./img/cu.png" alt="" />
          <img className="gs" src="./img/gs.png" alt="" />
        </div>
      </div>
    </div>
  </Wrapper>
);

export default SeedPayBox;

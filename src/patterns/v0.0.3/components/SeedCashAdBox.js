import React from 'react';
import Wrapper from './SeedCashAdBoxStyles';

const SeedCashAdBox = () => (
  <Wrapper>
    <div className="ad-sign">
      <div className="title">SEED CASH</div>
      <div className="text">게 사용해보세요!</div>
    </div>
    <div className="ad-container">
      <div
        className="content-container"
        style={{
          backgroundImage: 'url(./img/image-2.png)',
          backgroundPosition: '90% 0%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="title">신용캐시</div>
        <div className="text">
          신용평가 없이
          <br />
          바로 캐시 충전!
        </div>
      </div>
      <div
        className="content-container"
        style={{
          backgroundImage: 'url(./img/image-3.png)',
          backgroundPosition: '100% 20px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="title">제로페이</div>
        <div className="text">
          밥 먹고,
          <br />
          QR 결제하자!
        </div>
      </div>
    </div>
  </Wrapper>
);

export default SeedCashAdBox;

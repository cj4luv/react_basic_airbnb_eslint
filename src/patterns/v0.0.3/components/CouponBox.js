import React from 'react';
import Wrapper from './CouponBoxStyles';

const CouponBox = () => (
  <Wrapper>
    <img className="img_coupon" src="./img/image-5.png" alt="핸드폰" />
    <div className="ad-sign">
      <div className="title">MY COUPON</div>
      <div className="text">쿠폰관리, 선물하기</div>
    </div>
    <div className="ad-container">
      <div className="content">
        안 쓰는 쿠폰,
        <br />
        팔았더니 쏠쏠하게 돈이 되네!
      </div>
      <div className="link">내 쿠폰 바로가기</div>
    </div>
  </Wrapper>
);

export default CouponBox;

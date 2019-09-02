import React from 'react';
import Wrapper from './GiftAdBoxStyles';

const GiftAdBox = () => (
  <Wrapper>
    <img
      className="gift_img"
      src="./img/image-4.png"
      alt="기프티콘"
    />
    <div className="ad-sign">
      <div className="title">GIFT SHOP</div>
      <div className="text">선물이 필요한 순간</div>
    </div>
    <div className="ad-container">
      <div className="content">
        시드캐시로
        <br />
        기프티콘 구매하기
      </div>
      <div className="link">기프티샵 바로가기</div>
    </div>
  </Wrapper>
);

export default GiftAdBox;

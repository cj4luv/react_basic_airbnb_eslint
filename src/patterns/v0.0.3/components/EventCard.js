import React from 'react';
import Wrapper from './EventCardStyles';

const EventCard = () => (
  <Wrapper>
    <div className="content-1">
      <div className="content-container">
        <div className="text">
          <span>SEEDPAY</span>
          에서
          <br />
          낮은 이자로 준비해보세요.
        </div>
        <div className="text active">
          최대
          <br />
          2,000,000원!
        </div>
      </div>
      <div className="content-container">
        <div className="circle" />
      </div>
    </div>
  </Wrapper>
);

export default EventCard;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../elements/button/Button';
import Wrapper from './CashCardStyles';
import returnComma from '../../../common/Money';

class CashCard extends PureComponent {
  render() {
    const { handleClick, total } = this.props;
    return (
      <Wrapper>
        <div className="wallet">
          <div className="title">365일 24시간 언제든 사용 가능!</div>
          <div className="content">
            <div className="content-container">
              <div className="cnt-title">사용가능금액</div>
              <div className="cnt-won">
                {returnComma(total)}
                {' '}
                <span>원</span>
              </div>
            </div>
            <div className="content-container">
              <Button className="link" onClick={() => handleClick(1)}>
                사용하기
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

CashCard.propTypes = {
  handleClick: PropTypes.func,
  total: PropTypes.number,
};

CashCard.defaultProps = {
  handleClick: () => console.log('CashCard 사용하기 버튼입니다.'),
  total: 0,
};

export default CashCard;

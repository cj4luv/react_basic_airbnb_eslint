import React, {
  PureComponent, Fragment, useState, useEffect,
} from 'react';
import { withRouter } from 'react-router-dom';

import * as PropsTypes from '../../common/PropsTypes';
import * as DefaultProps from '../../common/DefaultProps';

import Wrapper from './HomeStyle';
import Button from '../../elements/button/Button';
import Header from '../../containers/mainHeader/MainHeader';
import Footer from '../../containers/bottomMenu/BottomMenu';
import HomeController from './Controller';

import withHeaders from '../../common/withHeaders';

const freeseed = './img/freeseed.png';

const CashCard = (props) => {
  // const interceptor = () => {};
  const [data, setData] = useState(null);
  const controller = new HomeController();

  useEffect(() => {
    async function fetchData() {
      const actions = {
        setState: setData,
        props,
      };
      const myWallet = await controller.cashCadInitData(props.headers, actions);
      console.log('effect, didmount', myWallet);
      setData(myWallet.results);
    }
    fetchData();
    return () => {
      console.log('cleanup, unmount');
      // console.log(data);
    };
  }, []);

  const { history } = props;

  const handleClick = async () => {
    console.log('handleClick');
    await controller.goToDirection(
      () => history.push('/cash/history'),
      () => history.push('/login'),
    );
  };
  // console.log('data', data);

  return (
    <div className="home-container">
      <div className="wallet">
        <div className="title">365일 24시간 언제든 사용 가능!</div>
        <div className="content">
          <div className="content-container">
            <div className="cnt-title">사용가능금액</div>
            <div className="cnt-won">
              {data ? data.total_remain : 0}
              {' '}
              <span>원</span>
            </div>
          </div>
          <div className="content-container">
            <Button className="link" onClick={handleClick}>
              사용하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

CashCard.propTypes = {
  history: PropsTypes.history,
  headers: PropsTypes.headers,
};

CashCard.defaultProps = {
  history: DefaultProps.history,
  headers: DefaultProps.headers,
};

const withHeadersCashCard = withHeaders(CashCard);
const WithCashCard = withRouter(withHeadersCashCard);

const EventCard = () => (
  <div className="home-container">
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
  </div>
);

const SeedCashAdBox = () => (
  <div
    className="ad-1"
    style={{
      backgroundImage: 'linear-gradient(to top, #7f7fd5, #86a8e7 50%, #91eae4)',
    }}
  >
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
  </div>
);

const GiftAdBox = () => (
  <div
    className="ad-2"
    style={{
      backgroundImage: 'linear-gradient(to top, #f9f4d4, #f8f6df)',
      position: 'relative',
    }}
  >
    <img
      src="./img/image-4.png"
      alt="기프티콘"
      style={{
        width: 'calc(440px / 2)',
        position: 'absolute',
        top: '20px',
        right: '24px',
      }}
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
  </div>
);

const CouponBox = () => (
  <div
    className="ad-2"
    style={{ backgroundColor: '#ffecea', position: 'relative' }}
  >
    <img
      src="./img/image-5.png"
      alt="핸드폰"
      style={{
        width: 'calc(380px / 2)',
        position: 'absolute',
        top: '15px',
        right: '15px',
      }}
    />
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
  </div>
);

const SeedPayBox = () => (
  <div
    className="ad-1"
    style={{
      backgroundImage: 'linear-gradient(to top, #ddec9b, #feddc6)',
    }}
  >
    <div className="ad-sign">
      <div className="title">SEED PAY</div>
      <div className="text">쉽고 빠른 결제 시드페이로 하자!</div>
    </div>
    <div className="ad-container">
      <div
        className="content-container"
        style={{ position: 'relative', padding: '20px 20px' }}
      >
        <img src="./img/second.png" alt="" className="thirth" />
        <div className="title">결제하기</div>
        <div className="text">
          온라인, 오프라인에서
          <br />
          캐시 결제하기
        </div>
        <img className="zero" src="./img/zero.png" alt="" />
      </div>
      <div
        className="content-container"
        style={{ position: 'relative', padding: '20px 20px' }}
      >
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
  </div>
);

const SendSeedBox = () => (
  <div
    className="ad-2"
    style={{
      backgroundImage: 'linear-gradient(to top, #8be0ff, #ffffff)',
    }}
  >
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
  </div>
);

const FreeSeedBox = () => (
  <div
    className="ad-2"
    style={{
      backgroundImage: 'linear-gradient(to top, #fec1ba, #ffecea 72%)',
    }}
  >
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
  </div>
);

const AdContainer = () => (
  <div className="ad">
    <SeedCashAdBox />
    <GiftAdBox />
    <CouponBox />
    <SeedPayBox />
    <SendSeedBox />
    <FreeSeedBox />
  </div>
);

const Body = () => (
  <Wrapper>
    <WithCashCard />
    <EventCard />
    <AdContainer />
  </Wrapper>
);

class Home extends PureComponent {
  render() {
    console.log('PureComponent 룰때문에 일단 콘솔로그에 추가', this.props);
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;

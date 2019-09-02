import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Wrapper from './HomeStyle';
import Header from '../../containers/mainHeader/MainHeader';
import Footer from '../../containers/bottomMenu/BottomMenu';

import CashCard from './components/CashCard';
import EventCard from './components/EventCard';
import SeedCashAdBox from './components/SeedCashAdBox';
import GiftAdBox from './components/GiftAdBox';
import CouponBox from './components/CouponBox';
import SeedPayBox from './components/SeedPayBox';
import SendSeedBox from './components/SendSeedBox';
import FreeSeedBox from './components/FreeSeedBox';

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  total: state.wallet.totalRemain,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(push('/cash/history')),
});

const WithWalletCashCard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CashCard);

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
    <WithWalletCashCard />
    <EventCard />
    <AdContainer />
  </Wrapper>
);

const Home = () => (
  <Fragment>
    <Header />
    <Body />
    <Footer />
  </Fragment>
);

export default withRouter(Home);

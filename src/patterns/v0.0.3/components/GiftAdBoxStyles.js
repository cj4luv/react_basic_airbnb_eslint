import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f5f5f5;
  border: solid 1px #ddd;
  border-right: none;
  border-left: none;
  position: relative;
  padding: calc(90px / 2) calc(40px / 2);
  margin-bottom: calc(148px / 2);
  background-image: linear-gradient(to top, #f9f4d4, #f8f6df);
  position: relative;

  .gift_img {
    width: calc(440px / 2);
    position: absolute;
    top: 20px;
    right: 24px;
  }

  .ad-sign {
    position: absolute;
    top: -12px;

    .title {
      font-size: calc(36px / 2);
      font-weight: bold;
      color: #000;
      margin-bottom: calc(19px / 2);
    }

    .text {
      font-size: calc(24px / 2);
    }
  }

  .ad-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-flow: wrap column;

    .content {
      line-height: 1.5;
      font-size: calc(26px / 2);
      margin-top: calc(52px / 2);
      margin-bottom: calc(94px / 2);
    }

    .link {
      font-size: calc(22px / 2);
    }
  }
`;

export default Wrapper;

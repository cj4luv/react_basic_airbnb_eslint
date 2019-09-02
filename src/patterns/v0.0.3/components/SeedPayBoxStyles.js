import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f5f5f5;
  border: solid 1px #ddd;
  border-right: none;
  border-left: none;
  position: relative;
  padding: calc(90px / 2) calc(40px / 2);
  margin-bottom: calc(148px / 2);
  background-image: linear-gradient(to top, #ddec9b, #feddc6);

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
    .content-container {
      background-color: #fff;
      border: solid 1px #ddd;
      padding: calc(87px / 2) calc(30px / 2);
      margin-bottom: calc(50px / 2);
      position: relative;
      padding: 20px 20px;

      .title {
        font-size: calc(36px / 2);
        color: #000;
        margin-bottom: calc(40px / 2);
      }

      .text {
        font-size: calc(24px / 2);
        color: #999;
        line-height: 1.3;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Wrapper;

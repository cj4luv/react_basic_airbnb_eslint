import styled from 'styled-components';

const Wrapper = styled.div`
  padding: calc(30px / 2) calc(40px / 2);

  .wallet {
    border: solid 1px #e1e1e1;
    border-radius: calc(10px / 2);
    box-shadow: calc(3.7px / 2) calc(1.5px / 2) calc(8.7px / 2) calc(0.3px / 2)
      rgba(181, 181, 181, 0.49);
    overflow: hidden;

    .title {
      height: calc(80px / 2);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: #f8c200;
      font-size: calc(26px / 2);
      color: #fff;
      letter-spacing: -0.7px;
      font-weight: 600;
      padding: 0 calc(32px / 2);
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: calc(50px / 2) calc(30px / 2);

      .content-container {
        .cnt-title {
          font-size: calc(36px / 2);
          letter-spacing: -0.9px;
          margin-bottom: calc(35px / 2);
        }

        .cnt-won {
          font-size: calc(48px / 2);
          letter-spacing: -1.2px;
          font-weight: bold;

          span {
            font-size: calc(30px / 2);
            letter-spacing: -0.8px;
            font-weight: normal;
            margin-left: calc(17px / 2);
          }
        }

        .link {
          font-size: calc(30px / 2);
          letter-spacing: -0.8px;
          text-decoration: none;
          color: #000;
          position: relative;

          &:after {
            content: '';
            width: calc(120px / 2);
            height: calc(8px / 2);
            background-color: #f8c200;
            position: absolute;
            bottom: 1px;
            left: -5px;
            z-index: -1;
          }
        }
      }
    }
  }
`;

export default Wrapper;

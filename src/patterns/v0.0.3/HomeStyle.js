import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: calc(100px / 2);
  
  .ad {
    margin-top: calc(80px / 2);

    .ad-1 {
      background-color: #f5f5f5;
      border: solid 1px #ddd;
      border-right: none;
      border-left: none;
      position: relative;
      padding: calc(90px / 2) calc(40px / 2);
      margin-bottom: calc(148px / 2);

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
    }

    .ad-2 {
      background-color: #f5f5f5;
      border: solid 1px #ddd;
      border-right: none;
      border-left: none;
      position: relative;
      padding: calc(90px / 2) calc(40px / 2);
      margin-bottom: calc(148px / 2);

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
    }
  }
  .freeseed {
    width: 204px;
    height: 210px;
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .thirth {
    width: 130px;
    height: 130px;
    position: absolute;
    top: 10px;
    right: 15px;
  }
  .market_logos {
    display: flex;
    align-items: center;
    margin-top: 30px;

    .se {
      width: 20px;
      height: 20px;
    }
    .cu {
      margin-left: 10px;
      width: 25px;
      height: 11px;
    }
    .gs {
      margin-left: 10px;
      width: 28.5px;
      height: 12.5px;
    }
  }
  .zero {
    margin-top: 40px;
    width: 41px;
    height: 11px;
  }
`;

export default Wrapper;

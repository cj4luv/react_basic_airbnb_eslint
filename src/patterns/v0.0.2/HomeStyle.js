import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: calc(100px / 2);

  .home-container {
    padding: calc(30px / 2) calc(40px / 2);

    .wallet {
      border: solid 1px #e1e1e1;
      border-radius: calc(10px / 2);
      box-shadow: calc(3.7px / 2) calc(1.5px / 2) calc(8.7px / 2)
        calc(0.3px / 2) rgba(181, 181, 181, 0.49);
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

    .content-1 {
      border: solid 1px #e1e1e1;
      border-radius: calc(10px / 2);
      box-shadow: calc(3.7px / 2) calc(1.5px / 2) calc(8.7px / 2)
        calc(0.3px / 2) rgba(181, 181, 181, 0.49);
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: calc(60px / 2) calc(40px / 2);

      .content-container {
        &:first-child {
          padding-right: calc(70px / 2);
        }

        .text {
          color: #454545;
          font-size: calc(23px / 2);
          line-height: 1.3;

          &:first-child {
            margin-bottom: calc(20px / 2);
            font-size: calc(25px / 2);
          }

          span {
            font-weight: bold;
          }

          &.active {
            color: #f49d1c;
            font-size: calc(36px / 2);
            margin-top: calc(40px / 2);
          }
        }

        .circle {
          width: calc(274px / 2);
          height: calc(274px / 2);
          /* background-color: #f5f5f5; */
          border: none;
          /* border: solid 1px #ddd; */
          border-radius: 50%;
          background-image: url(./img/image-1.png);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
    }
  }

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

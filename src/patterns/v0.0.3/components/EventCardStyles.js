import styled from 'styled-components';

const Wrapper = styled.div`
  padding: calc(30px / 2) calc(40px / 2);
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
`;

export default Wrapper;

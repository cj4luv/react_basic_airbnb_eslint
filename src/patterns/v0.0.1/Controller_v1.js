import { getToken } from './Auth';
import RestAPI from '../../common/RestAPI';
import Fetch from '../../common/HipayFetch';

class Controller {
  onLogin = async () => {
    await getToken((res) => {
      console.log('로그인 성공!');
    }, () => {
      console.log('Controller에서 getToken 실패');
      this.history.replace('/onLogin');
    });
  };

  userWalletGetMy = async () => {
    // api값을 정의한다.
    const api = {
      ...RestAPI.model_desc.user_wallet_get_my,
      query: '',
    };

    // 요청하고 응답값을 가져온다.
    try {
      const res = await Fetch(api);

      // 200이 아닐때의 예외 처리들이다.
      // 문제점은 너무 많은 콜백 종류가 너무 많아 진다.
      // 해결 방안 결국 이 값을 처리하는 부분은 해당 리액트 뷰에서 해결되어야 한다.
      // 페이지 별로 리액트 컴포넌트 단위로 나눠야 한다.
      // 위 해결방안으로 생기는 문제점: 예외처리 모듈화가 힘들어 진다.
      if (res.status !== 200) {
        if (res.status === 1100) {
          // acton();
          return console.log(res);
        }
        if (res.status === 1161) {
          // acton();
          return console.log(res);
        }
      }

      // console.log('userWalletGetMy', res);
      return res;
    } catch (e) {
      // 서버통신 자체가 리젝 날때 처리
      return console.log('e', e);
    }
  };
}

export default Controller;

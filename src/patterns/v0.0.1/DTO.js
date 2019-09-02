import Fetch from '../../common/HipayFetch';

// try catch 구문 간소화
const DTO = async (api) => {
  // 요청하고 응답값을 가져온다.
  try {
    const res = await Fetch(api);
    return res;
  } catch (e) {
    // 서버통신 자체가 리젝 날때 처리
    console.log('http request err', e);
    const obj = {
      status: -10000,
      results: e,
    };
    return obj;
  }
};

export default DTO;

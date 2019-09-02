import {
  Get, Post, Put, Delete,
} from './fetch';

// try catch 구문 간소화

/**
 * @brief api properties
 * @param String method
 * @param String url
 * @param String query
 * @param Object body
 * @param headers headers
 * @return promise
 */
const DTO = async (api) => {
  // 요청하고 응답값을 가져온다.
  try {
    if (api.method === 'GET') {
      const res = await Get(api);
      return res;
    }
    if (api.method === 'POST') {
      const res = await Post(api);
      return res;
    }
    if (api.method === 'PUT') {
      const res = await Put(api);
      return res;
    }
    if (api.method === 'DELETE') {
      const res = await Delete(api);
      return res;
    }

    // console.log('DTO', api);
    return alert('Api 값확인 요망 잘못됨');
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

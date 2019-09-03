import { schema, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

import DTO from './DTO';

import { SERVER_URL } from '../common/Constants';

const API_ROOT = SERVER_URL;

/**
 * @brief api for normalize
 * @return Ojbejct
 */
async function callApiNormalize(apiInit, schemeInit) {
  // query 키가 apiInit에 존재하는지 체크 하는 함수 생성 필요
  try {
    const fullUrl = apiInit.url.indexOf(API_ROOT) === -1
      ? API_ROOT + apiInit.url
      : apiInit.url;

    const init = {
      ...apiInit,
      url: fullUrl,
    };

    const response = await DTO(init);
    const json = await response.json();

    if (!response.ok) {
      return Promise.reject(json);
    }

    const camelizedJson = camelizeKeys(json);

    const { results } = camelizedJson;

    console.log('camelizedJson', results);

    const normalizeJson = normalize(results, schemeInit);

    console.log('normalizeJson', normalizeJson);

    return { response: normalizeJson };
  } catch (error) {
    return { error: error || 'Something bad happened' };
  }
}

async function callApi(apiInit) {
  // query 키가 apiInit에 존재하는지 체크 하는 함수 생성 필요
  try {
    const fullUrl = apiInit.url.indexOf(API_ROOT) === -1
      ? API_ROOT + apiInit.url
      : apiInit.url;

    const init = {
      ...apiInit,
      url: fullUrl,
    };

    const response = await DTO(init);
    const json = await response.json();

    if (!response.ok) {
      return Promise.reject(json);
    }

    const camelizedJson = camelizeKeys(json);

    const { results } = camelizedJson;

    // console.log('camelizedJson', results);

    return { response: results };
  } catch (error) {
    return { error: error || 'Something bad happened' };
  }
}

// Read more about Normalizr: https://github.com/gaearon/normalizr
const userSchema = new schema.Entity('users', {}, { idAttribute: 'pidUser' });

// api services
export const fetchUser = apiInit => callApi(apiInit);
export const fetchWallet = apiInit => callApi(apiInit);

export const tem = apiInit => callApiNormalize(apiInit, userSchema);

import RestAPI from '../../common/RestAPI';
import DTO from './DTO';

export const getToken = async (headers) => {
  const api = {
    ...RestAPI.auth_desc.user_login,
    query: '',
    headers,
  };
  const res = await DTO(api);

  return res;
};

export const dummy = '';

import 'isomorphic-fetch';

export const request = async (url, options) => {
  const response = await fetch(url, options);

  return response;
};

/**
 * @brief api properties
 * @param String method
 * @param String url
 * @param String query
 * @param headers headers
 * @return promise
 */
export const Get = (api) => {
  const { headers } = api;
  const options = {
    method: api.method,
    headers,
  };
  // console.log('Get options', options);

  return request(api.url, options);
};

/**
 * @brief api properties
 * @param String method
 * @param String url
 * @param Object body
 * @param headers headers
 * @return promise
 */
export const Post = (api) => {
  const { headers } = api;
  const options = {
    method: api.method,
    headers,
  };
  // console.log('Post options', options);

  if (api.body) {
    options.body = JSON.stringify(api.body);
  }

  return request(api.url, options);
};

/**
 * @brief api properties
 * @param String method
 * @param String url
 * @param Object body
 * @param headers headers
 * @return promise
 */
export const Put = (api) => {
  const { headers } = api;
  const options = {
    method: api.method,
    headers,
  };
  // console.log('Put options', options);

  if (api.body) {
    options.body = JSON.stringify(api.body);
  }

  return request(api.url, options);
};

/**
 * @brief api properties
 * @param String method
 * @param String url
 * @param Object body
 * @param headers headers
 * @return promise
 */
export const Delete = (api) => {
  const { headers } = api;
  const options = {
    method: api.method,
    headers,
  };
  // console.log('Delete options', options);

  if (api.body) {
    options.body = JSON.stringify(api.body);
  }

  return request(api.url, options);
};

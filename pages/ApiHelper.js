import qs from 'query-string';

function getDefaultHeaders() {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return defaultHeaders;
}

export default function(
  endpoint,
  body = null,
  query_parameter = {},
  method = 'GET',
  headers = {},
) {
  let url = `${process.env.API_URL}/api/v1/${endpoint}`;
  if (method === 'GET' && Object.keys(query_parameter).length > 0) {
    url = `${url}?${qs.stringify(query_parameter)}`;
  }
  return fetch(url, {
    method,
    headers: {
      ...getDefaultHeaders(),
      ...headers,
    },
    body,
  })
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      return jsonResponse;
    })
    .catch(error => {
      throw error;
    });
}

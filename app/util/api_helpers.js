const api_url = 'http://localhost:3000/api/';

const json_token_header = (token) => (new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
  })
);

const _to_api = function(url, method, payload, token) {
  return fetch(api_url + url, {
    method: method,
    headers: json_token_header(token),
    body: JSON.stringify(payload)
  })
  .then(res => res.json());
}

// Payload should be a POJO, with all attributes nested
// under the name of the model that is being requested/
// modified/deleted.
// payload = {
//   user: {
//     email: 'email@email.email',
//     password: '********'
//   }
// }
// *_to_api() will return a promise object with a json-
// formatted PromiseValue.

export const post_to_api = function(url, payload, token) {
  return _to_api(url, 'POST', payload, token);
};

export const patch_to_api = function(url, payload, token) {
  return _to_api(url, 'PATCH', payload, token);
};

export const delete_to_api = function(url, payload, token) {
  return _to_api(url, 'DELETE', payload, token);
};

export const get_to_api = function(url, token) {
  return _to_api(url, 'GET', null, token);
};

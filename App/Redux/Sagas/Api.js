
function* postApi(obj) {
  const res = yield fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: obj.first,
      body: obj.second,
      userId: 1,
    }),
  })
    .then(response => response.json())
    .then(json => console.log(json))
  const boom = yield res.length > 0 ? res : []
  return boom;
}
export const Api = {
  postApi,getApi
}
function* getApi() {
  const res = yield fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: '',
  })
  .then(response => response.json())
  
  const posts = yield res.length > 0 ? res : []
  return posts;
}
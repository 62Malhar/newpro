
function* postApi(obj) {
  const res = yield fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: obj.first,
      body: obj.second
    }),
  })
    .then(response => response.json())
    .then(json => console.log(json))
  const posts = yield res.length > 0 ? res : []
  return posts;
}
export const Api = {
  postApi,fetchApi
}
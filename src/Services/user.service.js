const _url='https://jsonplaceholder.typicode.com'

const getUsers=()=>fetch(_url+'/users').then(value => value.json())

export {getUsers}
import axios from 'axios';

export const addUser = userData => {
  return axios.post('/api/users/register', userData);
};

// export const addUser = async (userData) => {
//   const response = await axios.post('/api/users/register', userData);
//   return response;
// };

// export const registerServiceSubmit = {
//   add: (userData, history) => {
//     return axios
//     .post('/api/users/register', userData)
//     .then(res =>  history.push('/login'))
//     .catch(err => err)
//   }
  // return axios
  // .post('/api/users/register', userData)
  // .then(res => res.data)
  // .catch(err => Promise.reject(err.response.data))
// }

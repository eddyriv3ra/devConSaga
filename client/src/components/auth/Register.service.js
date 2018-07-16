import axios from 'axios';

export const registerServiceSubmit = (userData) => {
  axios
  .post('/api/users/register', userData)
  .then(res => res.data)
  .catch(err => err.response.data)
}

import axios from 'axios';

export const profileHandleServiceSubmit = handle => {
  return axios.get(`/api/profile/handle/${handle}`)
};

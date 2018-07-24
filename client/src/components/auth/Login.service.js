import axios from 'axios';

export const loginServiceSubmit = userData => {
    return axios.post('/api/users/login', userData)
}

import axios from 'axios';

export const loginServiceSubmit = userData => {
    const response = axios.post('/api/users/login', userData)
    return response;
}

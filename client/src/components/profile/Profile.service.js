import axios from 'axios';

export const profileServiceSubmit = () => {
    return axios.get('/api/profile')
};

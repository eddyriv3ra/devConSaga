import axios from 'axios';

export const profileServiceSubmit = () => {
    const response = axios.get('/api/profile')
    return response;
};

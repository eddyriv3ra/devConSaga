import axios from 'axios';

export const profileCreateServiceSubmit = profileData => {
    return axios.post('/api/profile', profileData)
};

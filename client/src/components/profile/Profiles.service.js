import axios from 'axios';

export const allProfilesServiceSubmit = () => {
    return axios.get('/api/profile/all')
};

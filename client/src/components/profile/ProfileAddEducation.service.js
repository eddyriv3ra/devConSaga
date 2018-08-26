import axios from 'axios';

export const profileAddEducationSubmit = eduData => {
    return axios.post('/api/profile/education', eduData)
};

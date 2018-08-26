import axios from 'axios';

export const profileAddExperienceSubmit = expData => {
    return axios.post('/api/profile/experience', expData)
};

import axios from 'axios';

export const deleteExperienceService = id => {
    return axios.delete(`/api//profile/experience/${id}`)
};

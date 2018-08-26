import axios from 'axios';

export const deleteEducationService = id => {
    return axios.delete(`/api//profile/education/${id}`)
};

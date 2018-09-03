import axios from 'axios';

export const deletePostSubmit = id => {
    return axios.delete(`/api/posts/${id}`)
};

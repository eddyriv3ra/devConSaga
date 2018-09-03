import axios from 'axios';

export const addPostSubmit = postData => {
    return axios.post('/api/posts', postData)
};

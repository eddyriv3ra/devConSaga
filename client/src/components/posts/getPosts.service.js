import axios from 'axios';

export const getPostsSubmit = () => {
    return axios.get('/api/posts')
};

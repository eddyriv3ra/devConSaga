import axios from 'axios';

export const deleteAccountService = () => {
    return axios.delete('/api/profile')
};

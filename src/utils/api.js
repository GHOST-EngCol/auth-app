import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reqres.in/api/', // Update with your backend URL
});

export default instance;
import axios from 'axios';

const api = axios.create({
    baseUrl: '192.168.0.111:1337'
})

export default api;
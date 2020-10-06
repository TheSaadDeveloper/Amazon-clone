import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-d5a5c/us-central1/api' // The Api (cload function) Url
});

export default instance
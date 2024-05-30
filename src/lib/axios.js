import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://livreeo.ma/api/public',
    timeout: 60000,
    headers: {
        Accept: 'application/json'
    },
});

export default axios;
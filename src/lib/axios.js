import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://livreeo.ma/api/public',
    headers: {
        Accept: 'application/json',
    },
});

export default axios;
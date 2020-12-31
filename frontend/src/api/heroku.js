import axios from 'axios';

//we make the api call using axios
export default axios.create({
    baseURL: 'https://sentiment-api99.herokuapp.com',
    timeout: 9000,
    headers: {
        'Content-Type': 'application/json',
    }
});
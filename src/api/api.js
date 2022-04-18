import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://f200-118-70-146-171.ap.ngrok.io'
})
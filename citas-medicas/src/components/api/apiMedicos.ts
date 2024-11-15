import axios from "axios";

const API_URL: string ="http://localhost:8080/api/med/";

const api= axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type':'application/json'
    }
});

export default api;
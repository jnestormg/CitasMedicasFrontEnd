import axios from "axios";

const API_URL="http://localhost:8080/api";

const apiPacientes= axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type':'application/json'
    }
})

export default apiPacientes;
import axios from "axios";

const API_URL="http://localhost:8080/api/hora"

const apiHorario= axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json'
    }
})

export default apiHorario
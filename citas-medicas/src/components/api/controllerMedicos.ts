import api from "./apiMedicos";
import type { Medicos } from "../../types";


//crear
const Crear = async (newItem: Medicos) => {
    try {
        const response = await api.post('/medicos', newItem);
        return response.data;
        console.log('Médico creado:', response.data);
    } catch (error) {
        console.error('Error al crear el médico:', error);
        throw error;  // Lanza el error para que puedas manejarlo en el componente
    }
};
// mostrar
const Mostrar=async()=>{
    try {
        const response=await api.get("/medicos");
        return response.data;
        
    } catch (error) {
        console.log(error);
        
    }
}

//actualizar
const Actualizar= async(id: number, item: Medicos)=>{
    try {
        const response= await api.put(`${id}`,item);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}

export {Crear, Mostrar, Actualizar};
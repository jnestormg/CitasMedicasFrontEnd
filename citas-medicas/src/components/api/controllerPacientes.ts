import apiPacientes from "./apiPacientes";
import type { Pacientes } from "../../types";

const CrearPaciente=async(item: Pacientes)=>{
    try {
        const response= await apiPacientes.post("/pacientes",item);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}

const MostrarPacientes=async()=>{
    try {
        const response= await apiPacientes.get("");
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}

export {CrearPaciente, MostrarPacientes}
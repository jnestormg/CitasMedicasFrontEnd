import apiHorario from "./apiHorarios";
import type { Horarios } from "../../types";

const crearHorario= async(item:Horarios)=>{
    try {
        const response= await apiHorario.post("/horario",item);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}

const mostrarHorario=async()=>{
    try {
        const response= await apiHorario.get("/horario");
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}

export {crearHorario, mostrarHorario}
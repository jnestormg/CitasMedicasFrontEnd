import apiEspecialidades from "./apiEspecialidades";

const MostrarEspecialidades=async()=>{
    try {
        const response= await apiEspecialidades.get("/mostrar");
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}

export {MostrarEspecialidades}
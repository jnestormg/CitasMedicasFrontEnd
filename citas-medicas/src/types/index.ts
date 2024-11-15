export type Medicos = {
    id?: number,
    datos_personales: {
        nombre: string,
        apellidos: string,
        telefono: number | undefined,
    },
    direccion: {
        calle?: string,
        ciudad?: string,
        colonia?: string,
        numero_casa?: string,
    },
    cedula: string,
    id_especialidad: {
        id: number,
        especialidad: string
    },
    id_horario:{
        id:number,
        dia: string,
        hora_inicio: string,
        hora_salida: string
    }
}

export type Horarios = {
    id: number,
    dia: string,
    hora_inicio: string,
    hora_salida: string
}

export type Pacientes={
    id?: number,
    edad: number,
    genero: string,
    datos_personales: {
        nombre: string,
        apellidos: string,
        telefono: number | undefined,
    },
    direccion: {
        calle?: string,
        ciudad?: string,
        colonia?: string,
        numero_casa?: string,
    }

}
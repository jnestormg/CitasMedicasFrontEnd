import { InputLabel, MenuItem, Select, TextField } from "@mui/material"
import type { Pacientes } from "../../types"
import { useState } from "react"
import { CrearPaciente, MostrarPacientes } from "../api/controllerPacientes"

const Form_Paciente = () => {

    const [nombre, setNombre] = useState<string>();
    const [apellidos, setApellidos] = useState<string>();
    const [telefono, setTelefono] = useState<number>();
    const [edad, setEdad] = useState<number>();
    const [genero, setGenero] = useState<string>();
    const [ciudad, setCiudad] = useState<string>('');
    const [colonia, setColonia] = useState<string>('');
    const [calle, setCalle] = useState<string>('');
    const [numeroCasa, setNumeroCasa] = useState<string>('');



    const handleSubmmit = async (e) => {
        e.preventDefault();
        try {
            const newItem: Pacientes = {
                datos_personales: {
                    nombre: nombre,
                    apellidos: apellidos,
                    telefono: telefono
                },
                direccion: {
                    ciudad: ciudad,
                    colonia: colonia,
                    calle: calle,
                    numero_casa: numeroCasa,
                },
                edad: edad,
                genero: genero,

            }
            await CrearPaciente(newItem);
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>

            <form onSubmit={handleSubmmit}>
                {/* nombre */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            label="Nombre del paciente"
                            variant="outlined"
                            autoComplete="given-name"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                </div>
                {/* apellidos */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            label="Apellidos"
                            variant="outlined"
                            autoComplete="family-name"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                        />
                    </div>
                </div>
                {/* telefono */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            label="Teléfono"
                            autoComplete="tel"
                            variant="outlined"
                            value={telefono}
                            onChange={(e) => setTelefono(Number(e.target.value))}
                        />
                    </div>
                </div>
                {/* edad */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            label="Edad"
                            variant="outlined"
                            value={edad}
                            onChange={(e) => setEdad(Number(e.target.value))}
                        />
                    </div>
                </div>
                {/* genero */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                        <Select
                            className="input-style"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Genero"
                            placeholder='Genero'
                            value={genero || ''}
                            onChange={(e) => setGenero(e.target.value)}
                        >

                            <MenuItem value='H' >
                                Hombre
                            </MenuItem>
                            <MenuItem value='M' >
                                Mujer
                            </MenuItem>


                        </Select>
                    </div>
                </div>
                {/* ciudad */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            autoComplete="family-name"
                            id="ciudad"
                            label="Ciudad"
                            variant="outlined"
                            value={ciudad}
                            onChange={(e) => setCiudad(e.target.value)}
                        />
                    </div>
                </div>
                {/* colonia */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            autoComplete="family-name"
                            id="colonia"
                            label="Colonia"
                            variant="outlined"
                            value={colonia}
                            onChange={(e) => setColonia(e.target.value)}
                        />
                    </div>
                </div>
                {/* calle */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            autoComplete="family-name"
                            id="calle"
                            label="Calle"
                            variant="outlined"
                            value={calle}
                            onChange={(e) => setCalle(e.target.value)}
                        />
                    </div>
                </div>
                {/* numero_casa */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            autoComplete="family-name"
                            id="numero_casa"
                            label="Número de la casa"
                            variant="outlined"
                            value={numeroCasa}
                            onChange={(e) => setNumeroCasa(e.target.value)}
                        />
                    </div>
                </div>
                <button>Guardar</button>
            </form>

        </div>
    )
}

export default Form_Paciente

import { useEffect, useState } from 'react'
import './index.css'
import { TextField, Select, MenuItem, InputLabel, Autocomplete } from '@mui/material'
import { Crear } from '../api/controllerMedicos'
import { Medicos } from '../../types'
import { mostrarHorario } from '../api/controllerHorarios'
import { MostrarEspecialidades } from '../api/controllerEspecialidades'
import Horarios from '../Horarios'


const Form_Medico = () => {

    const [nombre, setNombre] = useState<string>('');
    const [apellidos, setApellidos] = useState<string>('');
    const [telefono, setTelefono] = useState<number>();
    const [cedula, setCedula] = useState<string>('');
    const [ciudad, setCiudad] = useState<string>('');
    const [colonia, setColonia] = useState<string>('');
    const [calle, setCalle] = useState<string>('');
    const [numeroCasa, setNumeroCasa] = useState<string>('');
    const [especialidad, setEspecialidad] = useState<number | undefined>();
    const [especialidades, setEspecialidades] = useState([]);
    const [horario, setHorario] = useState([]);
    const [horarioSeleccionado, setHorarioSeleccionado] = useState([]);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (especialidad === null) {
            alert('Por favor seleccione una especialidad.');
            return;
        }
        try {
            const newItem: Medicos = {
                datos_personales: {
                    nombre: nombre,          // Nombre del médico
                    apellidos: apellidos,       // Apellidos del médico
                    telefono: telefono,        // Teléfono del médico
                },
                direccion: {
                    ciudad: ciudad,
                    colonia: colonia,
                    calle: calle,
                    numero_casa: numeroCasa,
                },
                cedula: cedula,
                id_especialidad: {
                    id: especialidad
                },
                id_horario: horarioSeleccionado
            };
            await Crear(newItem);
            limpiar();
        } catch (error) {
            console.log('Error al guardar el médico:', error);
            throw error
        }
    };

const limpiar=()=>{
    setNombre('');
    setApellidos('');
    setCalle('');
    setCedula('');
    setTelefono(0);
    setColonia('');
    setCiudad('');
    setNumeroCasa('');
    setEspecialidad(null);
    setHorarioSeleccionado([])
}

    useEffect(() => {
        const obtenerHorario = async () => {
            try {
                const respuesta = await mostrarHorario();
                setHorario(respuesta)
            } catch (error) {
                console.log(error);

            }
        }
        obtenerHorario();
        console.log("hora", horario);

    }, [])


    useEffect(() => {
        const obtenerEspecialidades = async () => {
            try {
                const response = await MostrarEspecialidades();
                setEspecialidades(response);
            } catch (error) {
                console.log(error);

            }
        }
        obtenerEspecialidades();
        console.log("especialidades: ", especialidades);


    }, [])


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='contain'>
                    <div className="formulario">
                        <h1 className='text-center text-xl font-medium'>Registrar Médico</h1>
                        {/* nombre */}
                        <div className="col-span-full">
                            <div className="mt-2">
                                <TextField
                                    className="input-style"
                                    autoComplete="given-name"
                                    id="nombre"
                                    label="Nombre del médico"
                                    variant="outlined"
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
                                    autoComplete="family-name"
                                    id="apellidos"
                                    label="Apellidos"
                                    variant="outlined"
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
                                    autoComplete="tel"
                                    type="tel"
                                    id="telefono"
                                    label="Teléfono"
                                    variant="outlined"
                                    value={telefono}
                                    onChange={(e) => setTelefono(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        {/* cedula */}
                        <div className="col-span-full">
                            <div className="mt-2">
                                <TextField
                                    className="input-style"
                                    id="cedula"
                                    label="Cédula"
                                    variant="outlined"
                                    value={cedula}
                                    onChange={(e) => setCedula(e.target.value)}
                                />                         </div>
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
                        {/* nuemero_casa */}
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
                        {/* Especialidad */}
                        <div className="col-span-full">
                            <div className="mt-2 w-full">
                                <InputLabel id="demo-simple-select-label">Especialidad</InputLabel>
                                <Select
                                    className="input-style"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Especialidad"
                                    placeholder='especialidad'
                                    value={especialidad || ''}
                                    onChange={(e) => setEspecialidad(Number(e.target.value))}
                                >
                                    {
                                        especialidades.map((x) => {
                                            return (
                                                <MenuItem key={x.id} value={x.id} title={x.descripcion}>
                                                    {x.especialidad}
                                                </MenuItem>
                                            )

                                        })
                                    }

                                </Select>


                            </div>
                        </div>

                        <Autocomplete
                            className="mt-3"
                            options={horario}
                            getOptionLabel={(option) => option.nombre}
                            multiple
                            value={horarioSeleccionado}  // Asegúrate de que sea un array
                            onChange={(event, newValue) => setHorarioSeleccionado(newValue)}  // Actualizar el estado con los días seleccionados
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name="dias"
                                    variant="outlined"
                                    label="Días laborales"
                                />
                            )}
                        />


                        <button className='boton-guardar'>Guardar</button>



                    </div>
                </div>
            </form>
        </>
    )
}

export default Form_Medico

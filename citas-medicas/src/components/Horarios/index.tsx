import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { crearHorario } from '../api/controllerHorarios';

const someOptions = [
    { label: 'Lunes' },
    { label: 'Martes' },
    { label: 'Miércoles' },
    { label: 'Jueves' },
    { label: 'Viernes' },
    { label: 'Sábado' },
    { label: 'Domingo' },
];

const Horarios = () => {
    const [nombre,setNombre]= useState<string>();
    const [diasLaborales, setDiasLaborales] = useState([]); // Cambiar a un array vacío
    const [horaEntrada, setHoraEntrada] = useState('');
    const [horaSalida, setHoraSalida] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newHorario = {
                nombre: nombre,
                dia: diasLaborales.map((dia)=>dia.label),  // Mapear a solo los nombres de los días
                hora_inicio: horaEntrada,
                hora_salida: horaSalida,
            };
            console.log('Nuevo horario:', newHorario);

            // Enviar los datos al backend
            await crearHorario(newHorario);
        } catch (error) {
            console.error('Error al guardar el horario:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* Nombre horario */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            id="entrada"
                            label="Nombre del horario:"
                            variant="outlined"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                </div>

                {/* Días laborales */}
                <div className="col-span-full">
                    <Autocomplete
                        className="mt-3"
                        options={someOptions}
                        getOptionLabel={(option) => option.label}
                        multiple
                        value={diasLaborales}  // Asegúrate de que sea un array
                        onChange={(event, newValue) => setDiasLaborales(newValue)}  // Actualizar el estado con los días seleccionados
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                name="dias"
                                variant="outlined"
                                label="Días laborales"
                            />
                        )}
                    />
                </div>

                {/* Hora de entrada */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            type="time"
                            id="entrada"
                            label="Hora de entrada"
                            variant="outlined"
                            value={horaEntrada}
                            onChange={(e) => setHoraEntrada(e.target.value)}
                        />
                    </div>
                </div>

                {/* Hora de salida */}
                <div className="col-span-full">
                    <div className="mt-2">
                        <TextField
                            className="input-style"
                            type="time"
                            id="salida"
                            label="Hora de salida"
                            variant="outlined"
                            value={horaSalida}
                            onChange={(e) => setHoraSalida(e.target.value)}
                        />
                    </div>
                </div>

                <button type="submit">Asignar</button>
            </form>
        </div>
    );
};

export default Horarios;

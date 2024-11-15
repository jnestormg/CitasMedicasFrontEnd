import { useEffect, useState } from "react";
import { Mostrar } from "../api/controllerMedicos";
import type { Medicos } from "../../types";
import './index.css'

const TablaMedicos = () => {
    const [data, setData] = useState<Medicos[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const items = await Mostrar();
                console.log(items);
                setData(items);
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="container">
                <div className="medicos">
                    <table>
                        <thead className="cabecera_table">
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Teléfono</th>
                                <th>Cédula</th>
                                <th>Ciudad</th>
                                <th>Especialidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.datos_personales.nombre}</td>
                                        <td>{item.datos_personales.apellidos}</td>
                                        <td>{item.datos_personales.telefono}</td>
                                        <td>{item.cedula}</td>
                                        <td>{item.direccion.ciudad}</td>
                                        <td>{item.id_especialidad.especialidad}</td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TablaMedicos;

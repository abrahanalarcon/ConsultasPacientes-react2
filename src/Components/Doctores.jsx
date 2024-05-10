import { useState,useEffect } from "react"
import Datadoc from './Datadoc';
import axios from 'axios';

const Doctores = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7070/api/Doctors');
                setData(response.data);
            } catch (error) {
                setError('Error al cargar los datos. Inténtalo de nuevo más tarde.');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center">Cargando...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }
    return (
        <div className="md:w-3/5 xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 className="text-3xl font-light text-center">Doctores</h2>
        
            <div className="flex flex-col mt-10">
                <div className="py-2 overflow-x-auto">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Id
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Especialidad
                                    </th>

                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Hospital
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody id="listado-clientes" className="bg-white">
                            {data.map((doctor) => (
                                <Datadoc 
                                   key={doctor.id}
                                   doctor={doctor}
                                />
                                  
                            ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctores;

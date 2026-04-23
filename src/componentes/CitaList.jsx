import React, {useEffect, useState} from 'react';
import api from './services/api.js';

const CitaList = () => {
    const [citas, setCitas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/users')
        .then((response) => {
            setCitas(response.data);
            setLoading(false);
    })
    .catch((error) => {
        console.error('error al cargar las citas', error);
        setLoading(false);
    });
}, []);

if (loading) return <p>Cargando citas...</p>;

return(
    <div>
        <h2>Citas</h2>
        <ul>
            {citas.map((cita) => (
                <li key={cita.id}>
                <strong>{cita.name}</strong>
                </li>
            ))}
        </ul>
    </div>
);
};

export default CitaList;
import React from 'react';

const Datapa = ({ paciente }) => {
    const { id, nombre, edad, genero, direccion, telefono } = paciente;

    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{id}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{nombre}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{edad}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{genero}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{direccion}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{telefono}</td>
        </tr>
    );
}

export default Datapa;
/*Codigo original */
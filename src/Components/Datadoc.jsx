import React from 'react';

const Datadoc = ({ doctor }) => {
    const { id, nombre, especialidad,hospital } = doctor;

    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{id}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{nombre}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{especialidad}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{hospital}</td>
            
        </tr>
    );
}

export default Datadoc;

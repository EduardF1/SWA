import React from 'react';

const TableRow = ({warning}) => {
    return (
        <tr key={warning.id}>
            {warning.forEach((property, index) => <td key={index}>{property}</td>)}
        </tr>
    );
};

export default TableRow;
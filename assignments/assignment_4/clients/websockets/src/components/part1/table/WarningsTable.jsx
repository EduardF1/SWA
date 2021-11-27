import React from 'react';

const WarningsTable = ({warningsTableRows}) => {

    return (
        <tbody id='warnings-table'>
            {warningsTableRows.length > 0 ? warningsTableRows : 'Nothing to show.'}
        </tbody>
    );
};

export default WarningsTable;
import React from 'react';

const WarningsButton = ({getWarningsSinceProp}) => {
    return (
        <button onClick={getWarningsSinceProp}>Get warnings since</button>
    );
};

export default WarningsButton;
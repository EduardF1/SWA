import React from 'react';

const ToggleButton = ({onCheckboxClickProp}) => {
    return (
        <input type='checkbox' id='toggle' onClick={onCheckboxClickProp} defaultChecked={true}/>
    );
};

export default ToggleButton;
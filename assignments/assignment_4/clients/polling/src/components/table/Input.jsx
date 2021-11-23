import React from 'react';

const renderItem = (id, onclick, type, name, value, checked) => {
    if (checked === undefined && name === undefined && onclick === undefined)
        return <input id={id} type={type}/>;
    else if (checked === undefined && name !== undefined && onclick !== undefined)
        return <input id={id} type={type} onClick={onclick} name={name}/>;
    else if (checked !== undefined && name !== undefined && onclick !== undefined)
        return <input id={id} type={type}  onClick={onclick} name={name}/>;
}

export const Input = ({id, onclick, type, name, value, checked, label}) =>
    (
        <>
            {renderItem(id, onclick, type, name, value, checked, label)}
        </>
    );
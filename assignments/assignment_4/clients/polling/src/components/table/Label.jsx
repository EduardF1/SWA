import React from 'react';

export const Label = ({_for, label}) =>
     (
        <>
            <label htmlFor={_for}>{label}</label>
        </>
    );

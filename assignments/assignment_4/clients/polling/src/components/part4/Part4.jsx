import React from 'react';
import {LABELS, PARTS, REQUIREMENTS} from "../../utility/constants";
import ToggleButton from "./ToggleButton";

const Part4 = ({onCheckboxClickProp}) => {
    return (
        <div className={'partFour'}>
            <h3>{PARTS[3]}</h3>
            <h5 id={PARTS[3]}>{REQUIREMENTS[3]}</h5>
            <div id='onoffWarnings'>{LABELS[2]}
                <ToggleButton onCheckboxClickProp={onCheckboxClickProp}/>
            </div>
        </div>
    );
};

export default Part4;
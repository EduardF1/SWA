import React from 'react';
import {DEFAULT_DATE, LABELS, PARTS, REQUIREMENTS} from "../../utility/constants";
import WarningsButton from "./WarningsButton";

const Part2 = ({getWarningsSinceProp}) => {
    return (
        <div>
            <h3>{PARTS[1]}</h3>
            <h6 id={PARTS[1]}>{REQUIREMENTS[1]}</h6>
            <div>{LABELS[0]} <input type='datetime-local' id='local-date' defaultValue={DEFAULT_DATE}/>
                <WarningsButton getWarningsSinceProp={getWarningsSinceProp}/>
            </div>
        </div>
    );
};

export default Part2;
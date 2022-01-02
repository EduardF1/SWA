import React from 'react';
import {PARTS, REQUIREMENTS} from "../../utility/constants";
import SeverityDropdown from "./SeverityDropdown";

const Part3 = ({changeSeverityProp}) => {
    return (
        <div className={'partThree'}>
            <h3>{PARTS[2]}</h3>
            <h5 id={PARTS[2]}>{REQUIREMENTS[2]}</h5>
            <SeverityDropdown changeSeverityProp={changeSeverityProp}/>
        </div>
    );
};

export default Part3;
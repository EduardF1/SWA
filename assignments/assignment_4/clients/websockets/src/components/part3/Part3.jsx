import React from 'react';
import {PARTS, REQUIREMENTS} from "../../utility/constants";
import SeverityDropdown from "./SeverityDropdown";

const Part3 = ({changeSeverityProp}) => {
    return (
        <div>
            <h3>{PARTS[2]}</h3>
            <h6 id={PARTS[2]}>{REQUIREMENTS[2]}</h6>
            <SeverityDropdown changeSeverityProp={changeSeverityProp}/>
        </div>
    );
};

export default Part3;
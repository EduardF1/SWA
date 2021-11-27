import React from 'react';
import {LABELS, SEVERITIES} from "../../utility/constants";

const SeverityDropdown = ({changeSeverityProp}) => {
    return (
        <div id='main-warnings'>{LABELS[1]}
            <select className='bootstrap-select' id='severity' onChange={changeSeverityProp}>
                {
                    SEVERITIES.map((severityLabel, index) => index === 0 ?
                    <option value={index} key={index} defaultChecked={true}>{severityLabel}</option> :
                    <option value={index} key={index}>{severityLabel}</option>)
                }
            </select>
        </div>
    );
};

export default SeverityDropdown;
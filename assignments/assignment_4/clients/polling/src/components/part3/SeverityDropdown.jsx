// Own
import {LABELS, SEVERITIES} from "../../utility/constants";

/**
 * SeverityDropdown component. Used for selecting a severity value from the dropdown menu.
 * @param changeSeverityProp (Function) Prop value used to change the value of the "severityValue" variable in the "Homepage" component.
 * @returns {JSX.Element} The SeverityDropdown component.
 * @constructor
 */
export const SeverityDropdown = ({changeSeverityProp}) =>
    (
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
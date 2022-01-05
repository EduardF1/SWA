// Own
import {PARTS, REQUIREMENTS} from "../../utility/constants";
import {SeverityDropdown} from "./SeverityDropdown";

/**
 * Part3 component.
 * @param changeSeverityProp (Function) Prop value used to change the value of the "severityValue" variable in the "Homepage" component.
 *                           Passed further to the "SeverityDropdown" component.
 * @returns {JSX.Element} The Part3 component.
 * @constructor
 */
export const Part3 = ({changeSeverityProp}) =>
     (
        <div className={'partThree'}>
            <h3>{PARTS[2]}</h3>
            <h5 id={PARTS[2]}>{REQUIREMENTS[2]}</h5>
            <SeverityDropdown changeSeverityProp={changeSeverityProp}/>
        </div>
    );
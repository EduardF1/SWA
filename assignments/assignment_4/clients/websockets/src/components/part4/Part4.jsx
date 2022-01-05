// Own
import {ToggleButton} from "./ToggleButton";
import {LABELS, PARTS, REQUIREMENTS} from "../../utility/constants";

/**
 * Part4 component.
 * @param onCheckboxClickProp (Function) Function to trigger state change of the toggle checkbox.
 *                             Passed further to the "ToggleButton" component.
 * @returns {JSX.Element} The Part4 component.
 * @constructor
 */
export const Part4 = ({onCheckboxClickProp}) =>
    (
        <div className={'partFour'}>
            <h3>{PARTS[3]}</h3>
            <h5 id={PARTS[3]}>{REQUIREMENTS[3]}</h5>
            <div id='onoffWarnings'>{LABELS[2]}
                <ToggleButton onCheckboxClickProp={onCheckboxClickProp}/>
            </div>
        </div>
    );
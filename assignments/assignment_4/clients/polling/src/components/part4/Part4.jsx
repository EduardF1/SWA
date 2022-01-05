// Own
import {LABELS, PARTS, REQUIREMENTS} from "../../utility/constants";
import {ToggleButton} from "./ToggleButton";

/**
 * Part4 component.
 * @param onCheckboxClickProp (Function) Prop value used to trigger changes of the toggle checkbox. Further passed to
 *                            the "ToggleButton" component.
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
/**
 * ToggleButton component.
 * @param onCheckboxClickProp (Function) Prop value used to change the value of the toggle checkbox.
 * @returns {JSX.Element} The ToggleButton component.
 * @constructor
 */
export const ToggleButton = ({onCheckboxClickProp}) => <input type='checkbox' id='toggle' onClick={onCheckboxClickProp} defaultChecked={true}/>;
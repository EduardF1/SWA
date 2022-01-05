/**
 * ToggleButton component.
 * @param onCheckboxClickProp (Function) Function to trigger state change of the toggle checkbox.
 * @returns {JSX.Element} The ToggleButton component.
 * @constructor
 */
export const ToggleButton = ({onCheckboxClickProp}) => <input type='checkbox' id='toggle' onClick={onCheckboxClickProp} defaultChecked={true}/>;
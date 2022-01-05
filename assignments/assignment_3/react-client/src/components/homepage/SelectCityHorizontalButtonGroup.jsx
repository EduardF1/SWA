// 3rd Party
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
// Own
import {CITIES} from "../../assets/Constants";

/**
 * SelectCityHorizontalButtonGroup component, contains three buttons, one for each city ['Horsens', 'Aarhus', 'Copenhagen'].
 * When one of the cities is clicked, it will update the "selectedCity" variable's value in the HomePage component.
 * @param onSelectedCityChange (Function) City change event handle function.
 * @returns {JSX.Element} The SelectCityHorizontalButtonGroup component.
 * @constructor
 */
export const SelectCityHorizontalButtonGroup = ({onSelectedCityChange}) =>
    (
        <>
            <div className="my-3">
                <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
                    {CITIES.map((cityName, index) => <ToggleButton key={index} variant="info" value={index} onClick={() => onSelectedCityChange(cityName)}>{cityName}</ToggleButton>)}
                </ToggleButtonGroup>
                <br/>
            </div>
        </>
    );
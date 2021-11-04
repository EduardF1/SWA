import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {CITIES} from "../../assets/Constants";

export const SelectCityHorizontalButtonGroup = ({onSelectedCityChange}) =>
    (
        <>
            <div className="my-3">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    {CITIES.map((cityName, index) => (<ToggleButton key={index} variant="info" value={index} onClick={() => onSelectedCityChange(cityName)}>{cityName}</ToggleButton>))}
                </ToggleButtonGroup>
                <br/>
            </div>
        </>
    )
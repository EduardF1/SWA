import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function SelectCityHorizontalButtonGroup({onSelectedCityChange}) {
    return (
        <>
            <div className="my-3">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton variant="info" value={1} onClick={() => onSelectedCityChange('Horsens')}>Horsens</ToggleButton>
                    <ToggleButton variant="info" value={2} onClick={() => onSelectedCityChange('Aarhus')}>Aarhus</ToggleButton>
                    <ToggleButton variant="info" value={3} onClick={() => onSelectedCityChange('Copenhagen')}>Copenhagen</ToggleButton>
                </ToggleButtonGroup>

                <br />
            </div>
        </>
    )
}

export default SelectCityHorizontalButtonGroup;
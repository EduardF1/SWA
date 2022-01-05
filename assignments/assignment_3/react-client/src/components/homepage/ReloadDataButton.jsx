// 3rd Party
import Button from "react-bootstrap/Button";
// Own
import {retrieveAllData} from "../../utility/StoreHandler";
import {RELOAD_DATA_BUTTON_LABEL} from "../../assets/Constants";

/**
 * ReloadDataButton component function, when clicked, it triggers an update (through the dispatchers) of forecast and historic data in the state store.
 * @param selectedCity (String) Prop used for identifying the currently selected city, the initial (default) value is "Horsens".
 * @returns {JSX.Element} The ReloadDataButton component.
 * @constructor
 */
export const ReloadDataButton = ({selectedCity}) =>
    (
        <>
            <Button className="outline-btn mt-3" onClick={() => retrieveAllData(selectedCity)}>{RELOAD_DATA_BUTTON_LABEL}</Button>{' '}
        </>
    );
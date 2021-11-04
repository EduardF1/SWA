import Button from "react-bootstrap/Button";
import {retrieveAllData} from "../../utility/StoreHandler";
import {RELOAD_DATA_BUTTON_LABEL} from "../../assets/Constants";

export const ReloadDataButton = ({selectedCity}) =>
    (
        <>
            <div><Button className="outline-btn mt-3" onClick={() => retrieveAllData(selectedCity)}>{RELOAD_DATA_BUTTON_LABEL}</Button>{' '}</div>
        </>
    )
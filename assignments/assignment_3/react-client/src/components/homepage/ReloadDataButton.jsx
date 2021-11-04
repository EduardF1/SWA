import Button from "react-bootstrap/Button";
import {retrieveAllData} from "../../utility/StoreHandler";

function ReloadDataButton({selectedCity}) {
    return (
        <>
            <div><Button className="outline-btn mt-3" onClick={() => retrieveAllData(selectedCity)}>Reload data</Button>{' '}</div>
        </>
    )
}

export default ReloadDataButton;
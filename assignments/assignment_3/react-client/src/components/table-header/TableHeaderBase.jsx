import TableHeaderRowItem from "./TableHeaderRowItem";
import {LABELS} from "../../assets/Constants";

function TableHeaderBase() {
    return (
        <>
            {LABELS.map(element => <TableHeaderRowItem label={element}/>)}
        </>
    )
}

export default TableHeaderBase;
import {TableHeaderRowItem} from "./TableHeaderRowItem";
import {TABLE_HEADER_LABELS} from "../../assets/Constants";

export const TableHeaderBase = () =>
    (
        <>
            {TABLE_HEADER_LABELS.map((element, index) => <TableHeaderRowItem key={index} label={element}/>)}
        </>
    )
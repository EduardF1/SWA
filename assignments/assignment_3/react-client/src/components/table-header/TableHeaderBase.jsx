import {TableHeaderRowItem} from "./TableHeaderRowItem";
import {LABELS} from "../../assets/Constants";

export const TableHeaderBase = () =>
    (
        <>
            {LABELS.map((element, index) => <TableHeaderRowItem key={index} label={element}/>)}
        </>
    )